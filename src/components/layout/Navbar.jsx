"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Book, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      const navbarHeight = 72; // Navbar height
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
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, ease: [0.25, 0.25, 0, 1] }}
      className={`sticky top-0 z-50 w-full h-13 py-3 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.1)] ${
        isScrolled ? "bg-white/90" : "bg-white"
      }`}
    >
      <div className="container-payai">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-stretch justify-between"
        >
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden flex items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                    <X className="w-6 h-6 text-[#242424]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-[#242424]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-2 max-h-13"
              >
                <Image
                  src="/horizontal-lockup.svg"
                  alt="PayAI Logo"
                  width={118}
                  height={52}
                  className="h-12 lg:h-13 w-auto"
                  priority={true}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 bg-[#F5F5F5] p-1.5 rounded-xl">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Link
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className="bg-white flex items-center px-4 py-2 text-sm font-medium text-[#0A0A0A] transition-colors rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <Link
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="px-4 py-2 text-sm font-medium text-[#0A0A0A] transition-colors"
                >
                  Services
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <Link
                  href="#features"
                  onClick={(e) => handleNavClick(e, "features")}
                  className="px-4 py-2 text-sm font-medium text-[#0A0A0A] transition-colors"
                >
                  Features
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Link
                  href="#blog"
                  onClick={(e) => handleNavClick(e, "blog")}
                  className="px-4 py-2 text-sm font-medium text-[#0A0A0A] transition-colors"
                >
                  Blog
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Link
                  href="#use-cases"
                  onClick={(e) => handleNavClick(e, "use-cases")}
                  className="px-4 py-2 text-sm font-medium text-[#0A0A0A] transition-colors"
                >
                  Use Cases
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Link
                  href="#documentation"
                  onClick={(e) => handleNavClick(e, "documentation")}
                  className="px-4 py-2 text-sm font-medium text-[#0A0A0A] transition-colors"
                >
                  Documentation
                </Link>
              </motion.div>
            </nav>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 lg:gap-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#71717A] p-2 lg:px-4 lg:py-2.5 text-sm font-medium border border-[#E4E4E7] rounded-lg transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1377_307690)">
                    <path
                      d="M7.99286 0.219643C3.57679 0.217858 0 3.79286 0 8.20536C0 11.6946 2.2375 14.6607 5.35357 15.75C5.77321 15.8554 5.70893 15.5571 5.70893 15.3536V13.9696C3.28571 14.2536 3.1875 12.65 3.025 12.3821C2.69643 11.8214 1.91964 11.6786 2.15179 11.4107C2.70357 11.1268 3.26607 11.4821 3.91786 12.4446C4.38929 13.1429 5.30893 13.025 5.775 12.9089C5.87679 12.4893 6.09464 12.1143 6.39464 11.8232C3.88393 11.3732 2.8375 9.84107 2.8375 8.01964C2.8375 7.13571 3.12857 6.32322 3.7 5.66786C3.33571 4.5875 3.73393 3.6625 3.7875 3.525C4.825 3.43214 5.90357 4.26786 5.9875 4.33393C6.57679 4.175 7.25 4.09107 8.00357 4.09107C8.76071 4.09107 9.43571 4.17857 10.0304 4.33929C10.2321 4.18571 11.2321 3.46786 12.1964 3.55536C12.2482 3.69286 12.6375 4.59643 12.2946 5.6625C12.8732 6.31964 13.1679 7.13929 13.1679 8.025C13.1679 9.85 12.1143 11.3839 9.59643 11.8268C9.81209 12.0389 9.98333 12.2918 10.1001 12.5708C10.217 12.8498 10.277 13.1493 10.2768 13.4518V15.4607C10.2911 15.6214 10.2768 15.7804 10.5446 15.7804C13.7071 14.7143 15.9839 11.7268 15.9839 8.20714C15.9839 3.79286 12.4054 0.219643 7.99286 0.219643Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1377_307690">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="hidden lg:block text-[13px] lg:text-sm">99.4k</p>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                target="_blank"
                className="inline-flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-3 py-2 lg:px-4 lg:py-2.5 text-[13px] lg:text-sm font-medium rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/10 backdrop-blur-sm border border-white/20 border-t-0 rounded-b-xl shadow-sm mx-4 sm:mx-6 lg:mx-8"
          >
            <div className="px-4 py-2 space-y-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className="block py-2 text-body font-normal text-gray-900 hover:text-gray-600"
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <Link
                  href="#features"
                  onClick={(e) => handleNavClick(e, "features")}
                  className="block py-2 text-body font-normal text-gray-900 hover:text-gray-600"
                >
                  Features
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link
                  href="#blog"
                  onClick={(e) => handleNavClick(e, "blog")}
                  className="block py-2 text-body font-normal text-gray-900 hover:text-gray-600"
                >
                  Blog
                </Link>
              </motion.div>
              <div className="pt-4 flex flex-col space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  <Link
                    href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                    target="_blank"
                    className="inline-flex items-center justify-center bg-white/70 text-gray-800 px-5 py-2 text-body font-normal border border-gray-200 rounded-full transition-colors hover:bg-white w-full"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Github
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Link
                    href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                    target="_blank"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-700 text-white px-5 py-2 text-body font-normal rounded-full transition-colors w-full"
                  >
                    <Book className="w-4 h-4 mr-2" />
                    Docs
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
