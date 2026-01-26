import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  
  try {
    const cookieStore = await cookies()
    cookieStore.delete("usersessionId");
    return NextResponse.json({ message: "logout successful" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err.message });
  }
}
