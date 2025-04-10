import Hero from "@/components/sections/hero/default";
import Navbar from "@/components/sections/navbar/default";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Unlock AI-Powered Crypto Trading Automation"
        description="Design, backtest, optimize, deploy, and even monetize trading strategies using natural language and powerful tools. No coding required."
        badge={false}
      />
    </div>
  );
}
