import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import { redirect } from "next/navigation";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.formData();
    const id = data.get("id");
    const link = {
      ID: data.get("link1"),
      passport: data.get("link2"),
    };

    if (link) {
      const updateuser = await userdb.findOneAndUpdate(
        { _id: id },
        { files: link },
      );

      if (updateuser) {
        await userdb.findOneAndUpdate({ _id: id }, { kyc: true });
        const user = await userdb.findOne({ _id: id });
        if (user) {
          return Response.json(user);
        }
      } else return Response.json({ error: "file not submitted" });
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message });
  }
}
