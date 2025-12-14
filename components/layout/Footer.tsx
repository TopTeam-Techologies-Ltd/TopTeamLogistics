"use client";
import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";
import AnimatedSeprator from "./AnimatedSeprator";
import { Button } from "../ui/button";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import AnimatedSepratorTwo from "./AnimatedSepratorTwo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showFullMap, setShowFullMap] = useState(false);

  const navItems = [
    { name: "About Us", href: "/" },
    { name: "Join our Team", href: "/" },
    { name: "Contact Us", href: "/" },
    { name: "Help", href: "/" },
    { name: "Privacy", href: "/" },
  ];

  // London, United Kingdom
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.50732461158!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3337c5e2c9%3A0x2e77b7e8c3d6f9c!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1733835000000!5m2!1sen!2suk";

  return (
    <>
      <AnimatedSepratorTwo className="my-0 dark:my-9" />
      <footer className=" pt-16 pb-8">
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Company Info */}
              <div className="flex flex-col gap-4">
                <div>
                  <Image
                    src="/icons/logo-dark.png"
                    alt="Logo"
                    width={150}
                    height={80}
                  />
                </div>
                <p className="my-paragraph text-sm tracking-wider leading-8 font-light text-justify">
                  TopTeam Logistics is a trusted delivery partner based in
                  Peterborough, dedicated to providing fast, reliable, and
                  professional logistics solutions. We specialize in last-mile
                  delivery services, ensuring every parcel reaches its
                  destination safely and on time.
                </p>
              </div>

              {/* Quick Links */}
              <div className="w-full flex flex-col justify-start items-start md:items-center gap-4">
                <h1 className="my-title font-medium">Quick Links</h1>
                <nav className="flex flex-col justify-start items-start gap-4 my-paragraph">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-light transition-colors duration-200 hover:text-custom-blue"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Map and Newsletter */}
              <div className="flex flex-col gap-4">
                {/* Tiny Map Preview */}
                <div
                  className="relative w-full h-48 overflow-hidden cursor-pointer  dark:border-gray-700 hover:opacity-90 transition-opacity"
                  onClick={() => setShowFullMap(true)}
                >
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-medium bg-custom-blue px-4 py-2 rounded-lg">
                      View Larger Map
                    </span>
                  </div>
                </div>

                {/* Newsletter */}
                <div>
                  <h1 className="my-title mb-2">Join our newsletter</h1>
                </div>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-sm border border-gray-300 dark:border-gray-700 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                  />
                  <Button variant={"myblue"} size={"custom"}>
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <AnimatedSeprator />

          {/* Copyright and Social */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between my-title text-xs">
            <p>
              © {currentYear} Copyright, All Rights Reserved, Made by TopTeam
            </p>
            <div className="flex gap-5 mt-4 md:mt-0">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-5 h-5 icons-color hover:text-[#00A8E1] transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="w-5 h-5 icons-color hover:text-[#00A8E1] transition-colors" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5 icons-color hover:text-[#00A8E1] transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="w-5 h-5 icons-color hover:text-[#00A8E1] transition-colors" />
              </a>
            </div>
          </div>
        </Wrapper>
      </footer>
      {/* Full Screen Map Modal */}
      {showFullMap && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowFullMap(false)}
        >
          <div
            className="relative w-full max-w-6xl h-[80vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowFullMap(false)}
              className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              ✕ Close
            </button>

            {/* Full Map */}
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
