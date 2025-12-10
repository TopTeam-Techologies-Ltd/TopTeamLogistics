// components/theme/floating-theme-toggle.tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Don't render anything during SSR
  }

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        className="h-12 w-12 cursor-pointer rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-border/50 hover:scale-110 transition-all duration-300"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
