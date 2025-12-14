"use client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiteHeaderTwo } from "@/components/layout/SiteHeaderTwo";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSectionTwo = () => {
  const jobHighlights = [
    "Peterborough",
    "Flexible working patterns",
    "Weekly payments",
  ];
  const { scrollYProgress } = useScroll();

  // Smoother, subtler parallax
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <>
      <section className="relative h-[50vh] overflow-hidden pb-32">
        {/* Background */}
        <motion.div className="absolute inset-0 z-0 bg-[#161c2d]" style={{ y }}>
          <motion.div
            className="absolute inset-0"
            initial={false}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1651928977880-ffb2d963b6b4?q=80&w=3548&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(rgba(22, 28, 45, 0.9), rgba(22, 28, 45, 0.9))",
            }}
          />
        </motion.div>

        {/* Header */}
        <SiteHeaderTwo />

        {/* Content */}
        <div className="relative z-20 flex h-full items-start justify-center px-4 pt-32">
          <div className="max-w-3xl text-center text-white">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-8"
              >
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Delivery Driver
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  {jobHighlights.map((item) => (
                    <span
                      key={item}
                      className="bg-[#00a8e1] rounded-sm px-8 py-2 text-sm font-light tracking-wide text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div>
                  <Button
                    size={"lg"}
                    className="bg-white text-[#003C71] text-lg"
                  >
                    Apply Now
                    <ArrowDown />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionTwo;
