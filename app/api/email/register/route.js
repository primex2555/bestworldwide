import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import { Resend } from "resend";

export async function POST(req) {
  const resend = new Resend("re_FvDAspRQ_9e62diJrus1636KfED3HhaJ3");

  try {
    await connectDB();
    const data = await req.formData();

    const email = data.get("email");
    const user = await userdb.findOne({ email: String(email) });

    if (user) {
      const send = await resend.emails.send({
        from: `Alphatraders@alphatradersx.com`,
        to: email,
        subject: "Welcome to alphatraders! Please Verify Your Email Address",
        html: `
        <div>
          <h2>
              Hi ${user.fullname},
          </h2>

          <p>
              Thanks for signing up for Alphatraders!

              To complete your registration, please click the link below to verify your email address:

              <p>
                <a href="http://www.alphatradersx.com/login?x=${email}">Click here</a>
              </p>

              Once verified, you'll have full access to your account.
          </p>

        </div>`,
      });

      if (send) {
        return Response.json({ message: "email sent" });
      } else {
        console.error("Error sending email: " + send.error);
        return Response.json({ error: "email not sent" });
      }
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message });
  }
}
