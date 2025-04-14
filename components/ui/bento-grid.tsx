import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[13rem] sm:auto-rows-[18rem] lg:auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  Icon,
  description,
}: {
  name: string;
  className: string;
  Icon: React.ElementType;
  description: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl max-h-[13rem] lg:max-h-[100rem] lg:min-h-[16rem]",
      // light styles
      "bg-white transition-all duration-300 ease-in-out",
      "shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "hover:shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_24px_48px_rgba(0,0,0,.1)]",
      // dark styles
      "transform-gpu dark:bg-black dark:border dark:border-white/10",
      "dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset]",
      "dark:hover:shadow-[0_-20px_80px_-20px_#ffffff2f_inset] dark:hover:border-white/20",
      className
    )}
  >
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-600 ">
      <Icon
        strokeWidth={1}
        className="h-12 w-12 origin-left transform-gpu text-brand-foreground transition-all duration-300 ease-in-out group-hover:scale-110"
      />
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 transition-all duration-300 ease-in-out pt-2 group-hover:pt-3">
        {name}
      </h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
