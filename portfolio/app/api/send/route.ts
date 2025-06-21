import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Validate FROM_EMAIL
const fromEmail = process.env.FROM_EMAIL;
if (!fromEmail) {
  throw new Error("FROM_EMAIL environment variable is not set");
}

// API Route Handler
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    // Simple validation
    if (!email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: fromEmail as string,
      to: [fromEmail, email],
      subject,
      html: `
        <div style="font-family: sans-serif;">
          <h2>${subject}</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
