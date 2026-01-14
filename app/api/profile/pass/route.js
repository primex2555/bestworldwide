import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.formData();
    const id = data.get(id);
    const pass = String(data.get("password"));

    const updatepass = await userdb.findOneAndUpdate(
      { _id: id },
      { password: pass },
    );
    if (updatepass) {
      return Response.json({ message: "password changed" });
    } else {
      return Response.json({ error: "password not changed" });
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message });
  }
}
