"use client";
import { motion } from "framer-motion";

interface AnimatedSeparatorTwoProps {
  className?: string;
}

const AnimatedSeparatorTwo = ({
  className = "my-9 flex justify-center",
}: AnimatedSeparatorTwoProps) => {
  return (
    <div className={` ${className}`}>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-px bg-[#E7E9ED]"
      />
    </div>
  );
};

export default AnimatedSeparatorTwo;
