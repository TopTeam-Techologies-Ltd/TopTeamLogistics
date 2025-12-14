"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Wrapper from "../Wrapper";
import { div } from "framer-motion/client";

const WhyWorkWithUs = () => {
  const features = [
    {
      icon: "/icons/bus.svg",
      title: "Modern Delivery Fleet",
      description:
        "Operate with safe, reliable, and professionally maintained delivery vehicles.",
    },
    {
      icon: "/icons/callCenter.svg",
      title: "24/7 Operational Support",
      description:
        "Round-the-clock support to keep daily operations running smoothly.",
    },
    {
      icon: "/icons/freeRouting.svg",
      title: "Optimised Routing Systems",
      description:
        "Smart routing tools designed to improve efficiency and reduce delays.",
    },
    {
      icon: "/icons/ops.svg",
      title: "Operational Intelligence",
      description:
        "Clear visibility into delivery performance through real-time tracking, reporting, and continuous operational improvement.",
    },

    {
      icon: "/icons/bus.svg",
      title: "Vehicle & Insurance Support",
      description:
        "Operational support covering vehicles and insurance requirements.",
    },
    {
      icon: "/icons/suit.svg",
      title: "Professional Uniforms",
      description:
        "Consistent, professional appearance across all delivery teams.",
    },
    {
      icon: "/icons/driver.svg",
      title: "Team Training & Development",
      description:
        "Ongoing training to maintain service quality and operational standards.",
    },
  ];
  const topFeatures = features.slice(0, 4);
  const bottomFeatures = features.slice(4);

  return (
    <section className="bg-[#F4F7FA] py-12 md:py-16 lg:py-24 dark:dark:bg-[#020618]">
      <Wrapper>
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Title + 3 features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-14"
          >
            <h2 className="text-4xl font-bold my-title text-center lg:text-start">
              Why Work With Us?
            </h2>
            <div className="space-y-16">
              {topFeatures.map((feature, index) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center dark:bg-white">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-lg my-title">
                      {feature.title}
                    </h3>
                    <p className="w-full md:w-[80%] text-sm font-light my-title">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6 py-6"
          >
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/bgs/why-2.png"
                alt="Delivery professional"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/bgs/why-1.png"
                alt="Logistics operations"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* BOTTOM FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {bottomFeatures.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center dark:bg-white">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="font-semibold my-title">{feature.title}</h3>
                <p className="text-sm font-light my-title">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default WhyWorkWithUs;
