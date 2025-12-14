"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "../SiteHeader";

// Carousel data
const heroSlides = [
  {
    id: 1,
    image: "/bgs/hero/bg1.png",
    subtitle: "Delivery Excellence",
    title: "Professional Standards,\nEvery Single Time",
    description:
      "Dedicated logistics professionals delivering consistent, reliable service through modern operations and a commitment to excellence.",
  },
  {
    id: 2,
    image: "/bgs/hero/bg2.png",
    subtitle: "Reliable & Scalable Operations",
    title: "Powering Business\nDeliveries.",
    description:
      "We partner with businesses to provide dependable last-mile delivery solutions designed to scale with growing operational demands.",
  },
  {
    id: 3,
    image: "/bgs/hero/bg3.png",
    subtitle: "Modern Infrastructure",
    title: "Where Operational\nExcellence Begins.",
    description:
      "Our facilities and workflows are built to ensure every shipment is handled with precision, care, and efficiency from dispatch to delivery.",
  },
  {
    id: 4,

    image: "/bgs/hero/bg4.png",
    subtitle: "Expert Teams",
    title: "Trained People.\nReliable Service.",
    description:
      "Our teams are continuously trained to uphold industry best practices, ensuring quality service across every delivery partnership.",
  },
];
// const heroSlides = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1556382363-8967ad2b37f0?q=80&w=2370&auto=format&fit=crop",
//     subtitle: "Delivery Excellence",
//     title: "Professional Standards,\nEvery Single Time",
//     description:
//       "Dedicated logistics professionals delivering consistent, reliable service through modern operations and a commitment to excellence.",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1591270551371-3401a1a9382f?q=80&w=2370&auto=format&fit=crop",
//     subtitle: "Reliable & Scalable Operations",
//     title: "Powering Business\nDeliveries.",
//     description:
//       "We partner with businesses to provide dependable last-mile delivery solutions designed to scale with growing operational demands.",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1749244768351-2726dc23d26c?q=80&w=2224&auto=format&fit=crop",
//     subtitle: "Modern Infrastructure",
//     title: "Where Operational\nExcellence Begins.",
//     description:
//       "Our facilities and workflows are built to ensure every shipment is handled with precision, care, and efficiency from dispatch to delivery.",
//   },
//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1624984608976-8a7358d25bce?q=80&w=2371&auto=format&fit=crop",
//     subtitle: "Expert Teams",
//     title: "Trained People.\nReliable Service.",
//     description:
//       "Our teams are continuously trained to uphold industry best practices, ensuring quality service across every delivery partnership.",
//   },
// ];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();

  // Smoother, subtler parallax
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const currentData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <motion.div className="absolute inset-0 z-0 bg-[#161c2d]" style={{ y }}>
        {/* Stack images on top of each other for crossfade effect */}
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.05,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(rgba(22, 28, 45, 0.9), rgba(22, 28, 45, 0.8))",
          }}
        />
      </motion.div>

      <SiteHeader />

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-4 flex items-center justify-center min-h-screen pt-32 pb-20">
        <div className="flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-8"
            >
              <h1
                className="uppercase tracking-widest font-medium text-md"
                style={{ color: "#00A8E1" }}
              >
                {currentData.subtitle}
              </h1>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-pre-line">
                {currentData.title}
              </h2>

              <p className="text-base md:text-lg max-w-2xl">
                {currentData.description}
              </p>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-6 mt-4">
                <button
                  onClick={prevSlide}
                  className="group p-3 rounded-full border-2 border-white/30 hover:border-[#00A8E1] hover:bg-[#00A8E1]/20 transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#00A8E1] transition-colors" />
                </button>

                {/* Dot indicators */}
                <div className="flex gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-8 bg-[#00A8E1]"
                          : "w-2 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="group p-3 rounded-full border-2 border-white/30 hover:border-[#00A8E1] hover:bg-[#00A8E1]/20 transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:text-[#00A8E1] transition-colors" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
