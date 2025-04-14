"use client";
import {
  MessageSquare,
  Code,
  BarChart3,
  LineChart,
  Rocket,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Describe",
      description: "Chat with the AI to outline your strategy logic.",
      icon: <MessageSquare className="h-6 w-6 text-brand-foreground" />,
    },
    {
      id: 2,
      title: "Generate & Refine",
      description: "AI creates the code; iterate based on drafts.",
      icon: <Code className="h-6 w-6 text-brand-foreground" />,
    },
    {
      id: 3,
      title: "Test & Optimize",
      description: "Backtest historically, then optimize using AI or Hyperopt.",
      icon: <BarChart3 className="h-6 w-6 text-brand-foreground" />,
    },
    {
      id: 4,
      title: "Validate",
      description: "Run risk-free Dry-Runs on live market data.",
      icon: <LineChart className="h-6 w-6 text-brand-foreground" />,
    },
    {
      id: 5,
      title: "Deploy & Adapt",
      description:
        "Go live, and optionally use Scenarios to manage multiple strategies.",
      icon: <Rocket className="h-6 w-6 text-brand-foreground" />,
    },
    {
      id: 6,
      title: "Monetize",
      description: "List successful strategies on the Marketplace.",
      icon: <DollarSign className="h-6 w-6 text-brand-foreground" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Idea to Automated Trading in Simple Steps
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform guides you through each stage of the strategy
            development process
          </p>
        </motion.div>

        <div className="relative overflow-x-hidden">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-foreground/0 via-brand-foreground/80 to-brand-foreground/0 transform -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => {
              const StepContent = () => {
                const ref = useRef(null);
                const isInView = useInView(ref, {
                  once: true,
                  margin: "-100px",
                });

                return (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                    }
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    key={step.id}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } md:gap-8 items-center`}
                  >
                    <div className="md:w-1/2 mb-6 md:mb-0 group">
                      <div
                        className={`p-8 rounded-2xl shadow-lg transition-all duration-600 ease-in-out
                        border border-brand-foreground/10
                        hover:border-brand-foreground/20
                        hover:from-brand-foreground/10 hover:to-black
                        group-hover:shadow-brand-foreground/5 group-hover:-translate-y-1
                        backdrop-blur-3xl backdrop-saturate-150
                        ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                      >
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-foreground transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-600">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline node */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        isInView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0, opacity: 0 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                      className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 
                      w-12 h-12 rounded-full backdrop-blur-3xl
                      border-2 border-brand-foreground/50 
                      flex items-center justify-center 
                      text-brand-foreground font-bold
                      shadow-lg shadow-brand-foreground/20"
                    >
                      {step.id}
                    </motion.div>

                    {/* Empty div for layout on alternate sides */}
                    <div className="md:w-1/2"></div>
                  </motion.div>
                );
              };

              return <StepContent key={step.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
