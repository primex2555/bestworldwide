import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.formData();
    const id = data.get("id");
    const username = data.get("username");
    const fullname = data.get("fullname");
    const phone = data.get("phone");
    const date = data.get("date");
    const country = data.get("country");
    const address = data.get("address");
    // console.log(id, username, fullname, phone, date, country, address);

    if (username) {
      await userdb.findOneAndUpdate({ _id: id }, { username: username });
    }
    if (fullname) {
      await userdb.findOneAndUpdate({ _id: id }, { fullname: fullname });
    }
    if (phone) {
      await userdb.findOneAndUpdate({ _id: id }, { phone: phone });
    }
    if (date) {
      await userdb.findOneAndUpdate({ _id: id }, { date: date });
    }
    if (country) {
      await userdb.findOneAndUpdate({ _id: id }, { country: country });
    }
    if (address) {
      await userdb.findOneAndUpdate({ _id: id }, { address: address });
    }

    const user = await userdb.findOne({ _id: id });
    if (user) {
      return Response.json(user);
    }
    {
      return Response.json({ error: "Error updating profile" });
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message });
  }
}
