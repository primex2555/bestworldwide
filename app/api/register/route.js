import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import Randomstring from "randomstring";
import { sendEmail } from "../../helpers/mail";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.formData();
    const randString = Randomstring.generate();
    const refID = data.get("referralID");

    const email = await userdb.findOne({ email: data.get("email") });

    const transact = {
      name: "Referral Bonus",
      date: new Date().toISOString().split("T")[0],
      amount: 100,
      deposit: true,
      withdraw: false,
    };

    if (email) {
      return Response.json({ error: "Email already in use" });
    } else {
      const nuser = new userdb({
        firstname: data.get("firstname"),
        lastname: data.get("lastname"),
        email: data.get("email"),
        country: data.get("country"),
        password: data.get("password"),
        referralID: randString,
      });

      const save = await nuser.save();
      if (!save) {
        return Response.json({ error: "Error, try again" });
      } else {
        await userdb.findOneAndUpdate(
          { email: data.get("email") },
          { random: randString },
        );
        if (refID) {
          await userdb.findOneAndUpdate(
            { referralID: refID },
            { $push: { transactions: transact } },
          );
        }

        // sendEmail(save.firstname, save.email, "VERIFY", save._id);
        return Response.json({ message: "User Registered" });
      }
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: "Error try again" });
  }
}
