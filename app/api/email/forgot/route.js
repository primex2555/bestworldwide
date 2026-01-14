import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import { Resend } from "resend";

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  // re_FvDAspRQ_9e62diJrus1636KfED3HhaJ3
  try {
    await connectDB();
    const data = await req.formData();
    const email = data.get("email");
    const user = await userdb.findOne({ email: String(email) });

    if (user) {
      const send = await resend.emails.send({
        from: `${process.env.NEXT_PUBLIC_NAME}@${process.env.NEXT_DOMAIN_NAME}.com`,
        to: email,
        subject: "Password recovery",
        html: `
           <body style="font-family: Calibri, sans-serif; font-size: 14px;">
            <h2>${process.env.NEXT_PUBLIC_NAME} - Forgot Password</h2>
            <p>
              Hi ${user.fullname},
            </p>
            <p>
              Click the link below to reset your password:
            </p>
            <p>
              <a href="http://${process.env.NEXT_PUBLIC_NAME}.com/forgot/complete?x=${user.random}">Click Here</a>
            </p>
            <p>
              If this wasn't you, please disregard this email.
            </p>
            <p>
              Thanks,
            </p>
          </body>
                
                `,
      });

      if (send) {
        return Response.json({ message: "Email sent" });
      } else {
        console.error("Error sending email: " + send.error);
        return Response.json({ error: "Email not sent" });
      }
    } else {
      return Response.json({ error: "Email not found" });
    }
  } catch (err) {
    return Response.json({ error: err.message });
  }
}
