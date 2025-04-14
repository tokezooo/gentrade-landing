import { Card } from "@/components/ui/card";
import {
  User,
  TrendingUp,
  GitBranch,
  Code,
  DollarSign,
  Users,
} from "lucide-react";

interface AudienceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function AudienceCard({ title, description, icon }: AudienceCardProps) {
  return (
    <Card className="border border-none flex flex-col items-center text-center gap-1">
      <div className="mb-4 rounded-full bg-brand-foreground/10 p-3 w-12 h-12 flex items-center justify-center text-brand-foreground">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-brand-foreground mb-1">
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

export default function TargetAudience() {
  const audiences = [
    {
      title: "Beginners & Hobbyists",
      description: "Turn ideas into bots without code via our chat interface.",
      icon: <User strokeWidth={1} className="h-6 w-6" />,
    },
    {
      title: "Experienced Traders",
      description:
        "Rapidly prototype, test, optimize, and manage complex strategies.",
      icon: <TrendingUp strokeWidth={1} className="h-6 w-6" />,
    },
    {
      title: "Systematic Traders",
      description: "Build adaptive, multi-strategy portfolios using Scenarios.",
      icon: <GitBranch strokeWidth={1} className="h-6 w-6" />,
    },
    {
      title: "Strategy Developers",
      description: "Monetize your skills and IP on the Marketplace.",
      icon: <Code strokeWidth={1} className="h-6 w-6" />,
    },
    {
      title: "Passive Investors",
      description:
        "Access proven strategies from the Marketplace or our Nexus Strategy.",
      icon: <DollarSign strokeWidth={1} className="h-6 w-6" />,
    },
    {
      title: "Educators & Communities",
      description:
        "Create and share strategy bundles to teach or engage your audience.",
      icon: <Users strokeWidth={1} className="h-6 w-6" />,
    },
  ];

  return (
    <section id="features" className="py-16 max-w-container mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Every Stage of Your Trading Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No matter your experience level, GenTrade has the tools you need
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <AudienceCard
              key={index}
              title={audience.title}
              description={audience.description}
              icon={audience.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
