import FeatureGrid from "@/components/sections/feature-grid";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Navigation from "@/components/ui/navigation";
import HowItWorks from "@/components/sections/how-it-works";
import { Sparkle } from "lucide-react";
import UniqueFeatures from "@/components/sections/unique-features";
import TargetAudience from "@/components/sections/target-audience";
import FAQ from "@/components/sections/faq";
import Exchanges from "@/components/sections/exchanges";
import WaitlistForm from "@/components/sections/waitlist-form";
import Screenshot from "@/components/ui/screenshot";
import Footer from "@/components/sections/footer";

export default async function Home() {
  return (
    <div>
      <Navbar
        name="GenTrade"
        logo={
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Sparkle className="size-4" />
          </div>
        }
        homeUrl="https://gentrade.xyz/"
        customNavigation={
          <Navigation
            menuItems={[
              {
                title: "Features",
                isLink: true,
                href: "/#features",
              },
              {
                title: "How it works",
                isLink: true,
                href: "/#how-it-works",
              },
              {
                title: "Unique Features",
                isLink: true,
                href: "/#unique-features",
              },
              {
                title: "Target Audience",
                isLink: true,
                href: "/#target-audience",
              },
              {
                title: "FAQ",
                isLink: true,
                href: "/#faq",
              },
            ]}
          />
        }
        actions={[
          {
            text: "Join waitlist",
            href: "/#waitlist",
            isButton: true,
          },
        ]}
      />
      <Hero
        title="Unlock AI-Powered Crypto Trading Automation"
        description="Design, backtest, optimize, deploy, and even monetize trading strategies using natural language and powerful tools. No coding required."
        badge={false}
        mockup={
          <Screenshot
            srcLight="/img/chat.png"
            srcDark="/img/chat.png"
            alt="Chat screenshot"
            width={1248}
            height={765}
            className="w-full"
          />
        }
      />
      <Exchanges />
      <FeatureGrid />
      <HowItWorks />
      <div
        id="waitlist"
        className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the waitlist to get early access
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're currently in our early stages and only accepting a limited
            number of users
          </p>
        </div>
        <div className="relative ">
          <WaitlistForm />
          <div className="py-16 top-[-70px] absolute rounded-full inset-0 bg-gradient-to-br from-orange-500/20 via-white-600/70 to-brand-foreground/70 blur-3xl opacity-90"></div>
        </div>
      </div>
      <UniqueFeatures />
      <TargetAudience />
      <FAQ />
      <Footer />
    </div>
  );
}
