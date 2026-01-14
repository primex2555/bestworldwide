import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import { sendProfitEmail } from "@/app/helpers/profit";
import { sendDepositEmail } from "@/app/helpers/deposit";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.formData();
    const id = data.get("id");

    const user = await userdb.findOne({ _id: id });

    if (data.get("deposit") === "true") {
      const transact = JSON.parse(data.get("transaction"));
      await userdb.findOneAndUpdate(
        { _id: id },
        { $push: { transactions: transact } },
      );
      // sendDepositEmail(id, transact.amount);
    } else if (data.get("profit") === "true") {
      const transact = JSON.parse(data.get("transaction"));
      await userdb.findOneAndUpdate(
        { _id: id },
        { $push: { transactions: transact } },
      );

      // sendProfitEmail(id, transact.amount);
    } else if (data.get("deleteuser") === "true") {
      await userdb.findOneAndDelete({ _id: id }, {});
    } else if (data.get("allowwithdraw") === "true") {
      await userdb.findOneAndUpdate(
        { _id: id },
        { allowtransfer: !user.allowtransfer },
      );
    } else if (data.get("minamount") === "true") {
      await userdb.findOneAndUpdate(
        { _id: id },
        { limit: Number(data.get("namount")) },
      );
    }

    const newuser = await userdb.find();
    return Response.json(newuser);
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message });
  }
}
