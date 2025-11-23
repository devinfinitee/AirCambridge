import type { VercelRequest, VercelResponse } from "@vercel/node";

// Serverless function to initialize a Flutterwave payment
// Expects POST body with: { amount, currency, email, phone, name, txRef, redirectUrl }

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;

  if (!secretKey) {
    return res.status(500).json({ error: "Flutterwave secret key not configured" });
  }

  const { amount, currency, email, phone, name, txRef, redirectUrl } = req.body || {};

  if (!amount || !currency || !email || !name || !txRef || !redirectUrl) {
    return res.status(400).json({ error: "Missing required payment fields" });
  }

  try {
    const flutterwaveRes = await fetch("https://api.flutterwave.com/v3/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secretKey}`,
      },
      body: JSON.stringify({
        tx_ref: txRef,
        amount,
        currency,
        redirect_url: redirectUrl,
        customer: {
          email,
          phonenumber: phone,
          name,
        },
        // You can adjust these customizations to match your brand
        customizations: {
          title: "AirCambridge Passport Express",
          description: "Nigeria international passport processing",
        },
      }),
    });

    const data = await flutterwaveRes.json();

    if (!flutterwaveRes.ok || data.status !== "success") {
      console.error("Flutterwave init error", data);
      return res.status(502).json({ error: "Failed to initialize payment" });
    }

    return res.status(200).json({
      status: "success",
      link: data.data?.link,
      flutterwaveResponse: data.data,
    });
  } catch (error) {
    console.error("Flutterwave API error", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
