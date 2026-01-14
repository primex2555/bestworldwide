import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.formData();
    const emailin = data.get("emailin");
    const emailout = data.get("emailout");
    const amount = data.get("amount");
    const transactin = {
      name: "Transfer",
      date: new Date().toISOString().split("T")[0],
      amount: amount,
      deposit: true,
      withdraw: false,
    };

    const transactout = {
      name: "Transfer",
      date: new Date().toISOString().split("T")[0],
      amount: amount,
      deposit: false,
      withdraw: true,
    };

    const femail = await userdb.findOne({ email: emailin });

    console.log(femail);

    if (femail) {
      const transactionin = await userdb.findOneAndUpdate(
        { email: emailin },
        { $push: { transactions: transactin } },
      );

      const transactionout = await userdb.findOneAndUpdate(
        { email: emailout },
        { $push: { transactions: transactout } },
      );

      if (transactionin && transactionout) {
        const user = await userdb.findOne({ email: emailout });
        return Response.json(user);
      }
    } else {
      return Response.json({ error: "Email not found" });
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message });
  }
}
