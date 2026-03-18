import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Waitlist is not configured yet." }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }

  let email: string;
  try {
    const body = await request.json();
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid request body." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({ error: "A valid email address is required." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.contacts.create({ email });

    if (error) {
      console.error("Resend API error:", error.message);
      return new Response(
        JSON.stringify({ error: "Could not add to waitlist. Try again later." }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Resend API error:", message);

    return new Response(
      JSON.stringify({ error: "Could not add to waitlist. Try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
