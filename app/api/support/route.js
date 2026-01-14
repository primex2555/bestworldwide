import connectDB from "@/app/lib/mongodb";
import { sendSupportEmail } from "../../helpers/support";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.formData();
    const email = data.get("email");
    const text = data.get("text");

    if (email && text) {
      await sendSupportEmail(email, text);
      return Response.json({ message: "Sent" });
    } else {
      return Response.json({ error: "Not sent" });
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: "Error try again" });
  }
}
