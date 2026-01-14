import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.formData();
    const token = data.get("token");

    const user = await userdb.findOne({ verifyToken: token });
    if (user) {
      if (user.isValid) {
        return Response.json({ message: "User has already been verified" });
      } else {
        const id = user._id;
        const hashedToken = await bcrypt.hash(String(id), 10);
        const update = await userdb.findOneAndUpdate(
          { _id: id },
          { isValid: true, verifyToken: hashedToken },
          { new: true },
        );
        if (update) {
          return Response.json({ message: "User verified" });
        }
      }
    } else {
      return Response.json({ error: "User not found" });
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message });
  }
}
