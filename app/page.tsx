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
import Footer from "@/components/sections/footer";
import Waitlist from "@/components/sections/waitlist";

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
      <Hero />
      <Exchanges />
      <FeatureGrid />
      <HowItWorks />
      <Waitlist />
      <UniqueFeatures />
      <TargetAudience />
      <FAQ />
      <Footer />
    </div>
  );
}
