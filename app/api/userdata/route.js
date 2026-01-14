import connectDB from "@/app/lib/mongodb";
import userdb from "@/app/models/user";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const sessionId = cookies().get("adminsessionId")?.value;
    if (!sessionId) {
      return NextResponse.json({ error: "Not authenticated" });
    } else if (sessionId === "admin") {
      await connectDB();
      const data = await userdb.find();
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
