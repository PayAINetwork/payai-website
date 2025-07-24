"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar() {
  const useActive = useRelume();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Custom smooth scroll function with navbar offset
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80; // Approximate navbar height
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId);
    // Close mobile menu if open
    if (useActive.animateMobileMenu === "open") {
      useActive.toggleMobileMenu();
    }
  };

  return (
    <motion.section
      id="nav"
      className={`sticky top-0 z-50 flex w-full items-center lg:min-h-18 lg:px-[5%] transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-lg shadow-black/5"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-200/60 shadow-sm"
      }`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <motion.a
            href="#nav"
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
          >
            <img src="payai-lettermark.svg" alt="Logo image" width="100px" />
          </motion.a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "auto" },
            close: { height: 0 },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:overflow-visible lg:flex lg:items-center lg:px-0 lg:h-auto"
        >
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="block py-3 text-sm first:pt-7 lg:px-4 lg:py-2 lg:text-sm first:lg:pt-2 text-gray-600 hover:text-midnight transition-colors duration-200 font-medium cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
          >
            Home
          </motion.a>
          <motion.a
            href="#preview"
            onClick={(e) => handleNavClick(e, "preview")}
            className="block py-3 text-sm first:pt-7 lg:px-4 lg:py-2 lg:text-sm first:lg:pt-2 text-gray-600 hover:text-midnight transition-colors duration-200 font-medium cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
          >
            Preview
          </motion.a>
          <motion.a
            href="#how-it-works"
            onClick={(e) => handleNavClick(e, "how-it-works")}
            className="block py-3 text-sm first:pt-7 lg:px-4 lg:py-2 lg:text-sm first:lg:pt-2 text-gray-600 hover:text-midnight transition-colors duration-200 font-medium cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
          >
            How it Works
          </motion.a>
          <motion.a
            href="#use-cases"
            onClick={(e) => handleNavClick(e, "use-cases")}
            className="block py-3 text-sm first:pt-7 lg:px-4 lg:py-2 lg:text-sm first:lg:pt-2 text-gray-600 hover:text-midnight transition-colors duration-200 font-medium cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
          >
            Use Cases
          </motion.a>
          <motion.a
            href="#tokenomics"
            onClick={(e) => handleNavClick(e, "tokenomics")}
            className="block py-3 text-sm first:pt-7 lg:px-4 lg:py-2 lg:text-sm first:lg:pt-2 text-gray-600 hover:text-midnight transition-colors duration-200 font-medium cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
          >
            Tokenomics
          </motion.a>
          <motion.a
            href={process.env.NEXT_PUBLIC_PARTNERSHIP_URL}
            target="_blank"
            className="block py-3 text-sm first:pt-7 lg:px-4 lg:py-2 lg:text-sm first:lg:pt-2 text-gray-600 hover:text-midnight transition-colors duration-200 font-medium cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
          >
            Partner With PayAI
          </motion.a>
          <div className="mt-6 flex flex-col items-center gap-3 lg:ml-6 lg:mt-0 lg:flex-row">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              <Button
                title="Docs"
                variant="secondary"
                size="sm"
                className="w-full lg:w-auto bg-transparent hover:bg-gray-50 border border-gray-300 hover:border-gray-400 transition-all duration-200 rounded-lg text-gray-700 text-sm font-medium px-4 py-2 cursor-pointer"
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank")
                }
              >
                Docs
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              <Button
                title="Open App"
                size="sm"
                className="w-full lg:w-auto bg-midnight hover:bg-midnight/90 transition-all duration-200 rounded-lg font-medium text-white border-0 text-sm px-6 py-2 cursor-pointer"
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_BUY_TOKEN_URL, "_blank")
                }
              >
                Buy
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
