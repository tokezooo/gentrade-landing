import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import {
  Brain,
  History,
  Sliders,
  Rocket,
  Clock,
  GitBranch,
  ShoppingCart,
} from "lucide-react";

const features = [
  {
    Icon: Brain,
    name: "AI Strategy Generation",
    description:
      "Describe your trading idea in plain English, our AI builds the strategy code for you. No programming experience required - just explain your logic and watch as GenTrade translates it into executable code.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    Icon: History,
    name: "Effortless Backtesting",
    description:
      "Validate your strategies against historical market data in minutes.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    Icon: Sliders,
    name: "Advanced Optimization",
    description:
      "Fine-tune parameters with Hyperopt or let AI suggest optimal settings for stops, indicators, and entry/exit conditions.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    Icon: Rocket,
    name: "Test & Deploy Safely",
    description:
      "Validate performance with risk-free Dry-Runs on live data, then deploy for Live Trading with confidence.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Clock,
    name: "Strategy Versioning",
    description:
      "Track every optimization and easily revert to previous high-performing versions.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: GitBranch,
    name: "Adaptive Scenarios",
    description:
      "Build resilient portfolios. Automatically switch strategies based on market conditions using our visual editor. Create complex decision trees that respond to market shifts in real-time.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-span-3 lg:row-span-1",
  },
  {
    Icon: ShoppingCart,
    name: "Strategy Marketplace",
    description:
      "Monetize your successful strategies or buy proven ones from the community.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-span-1 lg:row-span-1",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 max-w-container mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Complete AI Trading Toolkit
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to create, test, and deploy profitable trading
            strategies
          </p>
        </div>
      </div>
      <BentoGrid className="container mx-auto px-6 lg:px-8 lg:grid-cols-4 lg:grid-rows-3 gap-4">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
