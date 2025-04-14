"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { addToWaitlist } from "@/app/actions/waitlist";
import { useState } from "react";
import { toast } from "sonner";

const waitlistSchema = z.object({
  email: z.string().email(""),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export default function WaitlistForm({ className }: { className?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      setIsSubmitting(true);
      const result = await addToWaitlist(data.email);

      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        if (result.error?.includes("waitlist_email_key")) {
          toast.error("You are already on the waitlist");
        } else {
          toast.error(result.error || "Failed to join waitlist");
        }
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
      {isSuccess && (
        <h3 className="animate-appear text-xl font-medium">
          Thank you for joining!
        </h3>
      )}
      {!isSuccess && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn("flex w-full max-w-md gap-2", className)}
        >
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {/* {errors.email && (
          <p className="mt-1 text-sm text-destructive">
            {errors.email.message}
          </p>
        )} */}
          </div>
          <Button
            type="submit"
            size="sm"
            disabled={isSubmitting || !!errors.email}
          >
            Join Waitlist
          </Button>
        </form>
      )}
    </div>
  );
}
