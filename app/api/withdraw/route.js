import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
// import { sendWithdrawEmail } from "@/app/helpers/withdraw";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.formData();
    const id = cookies().get("usersessionId")?.value;

    const user = await userdb.findOne({ _id: id });

    if (user) {
      const transact = JSON.parse(data.get("transaction"));
      await userdb.findOneAndUpdate(
        { _id: id },
        { $push: { transactions: transact } },
      );

      // sendWithdrawEmail(id, transact.amount);
    }

    return Response.json({ message: "ok" });
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message });
  }
}
