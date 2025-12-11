"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "Can I join as a delivery driver?",
      answer:
        "Yes! We're always looking for reliable and dedicated delivery drivers to join our team. You'll need a valid driver's license, clean driving record, and the ability to pass a background check. We provide comprehensive training, branded Amazon vehicles, and full support to help you succeed.",
    },
    {
      question: "Do you own the vans?",
      answer:
        "Yes, all our delivery vans are owned and maintained by TopTeam Logistics. We provide fully branded Amazon vehicles with insurance coverage included. Our drivers don't need to worry about vehicle costs, maintenance, or insurance - everything is taken care of so you can focus on delivering excellent service.",
    },
    {
      question: "How fast is delivery?",
      answer:
        "We offer same-day and next-day delivery options depending on your location in Peterborough and surrounding areas. Most packages are delivered within 24-48 hours of being dispatched from our warehouse. We use advanced routing software to optimize delivery times and ensure your packages arrive as quickly as possible.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We primarily serve Peterborough and the surrounding regions as an Amazon Delivery Service Partner. Our delivery network covers residential and commercial areas within our designated service zone. If you're unsure whether we deliver to your area, please contact our support team for confirmation.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-my-blue text-white dark:bg-[#020618]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 md:py-36 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left Section */}
        <section className="flex flex-col justify-center gap-6">
          <h1 className="w-full text-center md:text-start md:w-[90%] lg:w-[70%] text-3xl md:text-4xl text-white tracking-wider font-bold leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="w-full text-center text-sm font-light text-[#FFFFFF] leading-relaxed md:w-[70%] md:text-start">
            Find quick answers to the most common questions about our delivery
            services, driver opportunities, and operations.
          </p>
        </section>

        {/* Right Section - FAQ Accordion */}
        <section className="bg-white text-[#003C71] flex flex-col rounded-sm p-3 dark:bg-[#020618] dark:text-white">
          {faqData.map((faq, index) => (
            <div className="" key={index}>
              {/* Question */}
              <motion.div
                onClick={() => toggleFaq(index)}
                className={`flex items-center justify-between p-4 cursor-pointer rounded-t-lg transition-all duration-300 ${
                  openIndex === index
                    ? "bg-custom-blue"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <h3 className="text-base md:text-lg font-semibold pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="shrink-0"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              </motion.div>
              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-white/5 rounded-b-lg"
                  >
                    <p className="p-4 md:p-5 text-sm md:text-base font-light leading-relaxed text-[#003C71] dark:text-white/90">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Separator Line */}
              {index < faqData.length - 1 && (
                <div className="h-px bg-[#E7E9ED] my-3" />
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Faq;
