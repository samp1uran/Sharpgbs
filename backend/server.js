import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

const supabase =
  supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey)
    : null;
const transporter =
  emailUser && emailPass
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
        logger: true,
        debug: true,
      })
    : null;

app.post(["/contact", "/api/contact"], async (req, res) => {
  let stage = "configuration";

  try {
    if (!supabase || !transporter) {
      console.error(
        "Contact service is missing required Supabase or email configuration.",
      );
      return res.status(503).json({
        success: false,
        msg: "The contact service is not configured. Please contact the site administrator.",
      });
    }

    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res
        .status(400)
        .json({ success: false, msg: "All fields required" });
    }

    stage = "database";
    const { error: insertError } = await supabase
      .from("contacts")
      .insert([{ name, email, phone, message }]);

    if (insertError) {
      throw insertError;
    }

    stage = "email";
    const mailOptions = {
      from: `"Website Contact Form" <${email}>`,
      to: emailUser,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (err) {
    const errorDetails =
      err && typeof err === "object"
        ? err
        : { message: String(err) };
    const errorCode =
      typeof errorDetails.code === "string" ? errorDetails.code : undefined;
    const errorMessage =
      typeof errorDetails.message === "string" ? errorDetails.message : "";

    console.error("Contact submission failed:", {
      stage,
      code: errorCode,
      message: errorMessage,
    });

    if (stage === "email") {
      return res.status(502).json({
        success: false,
        code: "CONTACT_EMAIL_FAILED",
        msg: "Your message was saved, but the email notification failed. Please do not submit it again; contact us on WhatsApp if your request is urgent.",
      });
    }

    if (stage === "database") {
      const normalizedMessage = errorMessage.toLowerCase();
      let msg =
        "We could not save your message. Please try again later or contact us on WhatsApp.";

      if (
        errorCode === "42P01" ||
        errorCode === "PGRST205" ||
        /relation .* does not exist|could not find the table/.test(
          normalizedMessage,
        )
      ) {
        msg =
          "The Supabase public.contacts table is missing. Create it with name, email, phone, and message columns, then try again.";
      } else if (
        errorCode === "42703" ||
        errorCode === "PGRST204" ||
        /column .* does not exist|could not find the .* column/.test(
          normalizedMessage,
        )
      ) {
        msg =
          "The Supabase contacts table is missing a required column. Check that it has name, email, phone, and message columns.";
      } else if (
        errorCode === "42501" ||
        /permission denied|row.level security/.test(normalizedMessage)
      ) {
        msg =
          "Supabase denied access to the contacts table. Check that Vercel uses the Supabase secret or service_role key for SUPABASE_SERVICE_ROLE_KEY.";
      } else if (errorCode) {
        msg = `Supabase could not save your message (database error ${errorCode}). Check the Supabase logs for details.`;
      }

      return res.status(500).json({
        success: false,
        code: "CONTACT_SAVE_FAILED",
        msg,
      });
    }

    return res.status(500).json({
      success: false,
      msg: "The contact service could not process your request. Please contact the site administrator.",
    });
  }
});

const adminPassword = process.env.ADMIN_PASSWORD;
const tokenSecret = process.env.ADMIN_TOKEN_SECRET || adminPassword;
const TOKEN_TTL_MS = 8 * 60 * 60 * 1000;
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const sign = (value) =>
  crypto.createHmac("sha256", tokenSecret).update(value).digest("base64url");

const safeEqual = (a, b) => {
  const left = crypto.createHash("sha256").update(String(a)).digest();
  const right = crypto.createHash("sha256").update(String(b)).digest();
  return crypto.timingSafeEqual(left, right);
};

const createToken = () => {
  const payload = Buffer.from(
    JSON.stringify({ exp: Date.now() + TOKEN_TTL_MS }),
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
};

const isValidToken = (token) => {
  const [payload, signature] = String(token || "").split(".");
  if (!payload || !signature || !safeEqual(sign(payload), signature)) {
    return false;
  }

  try {
    const { exp } = JSON.parse(Buffer.from(payload, "base64url").toString());
    return typeof exp === "number" && exp > Date.now();
  } catch {
    return false;
  }
};

const failedLogins = new Map();
const MAX_FAILED_LOGINS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

const requireAdmin = (req, res, next) => {
  if (!supabase || !adminPassword) {
    return res.status(503).json({
      success: false,
      msg: "The admin panel is not configured.",
    });
  }

  const token = (req.headers.authorization || "").replace(/^Bearer /, "");
  if (!isValidToken(token)) {
    return res
      .status(401)
      .json({ success: false, msg: "Please log in again." });
  }

  next();
};

const parseTestimonial = (body) => {
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const feedback =
    typeof body?.feedback === "string" ? body.feedback.trim() : "";
  const displayOrder = Number.parseInt(body?.display_order, 10);

  if (!name || name.length > 100) {
    return { error: "Name is required (max 100 characters)." };
  }
  if (!feedback || feedback.length > 1000) {
    return { error: "Feedback is required (max 1000 characters)." };
  }

  return {
    value: {
      name,
      feedback,
      is_visible: body?.is_visible !== false,
      display_order: Number.isFinite(displayOrder) ? displayOrder : 0,
    },
  };
};

const sendDatabaseError = (res, error) => {
  console.error("Testimonials request failed:", {
    code: error?.code,
    message: error?.message,
  });
  return res.status(500).json({
    success: false,
    msg: "The testimonials request could not be completed.",
  });
};

const listTestimonials = (visibleOnly) => async (_req, res) => {
  if (!supabase) {
    return res.status(503).json({
      success: false,
      msg: "The testimonials service is not configured.",
    });
  }

  let query = supabase
    .from("testimonials")
    .select("id, name, feedback, is_visible, display_order, created_at")
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (visibleOnly) {
    query = query.eq("is_visible", true);
  }

  const { data, error } = await query;
  if (error) return sendDatabaseError(res, error);

  return res.status(200).json({ success: true, testimonials: data });
};

app.get(["/testimonials", "/api/testimonials"], listTestimonials(true));

app.post(["/admin/login", "/api/admin/login"], (req, res) => {
  if (!adminPassword) {
    return res.status(503).json({
      success: false,
      msg: "The admin panel is not configured.",
    });
  }

  const attempt = failedLogins.get(req.ip) || { count: 0, since: Date.now() };
  if (Date.now() - attempt.since > LOCKOUT_MS) {
    attempt.count = 0;
    attempt.since = Date.now();
  }
  if (attempt.count >= MAX_FAILED_LOGINS) {
    return res.status(429).json({
      success: false,
      msg: "Too many attempts. Please try again later.",
    });
  }

  if (!safeEqual(req.body?.password ?? "", adminPassword)) {
    attempt.count += 1;
    failedLogins.set(req.ip, attempt);
    return res
      .status(401)
      .json({ success: false, msg: "Incorrect password." });
  }

  failedLogins.delete(req.ip);
  return res.status(200).json({ success: true, token: createToken() });
});

app.get(
  ["/admin/testimonials", "/api/admin/testimonials"],
  requireAdmin,
  listTestimonials(false),
);

app.post(
  ["/admin/testimonials", "/api/admin/testimonials"],
  requireAdmin,
  async (req, res) => {
    const { value, error: validationError } = parseTestimonial(req.body);
    if (validationError) {
      return res.status(400).json({ success: false, msg: validationError });
    }

    const { data, error } = await supabase
      .from("testimonials")
      .insert([value])
      .select()
      .single();
    if (error) return sendDatabaseError(res, error);

    return res.status(201).json({ success: true, testimonial: data });
  },
);

app.put(
  ["/admin/testimonials/:id", "/api/admin/testimonials/:id"],
  requireAdmin,
  async (req, res) => {
    if (!UUID_PATTERN.test(req.params.id)) {
      return res.status(400).json({ success: false, msg: "Invalid id." });
    }

    const { value, error: validationError } = parseTestimonial(req.body);
    if (validationError) {
      return res.status(400).json({ success: false, msg: validationError });
    }

    const { data, error } = await supabase
      .from("testimonials")
      .update(value)
      .eq("id", req.params.id)
      .select()
      .maybeSingle();
    if (error) return sendDatabaseError(res, error);
    if (!data) {
      return res
        .status(404)
        .json({ success: false, msg: "Testimonial not found." });
    }

    return res.status(200).json({ success: true, testimonial: data });
  },
);

app.delete(
  ["/admin/testimonials/:id", "/api/admin/testimonials/:id"],
  requireAdmin,
  async (req, res) => {
    if (!UUID_PATTERN.test(req.params.id)) {
      return res.status(400).json({ success: false, msg: "Invalid id." });
    }

    const { error } = await supabase
      .from("testimonials")
      .delete()
      .eq("id", req.params.id);
    if (error) return sendDatabaseError(res, error);

    return res.status(200).json({ success: true });
  },
);

const COURSE_COLUMNS =
  "id, slug, title, description, duration, fee, mode, audience, curriculum, thumbnail_url, is_visible, display_order, created_at";
const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const THUMBNAIL_PREFIX = "/course-thumbnails/";
const THUMBNAIL_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../frontend/public/course-thumbnails",
);
const THUMBNAIL_FILE_PATTERN = /^[0-9a-f-]{36}\.(png|jpg|webp)$/;

const detectImageType = (buffer) => {
  if (
    buffer.length > 8 &&
    buffer.subarray(0, 8).equals(
      Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    )
  ) {
    return { contentType: "image/png", ext: "png" };
  }
  if (buffer.length > 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return { contentType: "image/jpeg", ext: "jpg" };
  }
  if (
    buffer.length > 12 &&
    buffer.subarray(0, 4).toString("ascii") === "RIFF" &&
    buffer.subarray(8, 12).toString("ascii") === "WEBP"
  ) {
    return { contentType: "image/webp", ext: "webp" };
  }
  return null;
};

const isOwnThumbnailUrl = (url) =>
  url.startsWith(THUMBNAIL_PREFIX) &&
  THUMBNAIL_FILE_PATTERN.test(url.slice(THUMBNAIL_PREFIX.length));

const removeThumbnail = async (url) => {
  if (!url || !isOwnThumbnailUrl(url)) return;

  try {
    await fs.rm(path.join(THUMBNAIL_DIR, url.slice(THUMBNAIL_PREFIX.length)), {
      force: true,
    });
  } catch (error) {
    console.error("Thumbnail cleanup failed:", { message: error.message });
  }
};

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const parseCourse = (body) => {
  const text = (key, max) =>
    typeof body?.[key] === "string" ? body[key].trim().slice(0, max + 1) : "";
  const fields = {
    title: text("title", 100),
    description: text("description", 1000),
    duration: text("duration", 50),
    fee: text("fee", 50),
    mode: text("mode", 50),
    audience: text("audience", 200),
  };
  const limits = {
    title: 100,
    description: 1000,
    duration: 50,
    fee: 50,
    mode: 50,
    audience: 200,
  };

  for (const [key, value] of Object.entries(fields)) {
    if (!value || value.length > limits[key]) {
      return {
        error: `${key} is required (max ${limits[key]} characters).`,
      };
    }
  }

  const curriculum = (Array.isArray(body?.curriculum) ? body.curriculum : [])
    .filter((item) => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
  if (curriculum.length > 50 || curriculum.some((item) => item.length > 200)) {
    return { error: "Curriculum can have up to 50 items of 200 characters." };
  }

  const slug =
    typeof body?.slug === "string" && body.slug.trim()
      ? body.slug.trim().toLowerCase()
      : slugify(fields.title);
  if (!slug || slug.length > 80 || !SLUG_PATTERN.test(slug)) {
    return {
      error: "Slug may only have lowercase letters, numbers and hyphens.",
    };
  }

  const thumbnailUrl =
    typeof body?.thumbnail_url === "string" ? body.thumbnail_url.trim() : "";
  if (thumbnailUrl && !isOwnThumbnailUrl(thumbnailUrl)) {
    return { error: "Thumbnail must be uploaded through the admin panel." };
  }

  const displayOrder = Number.parseInt(body?.display_order, 10);

  return {
    value: {
      ...fields,
      slug,
      curriculum,
      thumbnail_url: thumbnailUrl || null,
      is_visible: body?.is_visible !== false,
      display_order: Number.isFinite(displayOrder) ? displayOrder : 0,
    },
  };
}; 

const sendCourseError = (res, error) => {
  if (error?.code === "23505") {
    return res.status(409).json({
      success: false,
      msg: "A course with this slug already exists. Use a different slug.",
    });
  }
  return sendDatabaseError(res, error);
};

const requireDatabase = (res) => {
  if (supabase) return true;
  res.status(503).json({
    success: false,
    msg: "The courses service is not configured.",
  });
  return false;
};

app.get(["/courses", "/api/courses"], async (_req, res) => {
  if (!requireDatabase(res)) return;

  const { data, error } = await supabase
    .from("courses")
    .select(COURSE_COLUMNS)
    .eq("is_visible", true)
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) return sendDatabaseError(res, error);

  return res.status(200).json({ success: true, courses: data });
});

app.get(["/courses/:slug", "/api/courses/:slug"], async (req, res) => {
  if (!requireDatabase(res)) return;

  const { data, error } = await supabase
    .from("courses")
    .select(COURSE_COLUMNS)
    .eq("slug", req.params.slug)
    .eq("is_visible", true)
    .maybeSingle();
  if (error) return sendDatabaseError(res, error);
  if (!data) {
    return res.status(404).json({ success: false, msg: "Course not found." });
  }

  return res.status(200).json({ success: true, course: data });
});

app.get(
  ["/admin/courses", "/api/admin/courses"],
  requireAdmin,
  async (_req, res) => {
    const { data, error } = await supabase
      .from("courses")
      .select(COURSE_COLUMNS)
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: true });
    if (error) return sendDatabaseError(res, error);

    return res.status(200).json({ success: true, courses: data });
  },
);

