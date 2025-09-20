import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const CONVERSATIONAL_PROMPT = `You are a step-by-step AI Trip Planner Agent.
Ask for Starting location, Destination, Group size, Budget, Trip duration in order.
Respond ONLY in JSON: { "resp": "question or confirmation", "ui": "groupSize|budget|tripDuration|final|null" }`;

const FINAL_PROMPT = `Based on the conversation history, generate a detailed Travel Plan.
Respond only with JSON following this schema:
{
  "trip_plan": {
    "destination": "string",
    "duration": "string",
    "origin": "string",
    "budget": "string",
    "group_size": "string",
    "hotels": [
      {
        "hotel_name": "string",
        "hotel_address": "string",
        "price_per_night": "string",
        "hotel_image_url": "string",
        "geo_coordinates": {"latitude": 0, "longitude": 0},
        "rating": 0,
        "description": "string"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "day_plan": "string",
        "best_time_to_visit_day": "string",
        "activities": [
          {
            "place_name": "string",
            "place_details": "string",
            "place_image_url": "string",
            "geo_coordinates": {"latitude": 0, "longitude": 0},
            "place_address": "string",
            "ticket_pricing": "string",
            "time_travel_each_location": "string",
            "best_time_to_visit": "string"
          }
        ]
      }
    ]
  }
}`;

export async function POST(req: NextRequest) {
  const { messages, generateFinalPlan } = await req.json();
  const systemPrompt = generateFinalPlan ? FINAL_PROMPT : CONVERSATIONAL_PROMPT;

  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini",
      max_tokens: 4096,
      response_format: { type: "json_object" },
      messages: [{ role: "system", content: systemPrompt }, ...messages],
    });

    const message = completion.choices[0].message;

    let jsonContent;
    try {
      jsonContent = JSON.parse(message.content ?? "{}");
    } catch {
      // fallback if AI returns invalid JSON
      jsonContent = { resp: message.content || "Error parsing AI response", ui: "error" };
    }

    return NextResponse.json(jsonContent);
  } catch (err) {
    console.error("OpenAI API error:", err);
    return NextResponse.json({ error: "Failed to generate trip plan" }, { status: 500 });
  }
}
