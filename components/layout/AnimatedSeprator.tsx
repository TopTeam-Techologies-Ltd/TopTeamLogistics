"use client";
import { motion } from "framer-motion";

interface AnimatedSeparatorProps {
  className?: string;
}

const AnimatedSeprator = ({
  className = "my-9 flex justify-center",
}: AnimatedSeparatorProps) => {
  return (
    <div className={className}>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-px w-full origin-center bg-linear-to-r from-transparent via-[#E7E9ED] to-transparent"
      />
    </div>
  );
};

export default AnimatedSeprator;
