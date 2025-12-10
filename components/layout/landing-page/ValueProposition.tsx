"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Wrapper from "../Wrapper";
import AnimatedSeprator from "../AnimatedSeprator";

const ValueProposition = () => {
  const valueItems = [
    {
      icon: "/icons/safety.png",
      title: "Safety",
      description:
        "We prioritize the safety of our drivers, packages, and community at every step.",
    },
    {
      icon: "/icons/support.png",
      title: "Support Team",
      description:
        "A dedicated team is always available to assist you on and off the road.",
    },
    {
      icon: "/icons/customer.png",
      title: "Customer Obsession",
      description:
        "Every delivery is made with care, ensuring customers receive reliable and satisfying service.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <Wrapper>
      <section className="flex flex-col gap-12 justify-center pt-20 pb-14">
        <motion.h1
          className="text-4xl text-center font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          What sets us apart
        </motion.h1>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {valueItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col items-center p-6"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Icon - Fixed height container */}
              <motion.div
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="mb-4 h-20 flex items-center justify-center"
              >
                <Image
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </motion.div>

              {/* Title - Fixed height with flex alignment */}
              <motion.h2
                className="my-title text-xl font-bold text-center h-16 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {item.title}
              </motion.h2>

              {/* Description - Starts at same line for all */}
              <motion.p
                className="w-full my-title font-light md:w-4/5 mx-auto text-center text-sm md:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.section>
      </section>
      <AnimatedSeprator />
    </Wrapper>
  );
};

export default ValueProposition;
