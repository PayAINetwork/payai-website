"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Book, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isManualNavigation = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
      if (isManualNavigation.current) {
        return;
      }
      const sections = ["home", "features", "services", "use-cases", "blog"];
      const navbarHeight = 72;
      const viewportTop = scrollTop + navbarHeight;
      const threshold = 100;

      let currentActive = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (viewportTop + threshold >= sectionTop) {
            currentActive = sections[i];
            break;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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

    isManualNavigation.current = true;
    setActiveSection(targetId);

    smoothScrollTo(targetId);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    setTimeout(() => {
      isManualNavigation.current = false;
      const scrollTop = window.scrollY;
      const viewportTop = scrollTop + 72 + 150;
      const sections = ["home", "features", "services", "use-cases", "blog"];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && viewportTop >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }, 1500);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, ease: [0.25, 0.25, 0, 1] }}
      className={`sticky top-0 z-50 w-full h-13 py-3 md:py-0 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.1)] ${
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
                className="flex items-center space-x-2 max-h-13 md:py-3"
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
            <nav className="hidden md:flex items-center space-x-2 h-full">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Link
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className={`relative h-full flex items-center px-4 text-sm font-medium ${activeSection === "home" ? "text-[#4D63F6] hover:bg-blue-50" : "text-[#0A0A0A] hover:bg-blue-50 hover:border-b-2 hover:border-[#4D63F6]"}`}
                >
                  {activeSection === "home" && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 border-b-2 border-[#4D63F6]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">Home</span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Link
                  href="#features"
                  onClick={(e) => handleNavClick(e, "features")}
                  className={`relative h-full flex items-center px-4 text-sm font-medium ${activeSection === "features" ? "text-[#4D63F6] hover:bg-blue-50" : "text-[#0A0A0A] hover:bg-blue-50 hover:border-b-2 hover:border-[#4D63F6]"}`}
                >
                  {activeSection === "features" && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 border-b-2 border-[#4D63F6]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">Features</span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Link
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className={`relative h-full flex items-center px-4 text-sm font-medium ${activeSection === "services" ? "text-[#4D63F6] hover:bg-blue-50" : "text-[#0A0A0A] hover:bg-blue-50 hover:border-b-2 hover:border-[#4D63F6]"}`}
                >
                  {activeSection === "services" && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 border-b-2 border-[#4D63F6]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">Services</span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Link
                  href="#use-cases"
                  onClick={(e) => handleNavClick(e, "use-cases")}
                  className={`relative h-full flex items-center px-4 text-sm font-medium ${activeSection === "use-cases" ? "text-[#4D63F6] hover:bg-blue-50" : "text-[#0A0A0A] hover:bg-blue-50 hover:border-b-2 hover:border-[#4D63F6]"}`}
                >
                  {activeSection === "use-cases" && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 border-b-2 border-[#4D63F6]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">Use Cases</span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Link
                  href="#blog"
                  onClick={(e) => handleNavClick(e, "blog")}
                  className={`relative h-full flex items-center px-4 text-sm font-medium ${activeSection === "blog" ? "text-[#4D63F6] hover:bg-blue-50" : "text-[#0A0A0A] hover:bg-blue-50 hover:border-b-2 hover:border-[#4D63F6]"}`}
                >
                  {activeSection === "blog" && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 border-b-2 border-[#4D63F6]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">Blog</span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="h-full"
              >
                <Link
                  href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                  className={`relative h-full flex items-center px-4 text-sm font-medium ${activeSection === "docs" ? "text-[#4D63F6] hover:bg-blue-50" : "text-[#0A0A0A] hover:bg-blue-50 hover:border-b-2 hover:border-[#4D63F6]"}`}
                  target="_blank"
                >
                  Docs
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
                href={process.env.NEXT_PUBLIC_FACILITATOR_URL || "#"}
                target="_blank"
                className="inline-flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] bg-[linear-gradient(90deg,#4D63F6_17%,#4D63F6_65%)] text-white px-3 py-2 lg:px-4 lg:py-2.5 text-[13px] lg:text-sm font-medium rounded-lg transition-colors"
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
                className="h-full"
              >
                <Link
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className={`block py-2 px-3 rounded-lg text-body font-normal transition-all duration-300 ${
                    activeSection === "home"
                      ? "bg-[#F5F5F5] text-[#4D63F6] font-medium"
                      : "text-gray-900 hover:text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="h-full"
              >
                <Link
                  href="#features"
                  onClick={(e) => handleNavClick(e, "features")}
                  className={`block py-2 px-3 rounded-lg text-body font-normal transition-all duration-300 ${
                    activeSection === "features"
                      ? "bg-[#F5F5F5] text-[#4D63F6] font-medium"
                      : "text-gray-900 hover:text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Features
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="h-full"
              >
                <Link
                  href="#use-cases"
                  onClick={(e) => handleNavClick(e, "use-cases")}
                  className={`block py-2 px-3 rounded-lg text-body font-normal transition-all duration-300 ${
                    activeSection === "use-cases"
                      ? "bg-[#F5F5F5] text-[#4D63F6] font-medium"
                      : "text-gray-900 hover:text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Use Cases
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="h-full"
              >
                <Link
                  href="#blog"
                  onClick={(e) => handleNavClick(e, "blog")}
                  className={`block py-2 px-3 rounded-lg text-body font-normal transition-all duration-300 ${
                    activeSection === "blog"
                      ? "bg-[#F5F5F5] text-[#4D63F6] font-medium"
                      : "text-gray-900 hover:text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Blog
                </Link>
              </motion.div>
              <div className="pt-4 flex flex-col space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Link
                    className="inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#4D63F6_65%)] text-white px-3 py-2 lg:px-4 lg:py-2.5 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg transition-colors hover:bg-[#FFFFFF]"
                    href={process.env.NEXT_PUBLIC_FACILITATOR_URL || "#"}
                    target="_blank"
                  >
                    Facilitator
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                >
                  <Link
                    className="inline-flex items-center justify-center  bg-[#FFFFFF]/70 text-[#09090B] px-3 py-2  lg:px-4 lg:py-2.5 text-sm font-medium border border-[#E4E4E7] rounded-lg transition-colors hover:bg-[#FFFFFF] shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                    href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                    target="_blank"
                  >
                    <Book className="w-5 h-5 mr-2 text-[#09090B]" />
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
