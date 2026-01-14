import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const sessionId = cookies().get("usersessionId")?.value;
    if (!sessionId) {
      return NextResponse.json({ error: "Not authenticated" });
    } else if (sessionId) {
      await connectDB();
      const path = req.nextUrl.pathname;
      const id = path.split("/").pop();

      const data = await userdb.findOne({ _id: id });
      if (data) {
        return NextResponse.json(data);
      }

      return NextResponse.json({ error: "Failed to get data" });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err });
  }
}
