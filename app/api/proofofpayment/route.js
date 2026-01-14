import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import { redirect } from "next/navigation";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.formData();
    const id = data.get("id");
    const link = data.get("link");

    if (link) {
      const updateuser = await userdb.findOneAndUpdate(
        { _id: id },
        { $push: { proof: link } },
      );

      if (updateuser) return Response.json({ message: "file submitted" });
      else return Response.json({ error: "file not submitted" });
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message });
  }
}
