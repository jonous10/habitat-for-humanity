import type { NextRequest } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt"; // if you want to hash/compare passwords

interface LoginBody {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: LoginBody = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response("Missing required fields", { status: 400 });
    }

    // Connect to MySQL (through your tunnel)
    const db = await mysql.createConnection({
      host: process.env.HOST,
      port: 3333, // tunnel port
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB,
    });

    // Fetch user by email
    const [rows] = await db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    

    if (!Array.isArray(rows) || rows.length === 0) {
      return new Response("User not found", { status: 404 });
    }

    const user = rows[0] as any;

    // Compare password (assuming you stored hash in register)
    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      return new Response("Invalid credentials", { status: 401 });
    }
    await db.execute(
      "UPDATE users SET last_logged_in = NOW() WHERE email = ?",
      [email]
    );

    await db.end();

    return new Response("Login successful!", { status: 200 });
  } catch (err: any) {
    console.error("Login failed:", err.message || err);
    return new Response(`Login failed: ${err.message || "Unknown error"}`, { status: 500 });
  }
}
