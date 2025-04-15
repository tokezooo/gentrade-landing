import { Sparkle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 mb-16 bg-background text-foreground">
      <div className="container px-4 mx-auto flex flex-col gap-8">
        <div className="flex items-center gap-2 text-xl font-bold">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Sparkle className="size-4" />
          </div>
          GenTrade
        </div>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <Link
            href="/privacy-policy"
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
