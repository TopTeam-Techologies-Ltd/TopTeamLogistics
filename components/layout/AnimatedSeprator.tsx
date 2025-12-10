"use client";
import { motion } from "framer-motion";

const AnimatedSeprator = () => {
  return (
    <div className="my-9 flex justify-center">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-px bg-linear-to-r from-transparent via-[#E7E9ED] to-transparent"
      />
    </div>
  );
};

export default AnimatedSeprator;