app.post(
  ["/admin/courses", "/api/admin/courses"],
  requireAdmin,
  async (req, res) => {
    const { value, error: validationError } = parseCourse(req.body);
    if (validationError) {
      return res.status(400).json({ success: false, msg: validationError });
    }

    const { data, error } = await supabase
      .from("courses")
      .insert([value])
      .select(COURSE_COLUMNS)
      .single();
    if (error) return sendCourseError(res, error);

    return res.status(201).json({ success: true, course: data });
  },
);

app.post(
  ["/admin/courses/thumbnail", "/api/admin/courses/thumbnail"],
  requireAdmin,
  express.raw({ type: ["image/png", "image/jpeg", "image/webp"], limit: "2mb" }),
  async (req, res) => {
    const image = Buffer.isBuffer(req.body) ? detectImageType(req.body) : null;
    if (!image) {
      return res.status(400).json({
        success: false,
        msg: "Please upload a PNG, JPG or WebP image (max 2 MB).",
      });
    }

    const fileName = `${crypto.randomUUID()}.${image.ext}`;
    try {
      await fs.mkdir(THUMBNAIL_DIR, { recursive: true });
      await fs.writeFile(path.join(THUMBNAIL_DIR, fileName), req.body);
    } catch (error) {
      console.error("Thumbnail save failed:", { message: error.message });
      return res.status(500).json({
        success: false,
        msg: "Could not save the image on this server (uploads work only locally).",
      });
    }

    return res
      .status(201)
      .json({ success: true, url: `${THUMBNAIL_PREFIX}${fileName}` });
  },
);

