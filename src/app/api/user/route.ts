// @/app/api/users/route.js
import { connectToMongoDB } from "@/lib/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectToMongoDB();
    const body = await request.json(); // Parse JSON data from request body
    const { name, email, phone, address, dob } = body; // Destructure name, email, phone, address, dob from parsed JSON

    // Find a user by email and update if exists, otherwise create a new user
    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find a user with the same email
      { name, phone, address, dob }, // Update fields
      { new: true, upsert: true, setDefaultsOnInsert: true }, // Options: return the updated document, create if not found
    );

    return NextResponse.json({
      message: "User created or updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error creating or updating user:", error);
    return NextResponse.error();
  }
}
export async function GET(request: Request) {
  try {
    await connectToMongoDB();
    const url = new URL(request.url);
    const email = url.searchParams.get("email"); // Extract email from query parameters

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error retrieving user:", error);
    return NextResponse.error();
  }
}
