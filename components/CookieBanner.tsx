"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "cookies_accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="
            fixed bottom-4 left-1/2 -translate-x-1/2
            z-50 w-[95%] max-w-xl
            bg-white dark:bg-[#161c2d]
            text-gray-800 dark:text-gray-200
            rounded-xl shadow-xl
            px-5 py-4
          "
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm leading-relaxed">
              We only use essential cookies to keep this site running properly.
              By continuing to use this website, you agree to their use.
            </p>

            <Button onClick={acceptCookies} variant={"myblue"} size={"custom"}>
              Accept & Continue
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
