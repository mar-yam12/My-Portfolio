import { NextResponse } from "next/server";
import { Resend } from "resend";

// ✅ TypeScript safe env access
const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL;

if (!resendApiKey || !fromEmail) {
  throw new Error("Missing RESEND_API_KEY or FROM_EMAIL in env");
}

const resend = new Resend(resendApiKey);

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h1>${subject}</h1>
        <p><strong>Thank you for contacting us!</strong></p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    const data = await resend.emails.send({
      from: fromEmail as string,
      to: [fromEmail, email],
      subject,
      html, // ✅ Using plain HTML string instead of JSX
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
