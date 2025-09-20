// convex/users.ts
import { v } from "convex/values";
import { query } from "./_generated/server";

// Get the Convex user document corresponding to the currently logged-in Clerk user
export const getCurrentUser = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("User is not authenticated.");
    }

    // Find the user document where clerkId matches the token's subject (Clerk User ID)
    const user = await ctx.db
      .query("UserTable")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();

    if (!user) {
      throw new Error("User not found in Convex database.");
    }

    return user;
  },
});