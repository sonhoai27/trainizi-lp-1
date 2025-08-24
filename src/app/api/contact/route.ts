import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, company, purpose, source } = await request.json();

    const TELE_API = process.env.TELE_API;
    const CHAT_ID = process.env.CHAT_ID;

    console.log({TELE_API, CHAT_ID})
    if (!TELE_API || !CHAT_ID) {
      console.error('Telegram API token or Chat ID is not defined in environment variables.');
      return NextResponse.json({ success: false, message: 'Server configuration error.' }, { status: 500 });
    }

    const message = `
      New Contact Form Submission:
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Company: ${company}
      Purpose: ${purpose}
      Source: ${source}
    `;

    const response = await fetch(
      `https://api.telegram.org/${TELE_API}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    const data = await response.json();

    if (data.ok) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Failed to send message to Telegram:', data);
      return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ success: false, message: 'Internal server error.' }, { status: 500 });
  }
}