import { forms, isFormKind } from "@/lib/forms";
import { site } from "@/lib/site";

const MAX_LENGTH = 5000;

/**
 * Receives every website form (quote, contact, trade application, referral)
 * and forwards it by email through Resend (https://resend.com).
 *
 * Required env vars in production:
 *   RESEND_API_KEY   – API key from Resend
 *   ENQUIRY_TO       – inbox that receives enquiries (defaults to the public address)
 *   ENQUIRY_FROM     – verified sender, e.g. "JSPM Website <website@jspm.uk>"
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { kind, website, ...values } = body;
  if (!isFormKind(kind)) {
    return Response.json({ error: "Unknown form." }, { status: 400 });
  }
  // Honeypot filled in: pretend success so bots don't retry.
  if (typeof website === "string" && website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const config = forms[kind];
  const fields: { label: string; value: string }[] = [];
  for (const field of config.fields) {
    const raw = values[field.name];
    const value = typeof raw === "string" ? raw.trim().slice(0, MAX_LENGTH) : "";
    if (field.required && !value) {
      return Response.json({ error: `Please fill in “${field.label}”.` }, { status: 400 });
    }
    if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (field.type === "select" && value && !field.options?.includes(value)) {
      return Response.json({ error: `Please choose an option for “${field.label}”.` }, { status: 400 });
    }
    fields.push({ label: field.label, value });
  }

  const text = fields.map((f) => `${f.label}: ${f.value || "—"}`).join("\n");
  const replyTo = typeof values.email === "string" ? values.email.trim() : undefined;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      console.error("RESEND_API_KEY is not set; enquiry not delivered.");
      return Response.json(
        { error: "Our form is temporarily unavailable." },
        { status: 503 },
      );
    }
    console.info(`[dev] ${config.subject}\n${text}`);
    return Response.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM ?? "JSPM Website <onboarding@resend.dev>",
      to: [process.env.ENQUIRY_TO ?? site.email],
      reply_to: replyTo,
      subject: `${config.subject} — ${typeof values.name === "string" ? values.name.trim() : "website"}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json({ error: "We couldn’t send your message." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
