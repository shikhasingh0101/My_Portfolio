import { NextResponse } from "next/server";

const CONTACT_EMAIL = "2023.shikhas@isu.ac.in";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    // Validate name
    if (!name || name.length < 2) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your name.",
        },
        { status: 400 }
      );
    }

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Validate message
    if (!message || message.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a message of at least 10 characters.",
        },
        { status: 400 }
      );
    }

    // Email subject
    const subject = `Portfolio Contact — ${name}`;

    // Email content
    const emailBody = `Hello Shikha,

You received a new message from your portfolio website.

Name: ${name}
Email: ${email}

Message:
${message}

--------------------------------
Sent from Shikha Singh's Portfolio
`;

    // Create mailto link
    const mailto =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    return NextResponse.json({
      success: true,
      message: "Opening your email application...",
      mailto: mailto,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process the message. Please try again.",
      },
      { status: 500 }
    );
  }
}