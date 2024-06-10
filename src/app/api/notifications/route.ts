import { connectToMongoDB } from "@/lib/db";
import Notification from "@/lib/models/notification";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    try {
      await connectToMongoDB();
      const url = new URL(request.url);
      const email = url.searchParams.get("email"); // Extract email from query parameters
  
      if (!email) {
        return NextResponse.json(
          { error: "Email query parameter is required" },
          { status: 400 }
        );
      }
  
      console.log(`Searching for notifications with email: ${email}`);
      const notifications = await Notification.findOne({ email });
      console.log('Query Result:', notifications);
      
      if (!notifications) {
        return NextResponse.json(
          { error: "Notifications not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json({ notifications });
    } catch (error) {
      console.error("Error retrieving notifications:", error);
      return NextResponse.json(
        { error: "Error retrieving notifications" },
        { status: 500 }
      );
    }
  }
export async function POST(request: Request) {
  try {
    await connectToMongoDB();
    const { email, message } = await request.json();
    console.log("Received request to add notification:", email, message);

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    let notification = await Notification.findOne({ email });

    if (notification) {
      notification.notifications.push(message); // Directly push the message
      await notification.save();
    } else {
      notification = new Notification({ email, notifications: [message] }); // Use an array with the message
      await notification.save();
    }

    return NextResponse.json(
      { message: "Notification added successfully", notification },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating notification:", error);
    return NextResponse.json(
      { error: "Error creating notification" },
      { status: 500 }
    );
  }
}
