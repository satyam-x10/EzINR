// @/app/api/users/route.js
import { connectToMongoDB } from "@/lib/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
  try {
    await connectToMongoDB();
    const body = await request.json(); // Parse JSON data from request body
    const { name, email, phone, address, dob } = body; // Destructure name, email, phone, address, dob from parsed JSON
  
    // Find a user by email and update if exists, otherwise create a new user
    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find a user with the same email
      { name, phone, address, dob }, // Update fields
      { new: true, upsert: true, setDefaultsOnInsert: true } // Options: return the updated document, create if not found
    );
  
    return NextResponse.json({ message: "User created or updated successfully!", user: updatedUser });
  } catch (error) {
    console.error("Error creating or updating user:", error);
    return NextResponse.error();
  }
  
}
