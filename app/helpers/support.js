"use server";
// import nodemailer from "nodemailer";
import { Resend } from "resend";
// noreply.bitmexx@gmail.com

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendSupportEmail = async (email, message) => {
  try {
    const { data, error } = await resend.emails.send({
      from: `${email} <${process.env.NEXT_PUBLIC_NAME}@${process.env.NEXT_DOMAIN_NAME}.com>`,
      to: ["noreply.bitmexx@gmail.com"],
      subject: "Support message",
      html: `
      <body style="font-family: Calibri, sans-serif; font-size: 14px;">
      <p></p>
      <p>${message}</p>
      <p></p>
      <p>Sender: ${email}</p>
      </body>`,
    });

    if (error) {
      return console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
  // try {
  //   let transport = nodemailer.createTransport({
  //     host: "smtp.gmail.com",
  //     secure: fasle,
  //     port: 465,
  //     auth: {
  //       user: "ozdev40@gmail.com",
  //       pass: "jlrw tyqx nifw cibe",
  //     },
  //   });

  //   await new Promise((resolve, reject) => {
  //     transport.verify(function (error, success) {
  //       if (error) {
  //         console.log(error);
  //         reject(error);
  //       } else {
  //         console.log("Server is ready to take our messages");
  //         resolve(success);
  //       }
  //     });
  //   });

  //   // Compose email options
  //   const mailOptions = {
  //     from: '"User" <ozdev40@gmail.com>',
  //     to: "support@opulenttradingfx.com",
  //     subject: "Support message",
  //     html: `
  //     <body style="font-family: Calibri, sans-serif; font-size: 14px;">
  //     <p></p>
  //     <p>${message}</p>
  //     <p></p>
  //     <p>Sender: ${email}</p>
  //     </body>`,
  //   };

  //   await new Promise((resolve, reject) => {
  //     transport.sendMail(mailOptions, (err, info) => {
  //       if (err) {
  //         console.error(err);
  //         reject(err);
  //       } else {
  //         console.log(info);
  //         resolve(info);
  //       }
  //     });
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
};
