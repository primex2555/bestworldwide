import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";

export async function POST() {
  try {
    await connectDB();

    const user = await userdb.find();
    return Response.json({ alldata: user });
  } catch (err) {
    return Response.json({ error: err.message });
  }
}
