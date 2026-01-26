import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.formData();
    const cookieStore = await cookies()

    const email = data.get("email");
    const password = data.get("password");

    if (!email || !password)
      return Response.json({ error: "Invalid login details" });

    if (email === "admin@admin.com" && password === "admin@admin.com") {
      cookieStore.delete("usersessionId");
      cookieStore.set("adminsessionId", "admin");

      return Response.json({ message: "admin" });
    }

    const getuser = await userdb.findOne({ email: email });

    if (!getuser) {
      return Response.json({ error: "Invalid login details" });
      // } else if (getuser.isValid !== true) {
      //   return Response.json({ error: "Email not verified. Check your inbox." });
    } else if (getuser.email !== email) {
      return Response.json({ error: "Incorrect email address" });
    } else if (getuser.password !== password) {
      return Response.json({ error: "Incorrect password" });
    }

    if (getuser.email === email && getuser.password === password) {
      cookieStore.delete("adminsessionId");
      cookieStore.set("usersessionId", String(getuser._id));

      return Response.json({ value: String(getuser._id) });
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message });
  }
}
