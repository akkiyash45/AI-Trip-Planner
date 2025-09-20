// lib/hotelbeds.ts
import crypto from "crypto";

export function createHotelbedsSignature() {
  const apiKey = process.env.HOTELBEDS_API_KEY!;
  const secret = process.env.HOTELBEDS_API_SECRET!;
  const timestamp = Math.floor(Date.now() / 1000); // UNIX seconds
  const raw = apiKey + secret + timestamp;
  const signature = crypto.createHash("sha256").update(raw).digest("hex");
  return { apiKey, signature };
}
