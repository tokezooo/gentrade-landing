import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to have any programming experience?",
    answer:
      "No! GenTrade is designed to be accessible to traders of all technical backgrounds. Our AI can generate strategies based on your plain English descriptions.",
  },
  {
    question: "What exchanges are supported for Live Trading?",
    answer:
      "GenTrade currently supports major exchanges including Binance, Bybit, Bitget, Gate.io, and more. We're continuously adding support for additional exchanges based on user demand.",
  },
  {
    question: "How does AI Optimization work and use credits?",
    answer:
      "AI Optimization uses LLMs to analyze your strategy and suggest parameter improvements. Each optimization run consumes credits based on the complexity and duration of the analysis. Different subscription tiers include varying amounts of credits, and additional credit packs can be purchased separately.",
  },
  {
    question: "How does the Marketplace ensure strategy quality?",
    answer:
      "All strategies listed on the Marketplace include verified historical performance data. Buyers can see actual backtest results and dry-run performance before purchasing. Additionally, our community rating system helps identify the most reliable strategies.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes, we take data security seriously. We use industry-standard encryption for all sensitive data, implement strict access controls, and never share your trading data with third parties. For more details, please review our Privacy Policy.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 max-w-container mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about GenTrade.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="rounded border border-none bg-primary-foreground/50 px-4 mb-2"
            >
              <AccordionTrigger className="text-xl text-brand-foreground font-semibold cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
