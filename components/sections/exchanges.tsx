import { Logos3 } from "@/components/blocks/logos3";

const exchanges = {
  heading: "Supported Exchanges",
  logos: [
    {
      id: "binance",
      description: "Binance",
      image: "/exc/binance.svg",
      className: "h-7 w-auto",
    },
    {
      id: "bybit",
      description: "Bybit",
      image: "/exc/bybit.svg",
      className: "h-7 w-auto",
    },
    {
      id: "okx",
      description: "OKX",
      image: "/exc/okx.svg",
      className: "h-7 w-auto",
    },
    {
      id: "bitget",
      description: "Bitget",
      image: "/exc/bitget.svg",
      className: "h-7 w-auto",
    },
    {
      id: "kucoin",
      description: "KuCoin",
      image: "/exc/kucoin.svg",
      className: "h-7 w-auto",
    },
    {
      id: "gateio",
      description: "Gate.io",
      image: "/exc/gateio.svg",
      className: "h-7 w-auto",
    },
    {
      id: "htx",
      description: "HTX",
      image: "/exc/htx.svg",
      className: "h-7 w-auto",
    },
  ],
};

export default function Exchanges() {
  return (
    <section id="features" className="py-16 max-w-container mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-50">
        <Logos3 {...exchanges} />
      </div>
    </section>
  );
}
