import FeatureGrid from "@/components/sections/feature-grid";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Navigation from "@/components/ui/navigation";
import HowItWorks from "@/components/sections/how-it-works";
import UniqueFeatures from "@/components/sections/unique-features";
import TargetAudience from "@/components/sections/target-audience";
import FAQ from "@/components/sections/faq";
import Exchanges from "@/components/sections/exchanges";
import Footer from "@/components/sections/footer";
import Waitlist from "@/components/sections/waitlist";

export default async function Home() {
  const links = [
    { text: "Features", href: "/#features" },
    { text: "How it works", href: "/#how-it-works" },
    { text: "Unique Features", href: "/#unique-features" },
    { text: "Target Audience", href: "/#target-audience" },
    { text: "FAQ", href: "/#faq" },
  ];
  return (
    <div>
      <Navbar
        mobileLinks={links}
        customNavigation={
          <Navigation
            menuItems={links.map((link) => ({
              title: link.text,
              isLink: true,
              href: link.href,
            }))}
          />
        }
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
