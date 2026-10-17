import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
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

app.use((err, _req, res, next) => {
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
