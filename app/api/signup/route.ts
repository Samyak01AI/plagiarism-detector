import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { name, email, institution, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    db.prepare(`
      INSERT INTO users (name, email, institution, password)
      VALUES (?, ?, ?, ?)
    `).run(name, email, institution, hashedPassword);

    // Fetch all usernames after signup
    const users = db.prepare("SELECT name FROM users").all();
    const usernames = users.map((u: any) => u.name);

    return NextResponse.json({ success: true, usernames }, { status: 201 });
  } catch (err: any) {
    console.error("Signup error:", err);

    if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return NextResponse.json({ message: "Email already exists" }, { status: 400 });
    }

    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
