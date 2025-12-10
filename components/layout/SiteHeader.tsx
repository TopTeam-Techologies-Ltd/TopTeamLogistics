"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import Wrapper from "./Wrapper";

const navItems = [
  { name: "About Us", href: "/" },
  { name: "Join our Team", href: "/" },
  { name: "Contact", href: "/" },
];

export function SiteHeader() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const isPast = window.scrollY > heroHeight - 100;

      if (isPast !== isPastHero) {
        setIsPastHero(isPast);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPastHero]);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 w-full py-4 transition-all duration-300 ${
          isPastHero ? "backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <Wrapper className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Image
              src={isPastHero ? `/icons/logo-dark.png` : "/icons/logo.png"}
              alt="Top Logistics Logo"
              width={150}
              height={50}
              className="object-cover object-center"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors font-medium duration-200 hover:text-custom-blue ${
                  isPastHero ? "text-gray-800 dark:text-gray-200" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 rounded-lg hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X
                    className={`w-6 h-6 ${
                      isPastHero
                        ? "text-gray-800 dark:text-white"
                        : "text-white"
                    }`}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu
                    className={`w-6 h-6 ${
                      isPastHero
                        ? "text-gray-800 dark:text-white"
                        : "text-white"
                    }`}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </Wrapper>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-gray-900 shadow-2xl z-40 md:hidden"
            >
              <nav className="flex flex-col pt-24 px-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block py-4 px-4 text-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-custom-blue/10 hover:text-custom-blue rounded-lg transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Decorative element */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4 }}
                  className="h-1 bg-linear-to-r from-custom-blue to-transparent rounded-full mt-8"
                />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