app.put(
  ["/admin/courses/:id", "/api/admin/courses/:id"],
  requireAdmin,
  async (req, res) => {
    if (!UUID_PATTERN.test(req.params.id)) {
      return res.status(400).json({ success: false, msg: "Invalid id." });
    }

    const { value, error: validationError } = parseCourse(req.body);
    if (validationError) {
      return res.status(400).json({ success: false, msg: validationError });
    }

    const { data: existing } = await supabase
      .from("courses")
      .select("thumbnail_url")
      .eq("id", req.params.id)
      .maybeSingle();

    const { data, error } = await supabase
      .from("courses")
      .update(value)
      .eq("id", req.params.id)
      .select(COURSE_COLUMNS)
      .maybeSingle();
    if (error) return sendCourseError(res, error);
    if (!data) {
      return res
        .status(404)
        .json({ success: false, msg: "Course not found." });
    }

    if (existing?.thumbnail_url && existing.thumbnail_url !== data.thumbnail_url) {
      await removeThumbnail(existing.thumbnail_url);
    }

    return res.status(200).json({ success: true, course: data });
  },
);

app.delete(
  ["/admin/courses/:id", "/api/admin/courses/:id"],
  requireAdmin,
  async (req, res) => {
    if (!UUID_PATTERN.test(req.params.id)) {
      return res.status(400).json({ success: false, msg: "Invalid id." });
    }

    const { data: existing } = await supabase
      .from("courses")
      .select("thumbnail_url")
      .eq("id", req.params.id)
      .maybeSingle();

    const { error } = await supabase
      .from("courses")
      .delete()
      .eq("id", req.params.id);
    if (error) return sendDatabaseError(res, error);

    await removeThumbnail(existing?.thumbnail_url);

    return res.status(200).json({ success: true });
  },
);

app.use((err, _req, res, next) => {
  if (err?.type === "entity.too.large") {
    return res.status(413).json({
      success: false,
      msg: "Image is too large. Maximum size is 2 MB.",
    });
  }

  if (err?.type === "entity.parse.failed") {
    return res.status(400).json({
      success: false,
      msg: "Request body must be valid JSON.",
    });
  }

  next(err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
