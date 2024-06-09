import { connectToMongoDB } from "@/lib/db";
import Loan from "@/lib/models/loan";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        await connectToMongoDB();
        const url = new URL(request.url);
        const email = url.searchParams.get('email'); // Extract email from query parameters

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }
        
        const loan = await Loan.find({ email });

        if (!loan) {
            return NextResponse.json({ error: "Loan not found" }, { status: 404 });
        }

        return NextResponse.json({ loan });
    } catch (error) {
        console.error("Error retrieving Loan:", error);
        return NextResponse.error();
    }
}

export async function POST(request: Request) {
    try {
        await connectToMongoDB();
        const data = await request.json();

        const newLoan = new Loan(data);
        await newLoan.save();

        return NextResponse.json({ message: "Loan created successfully", loan: newLoan }, { status: 201 });
    } catch (error) {
        console.error("Error creating Loan:", error);
        return NextResponse.error();
    }
}
