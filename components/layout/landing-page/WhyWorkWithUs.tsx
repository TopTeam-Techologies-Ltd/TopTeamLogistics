"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Wrapper from "../Wrapper";

const WhyWorkWithUs = () => {
  const features = [
    {
      icon: "/icons/bus.svg",
      title: "Branded Amazon Vehicles",
      description:
        "Drive with pride in safe, reliable, and fully branded Amazon vans.",
    },
    {
      icon: "/icons/callCenter.svg",
      title: "24/7 Operational Support",
      description:
        "Get round-the-clock assistance to keep your deliveries running smoothly.",
    },
    {
      icon: "/icons/bus.svg",
      title: "Free Van Hire & Insurance",
      description:
        "Free van hire and insurance included to support your deliveries.",
    },
    {
      icon: "/icons/freeRouting.svg",
      title: "Free Routing Software",
      description:
        "Plan efficient routes at no cost with our free routing software.",
    },
    {
      icon: "/icons/suit.svg",
      title: "Free Uniforms",
      description:
        "Stay comfortable and professional with free uniforms provided for every driver.",
    },
    {
      icon: "/icons/driver.svg",
      title: "Driver Success Program",
      description: "Training and support to help drivers succeed.",
    },
  ];

  return (
    <Wrapper>
      <section className="py-12 md:py-16 lg:py-24">
        {/* Main Grid with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-start">
          {/* Left Column - Title & Package Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="text-4xl my-title  font-bold leading-tight">
              Why Work With Us?
            </h1>

            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[800px] w-full">
                <Image
                  src="/bgs/deliver.png"
                  alt="Delivered Package"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Delivery Person */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative h-96 lg:h-[500px] xl:h-[800px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/bgs/whiteman.png"
                alt="Delivery person with package"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent" />
            </div>

            {/* Floating Card - Responsive positioning */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg max-w-[200px] sm:max-w-xs">
              <p className="text-xs sm:text-sm font-medium">
                Join our team of dedicated delivery professionals
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid Below */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-32"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg "
              >
                {/* Icon Container */}
                <div className="shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-custom-blue/10 dark:bg-white flex items-center justify-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 text-custom-blue">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={24}
                        height={24}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold my-title text-base sm:text-lg mb-1 sm:mb-2 h-12 sm:h-14 flex items-start">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-light my-title sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </Wrapper>
  );
};

export default WhyWorkWithUs;
