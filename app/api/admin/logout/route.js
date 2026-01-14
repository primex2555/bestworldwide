import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    cookies().delete("adminsessionId");
    return NextResponse.json({ message: "logout successful" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err.message });
  }
}
