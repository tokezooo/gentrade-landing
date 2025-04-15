"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WaitlistForm from "../blocks/waitlist-form";

export default function Waitlist() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  return (
    <div id="waitlist" className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the waitlist to get early access
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We&apos;re currently in our early stages and only accepting a limited
          number of users
        </p>
      </div>
      <div className="relative ">
        <WaitlistForm />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <div className="py-16 top-[-70px] absolute inset-0 bg-gradient-to-br from-orange-500/20 via-white-600/70 to-brand-foreground/70 blur-3xl opacity-90" />
        </motion.div>
      </div>
    </div>
  );
}
