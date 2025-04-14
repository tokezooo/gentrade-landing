"use server";

import { createClient } from "@/util/supabase/server";
import { z } from "zod";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function addToWaitlist(email: string) {
  try {
    // Validate the email
    const parsed = waitlistSchema.parse({ email });

    // Create Supabase client
    const supabase = await createClient();

    // Insert into waitlist
    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ email: parsed.email }])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}
