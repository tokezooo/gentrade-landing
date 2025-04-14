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
export default async function Home() {
  return (
    <div>
      <Navbar
        name="GenTrade"
        logo={<Sparkle className="size-4" />}
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
                title: "Scenarios",
                isLink: true,
                href: "/#scenarios",
              },
              {
                title: "Marketplace",
                isLink: true,
                href: "/#marketplace",
              },
              {
                title: "Nexus Strategy",
                isLink: true,
                href: "/#nexus-strategy",
              },
            ]}
          />
        }
        actions={[
          {
            text: "Join waitlist",
            href: "https://gentrade.xyz/waitlist",
            isButton: true,
          },
        ]}
      />
      <Hero
        title="Unlock AI-Powered Crypto Trading Automation"
        description="Design, backtest, optimize, deploy, and even monetize trading strategies using natural language and powerful tools. No coding required."
        badge={false}
      />
      <Exchanges />
      <FeatureGrid />
      <HowItWorks />
      <WaitlistForm />
      <UniqueFeatures />
      <TargetAudience />
      <FAQ />
    </div>
  );
}
