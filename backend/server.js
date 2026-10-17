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

    // Insert into Supabase
    const { error: insertError } = await supabase
      .from("contacts")
      .insert([{ name, email, phone, message }]);

    if (insertError) {
      throw insertError;
    }

    // Send Email
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
    console.error("Server error:", err);
    return res.status(500).json({ success: false, msg: "Internal error" });
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
