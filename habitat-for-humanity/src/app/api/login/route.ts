import type { NextRequest } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";

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

    const db = await mysql.createConnection({
      host: "127.0.0.1",
      port: 3333,
      user: "adminuser",
      password: "AAaa12??",
      database: process.env.DB,
    });

    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);

    if (!Array.isArray(rows) || rows.length === 0) {
      return new Response("User not found", { status: 404 });
    }

    const user = rows[0] as any;
    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      return new Response("Invalid credentials", { status: 401 });
    }

    await db.execute("UPDATE users SET last_logged_in = NOW() WHERE email = ?", [email]);
    await db.end();

    return new Response(JSON.stringify({ message: "Login successful" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("Login failed:", err.message || err);
    return new Response(`Login failed: ${err.message || "Unknown error"}`, { status: 500 });
  }
}
