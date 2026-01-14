"use server";

import nodemailer from "nodemailer";
import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import Randomstring from "randomstring";

export const sendProfitEmail = async (userId, amount) => {
  try {
    await connectDB();

    const user = await userdb.findById({ _id: userId });
    const today = new Date().toISOString().split("T")[0];
    const rand = Randomstring.generate({
      length: 12,
      charset: "numeric",
    });

    // Create a nodemailer transport
    let transport = nodemailer.createTransport({
      serviec: "zoho",
      host: "smtp.zoho.com",
      secure: true,
      port: 465,
      auth: {
        user: "support@opulenttradingfx.com",
        pass: "Lj5yQJRRG8UL",
      },
    });

    await new Promise((resolve, reject) => {
      transport.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    // Compose email options
    const mailOptions = {
      from: '"Opulenttradingfx" <support@opulenttradingfx.com>',
      to: user.email,
      subject: "Profit Notification",
      html: `
      <body style="font-family: Calibri, sans-serif; font-size: 14px;">
      <p>Hello ${user.firstname},</p><p></p>

      <p>You've just received a profit: $${amount}</p>
      <p>You can log in to check your available balance and transaction history using the link below:</p>
      <a href="https://www.opulenttradingfx.com/login" target="_blank"  style="color: #1a73e8; text-decoration: none;">https://www.opulenttradingfx.com</a><br/>


      <div>
        Goodluck.
      </div>
      </body>`,
    };

    await new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};
