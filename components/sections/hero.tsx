"use client";

import { Section } from "../ui/section";
import { Mockup, MockupFrame } from "../ui/mockup";
import Glow from "../ui/glow";
import WaitlistForm from "@/components/blocks/waitlist-form";
import Screenshot from "../ui/screenshot";
import { isMobile } from "react-device-detect";

export default function Hero() {
  return (
    <Section className="overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="max-w-container mx-auto flex flex-col gap-12 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Unlock AI-Powered Crypto Trading Automation
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            Design, backtest, optimize, deploy, and even monetize trading
            strategies using natural language and powerful tools. No coding
            required.
          </p>
          <WaitlistForm />
        </div>
        <div className="relative w-full">
          <MockupFrame
            className="animate-appear opacity-0 delay-700"
            size="small"
          >
            <Mockup
              type="responsive"
              className="bg-background/90 w-full rounded-xl border-0"
            >
              {isMobile ? (
                <Screenshot
                  srcLight="/img/chat-mobile.png"
                  srcDark="/img/chat-mobile.png"
                  alt="Chat screenshot"
                  width={1248}
                  height={765}
                  className="w-full"
                />
              ) : (
                <Screenshot
                  srcLight="/img/chat.png"
                  srcDark="/img/chat.png"
                  alt="Chat screenshot"
                  width={1248}
                  height={765}
                  className="w-full"
                />
              )}
            </Mockup>
          </MockupFrame>
          <Glow
            variant="top"
            className="animate-appear-zoom opacity-0 delay-1000"
          />
        </div>
      </div>
    </Section>
  );
}
