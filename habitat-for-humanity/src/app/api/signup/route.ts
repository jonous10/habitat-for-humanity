
import type { NextRequest } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import { stringify } from "querystring";

// Force dynamic route evaluation in Next.js App Router

interface RegisterBody {
  username: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {

  try {
    const body: RegisterBody = await req.json();
    const { username, email, password} = body;

    // Validate input
    if (!username || !email || !password) {
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

    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert user
    await db.execute(
      "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    await db.end();

    return new Response("Successfully created user!", { status: 200 });
  } catch (err: any) {
    console.error("Failed to create user:", err.message || err);
    return new Response(`Failed to create user: ${err.message || "Unknown error"}`, { status: 500 });
  }
}
