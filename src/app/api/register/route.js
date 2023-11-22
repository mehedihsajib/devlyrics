import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });
    console.log("name", name);
    console.log("email", email);
    console.log("pass", password);

    return NextResponse.json({ name, email, password }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while register the user", error },
      { status: 500 }
    );
  }
}
