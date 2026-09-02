"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "2023.shikhas@isu.ac.in";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `Portfolio Contact — ${name}`;

    const body = `Hello Shikha,

You received a new message from your portfolio website.

Name: ${name}
Email: ${email}

Message:
${message}

--------------------------------
Sent from Shikha Singh's Portfolio
`;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm` +
      `&fs=1` +
      `&to=${encodeURIComponent(CONTACT_EMAIL)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setSent(true);

    window.open(gmailUrl, "_blank");

    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Name

          <input
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={80}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label>
          Email

          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label>
        Message

        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          placeholder="Tell me what you're building..."
        />
      </label>

      <div className="form-actions">
        <button
          className="button primary"
          type="submit"
        >
          <Send size={17} />
          Send message
        </button>

        
      </div>

      {sent && (
        <p className="form-message success">
          Gmail opened with your message ready to send.
        </p>
      )}
    </form>
  );
}