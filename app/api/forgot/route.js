import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import Randomstring from "randomstring";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.formData();
    const random = data.get("random");
    const password = data.get("password");

    const randString = Randomstring.generate();

    const user = await userdb.findOne({ random: random });

    if (user) {
      const update = await userdb.findOneAndUpdate(
        { random: random },
        { password: password },
        { random: randString },
      );

      if (update) {
        return Response.json({ message: "Password updated" });
      } else {
        return Response.json({ error: "Password update failed" });
      }
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message });
  }
}
