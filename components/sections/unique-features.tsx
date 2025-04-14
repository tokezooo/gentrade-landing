"use client";

import React from "react";
import { GitBranch, ShoppingCart, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureSectionProps {
  icon: React.ReactElement;
  title: string;
  description: React.ReactNode;
  bulletPoints: string[];
  isReversed?: boolean;
  placeholderText: string;
}

function FeatureSection({
  icon,
  title,
  description,
  bulletPoints,
  isReversed = false,
  placeholderText,
}: FeatureSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const Content = () => (
    <div className="lg:w-1/2">
      <div className="flex items-center mb-6">
        <h3 className="text-2xl font-bold text-brand-foreground">{title}</h3>
      </div>
      <div className="text-gray-300 text-lg mb-6">{description}</div>
      <ul className="space-y-3">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-brand-foreground mr-2">•</span>
            <span className="text-gray-300">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const Visual = () => (
    <div className="lg:w-1/2">
      <div className="rounded-xl overflow-hidden shadow-xl">
        <div className="h-[300px] p-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,175,80,0.1),transparent_70%)]"></div>
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              {React.cloneElement(icon, {
                className: "h-16 w-16 text-brand-foreground mx-auto mb-4",
              } as React.SVGProps<SVGSVGElement>)}
              <p className="text-gray-300">{placeholderText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="flex flex-col lg:flex-row items-center gap-12"
    >
      {isReversed ? (
        <>
          <Visual />
          <Content />
        </>
      ) : (
        <>
          <Content />
          <Visual />
        </>
      )}
    </motion.div>
  );
}

export default function UniqueFeatures() {
  const features = [
    {
      icon: (
        <GitBranch strokeWidth={1} className="h-6 w-6 text-brand-foreground" />
      ),
      title: "Conquer Changing Markets with Smart Scenarios",
      description: (
        <p>
          Stop relying on static strategies. Use our intuitive node-based editor
          to build workflows that activate/deactivate strategies based on
          indicators or market states. Create truly resilient portfolios.
        </p>
      ),
      bulletPoints: [
        "Visual node-based editor for creating complex decision trees",
        "Automatic strategy switching based on market conditions",
        "Combine multiple strategies into a resilient portfolio",
      ],
      placeholderText: "Scenario Editor Interface",
    },
    {
      icon: (
        <ShoppingCart
          strokeWidth={1}
          className="h-6 w-6 text-brand-foreground"
        />
      ),
      title: "Join the GenTrade Strategy Economy",
      description: (
        <>
          <p>
            <b className="text-brand-foreground">For Sellers:</b> Monetize your
            proven strategies with verified performance data. Earn crypto
            (USDT/USDC).
          </p>
          <p>
            <b className="text-brand-foreground">For Buyers:</b> Access a pool
            of successful, community-vetted strategies.
          </p>
          <p className="pt-2 text-sm">
            We facilitate with a transparent 3% platform fee.
          </p>
        </>
      ),
      bulletPoints: [
        "Verified performance metrics for all listed strategies",
        "Secure payment processing with USDT/USDC",
        "Community ratings and reviews for quality assurance",
      ],
      isReversed: true,
      placeholderText: "Strategy Marketplace Listing",
    },
    {
      icon: <Brain strokeWidth={1} className="h-6 w-6 text-brand-foreground" />,
      title: "Leverage Our Expertise: The GenTrade Nexus",
      description: (
        <p>
          Access our proprietary, ML-driven flagship strategy. Nexus learns from
          anonymized platform-wide data to identify complex patterns, offering
          premium performance potential (available on higher tiers).
        </p>
      ),
      bulletPoints: [
        "Machine learning algorithms trained on platform-wide data",
        "Continuously evolving to adapt to changing market conditions",
        "Premium performance potential with minimal setup required",
      ],
      placeholderText: "Nexus Strategy Visualization",
    },
  ];

  return (
    <section id="unique-features" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unique Capabilities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover what sets GenTrade apart from other trading platforms
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureSection key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
