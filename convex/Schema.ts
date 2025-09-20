// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  UserTable: defineTable({
    name: v.string(),
    imageUrl: v.string(),
    email: v.string(),
    subscription: v.optional(v.string()),
    // Add this field to store the Clerk ID
    clerkId: v.string(), 
  })
  // Add an index to query by clerkId efficiently
  .index("by_clerk_id", ["clerkId"]),

  TripDetailTable: defineTable({
    tripId: v.string(),
    tripDetail: v.any(),
    uid: v.id('UserTable') // This remains the same
  }),
});