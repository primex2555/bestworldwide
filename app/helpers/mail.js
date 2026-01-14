"use server";
import nodemailer from "nodemailer";
import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import bcrypt from "bcryptjs";

export const sendEmail = async (firstname, email, emailType, userId) => {
  try {
    await connectDB();

    const id = String(userId);
    const hashedToken = await bcrypt.hash(id, 10);

    if (emailType === "VERIFY") {
      await userdb.findByIdAndUpdate(id, {
        verifyToken: hashedToken,
      });
    } else if (emailType === "RESET") {
      await userdb.findByIdAndUpdate(id, {
        forgotPasswordToken: hashedToken,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "zoho",
      host: "smtp.zoho.com",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL_USER || "support@opulenttradingfx.com",
        pass: process.env.EMAIL_PASS || "yibMGTS1UY9M",
      },
    });

    await transporter.verify();

    const verifyUrl = `www.opulentttradingfx.com/verifyemail?token=${hashedToken}`;
    const resetUrl = `www.opulentttradingfx/forgot/complete?token=${hashedToken}`;

    const mailOptions = {
      from: '"Opulenttradingfx"<support@opulenttradingfx.com>',
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<body style="font-family: Calibri, sans-serif; font-size: 14px; line-height: 1.5; color: #333;">
        <h3>Hi ${firstname},</h3>
        <p>
          ${
            emailType === "VERIFY"
              ? "Thank you for signing up with us! Please verify your email address to complete the process."
              : "We received a request to reset your password."
          }<br/><br/>
          Click <a href="${emailType === "VERIFY" ? verifyUrl : resetUrl}" 
          style="color: #1a73e8; text-decoration: none;">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}.
        </p>
        <p>
          If you didn't request this, please ignore this email or contact us for assistance.
        </p>
        <p>
          Best regards,<br/>
          Opulentttradingfx
        </p>
      </body>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info);
    return info;
  } catch (error) {
    console.error("Error in sendEmail:", error);
    throw error;
  }
};
