import { connectToMongoDB } from "@/lib/db";
import Telegram from "@/lib/models/tele";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectToMongoDB();
    const body = await request.json();
    const { email, chatId } = body;

    if (!email || !chatId) {
      return NextResponse.json({ error: "Email and chat ID are required" }, { status: 400 });
    }
console.log('hehe',email,chatId);

    const updatedTelegram = await Telegram.findOneAndUpdate(
      { email },
      { chatId },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    );

    return NextResponse.json({
      message: "Telegram chat ID created or updated successfully!",
      data: updatedTelegram,
    });
  } catch (error) {
    console.error("Error creating or updating Telegram chat ID:", error);
    return NextResponse.error();
  }
}

export async function GET(request: Request) {
  try {
    await connectToMongoDB();
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const telegram = await Telegram.findOne({ email });
    console.log(telegram);
    

    if (!telegram) {
      return NextResponse.json({ error: "No Telegram chat ID found for this email" }, { status: 404 });
    }

    return NextResponse.json({ data: telegram });
  } catch (error) {
    console.error("Error retrieving Telegram chat ID:", error);
    return NextResponse.error();
  }
}
