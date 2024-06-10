// @/app/api/users/route.js
import { connectToMongoDB } from "@/lib/db";
import AlertContacts from "@/lib/models/alert";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    await connectToMongoDB();
    const body = await request.json(); // Parse JSON data from request body
    const { telegram, email } = body; // Destructure name, email, phone, address, dob from parsed JSON

    // Find a user by email and update if exists, otherwise create a new user
    const updatedAlertContacts = await AlertContacts.findOneAndUpdate(
      { email }, // Find a user with the same email
      {email, telegram }, // Update fields
      { new: true, upsert: true, setDefaultsOnInsert: true } // Options: return the updated document, create if not found
    );

    return NextResponse.json({
      message: "alert contacts created or updated successfully!",
      user: updatedAlertContacts,
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
        
        const alertContacts = await AlertContacts.findOne({ email });
        console.log('alertContacts',alertContacts);
        
    
    if (!alertContacts) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ alertContacts:alertContacts });
  } catch (error) {
    console.error("Error retrieving contact:", error);
    return NextResponse.error();
  }
}
