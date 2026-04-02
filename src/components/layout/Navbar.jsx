"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Book, ArrowRight, ChevronDown, Share2, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function formatCount(n) {
  if (n == null) return null;
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return String(n);
}

export function Navbar({ activePage = "home" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(activePage);
  const [followerCount, setFollowerCount] = useState(null);
  const isManualNavigation = useRef(false);
  const socialMenuRef = useRef(null);

  useEffect(() => {
    fetch("/api/github-stats")
      .then((res) => res.ok && res.json())
      .then((data) => {
        if (data?.followers != null) setFollowerCount(data.followers);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
      if (activePage !== "home" || isManualNavigation.current) {
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
  }, [activePage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (socialMenuRef.current && !socialMenuRef.current.contains(event.target)) {
        setIsSocialMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsSocialMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
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
                  href={activePage === "home" ? "#home" : "/"}
                  onClick={activePage === "home" ? (e) => handleNavClick(e, "home") : undefined}
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
                  href="/ecosystem"
                  className={`relative h-full flex items-center px-4 text-sm font-medium ${activeSection === "projects" ? "text-[#4D63F6] hover:bg-blue-50" : "text-[#0A0A0A] hover:bg-blue-50 hover:border-b-2 hover:border-[#4D63F6]"}`}
                >
                  {activeSection === "projects" && (
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
                  <span className="relative z-10">Ecosystem</span>
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
                  href={process.env.NEXT_PUBLIC_BLOG_PAYAI_NETWORK || "#"}
                  target="_blank"
                  className="relative h-full flex items-center px-4 text-sm font-medium text-[#0A0A0A] hover:bg-blue-50 hover:border-b-2 hover:border-[#4D63F6]"
                >
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
            <div className="hidden lg:block relative" ref={socialMenuRef}>
              <button
                type="button"
                onClick={() => setIsSocialMenuOpen((prev) => !prev)}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#71717A] px-3 py-2.5 text-sm font-medium border border-[#E4E4E7] rounded-lg transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#FAFAFA]"
                aria-haspopup="menu"
                aria-expanded={isSocialMenuOpen}
                aria-label="Open social links"
              >
                <Share2 className="w-4 h-4" />
                Social
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isSocialMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isSocialMenuOpen && (
                <div className="absolute right-0 mt-2 z-50 w-[368px] rounded-xl border border-[#E4E4E7] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.1)] p-3">
                  <div className="grid grid-cols-6 gap-2">
                    <Link
                      href={process.env.NEXT_PUBLIC_X_URL || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="PayAI X"
                      className="h-10 w-10 rounded-lg border border-[#E4E4E7] flex items-center justify-center hover:bg-[#F8FAFF]"
                    >
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_nav_x" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                          <path d="M20 0H0V20H20V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_nav_x)">
                          <path
                            d="M11.5133 8.75562L17.4327 1.875H16.0302L10.8902 7.84938L6.78515 1.875H2.05078L8.25828 10.9094L2.05078 18.125H3.45328L8.88078 11.8156L13.2158 18.125H17.9508L11.5133 8.75562ZM9.59203 10.9888L8.96328 10.0894L3.9589 2.93125H6.11328L10.152 8.70812L10.7808 9.6075L16.0308 17.1169H13.8764L9.59203 10.9888Z"
                            fill="black"
                          />
                        </g>
                      </svg>
                    </Link>
                    <Link
                      href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="PayAI LinkedIn"
                      className="h-10 w-10 rounded-lg border border-[#E4E4E7] flex items-center justify-center hover:bg-[#F8FAFF]"
                    >
                      <svg width="16" height="16" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.4595 11.5714V18.889H8.06641V6.24428H11.2672L11.3238 9.39982H11.1202C11.452 8.3442 11.9534 7.52987 12.6244 6.95682C13.3031 6.37623 14.1777 6.08594 15.2484 6.08594C16.1231 6.08594 16.8846 6.27821 17.5331 6.66275C18.189 7.03976 18.6942 7.58642 19.0486 8.30273C19.4105 9.0115 19.5915 9.85977 19.5915 10.8475V18.889H16.1985V11.4356C16.1985 10.6515 15.9949 10.0369 15.5877 9.59209C15.1881 9.14722 14.6301 8.92479 13.9138 8.92479C13.4388 8.92479 13.0128 9.03035 12.6358 9.24148C12.2663 9.44506 11.976 9.74289 11.7649 10.135C11.5613 10.5271 11.4595 11.0059 11.4595 11.5714Z"
                          fill="black"
                        />
                        <path
                          d="M1.77748 18.889V6.24419H5.17054V18.889H1.77748ZM3.47401 4.59291C2.96128 4.59291 2.52395 4.42325 2.16203 4.08396C1.8001 3.74465 1.61914 3.33371 1.61914 2.85115C1.61914 2.36858 1.8001 1.95764 2.16203 1.61834C2.52395 1.27903 2.96128 1.10938 3.47401 1.10938C3.98674 1.10938 4.42406 1.27903 4.78599 1.61834C5.15546 1.95009 5.34019 2.36103 5.34019 2.85115C5.34019 3.33371 5.15546 3.74465 4.78599 4.08396C4.42406 4.42325 3.98674 4.59291 3.47401 4.59291Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                    <Link
                      href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="PayAI GitHub"
                      className="col-span-2 h-10 rounded-lg border border-[#E4E4E7] px-2 inline-flex items-center justify-center gap-1.5 hover:bg-[#F8FAFF]"
                    >
                      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.75003 0C13.5844 0 17.5 3.91562 17.5 8.75006C17.4988 12.5094 15.1006 15.8494 11.5394 17.0513C11.1019 17.1388 10.9375 16.8651 10.9375 16.6357C10.9375 16.3401 10.9488 15.3994 10.9488 14.2294C10.9488 13.4094 10.6756 12.8844 10.3581 12.6107C12.305 12.3919 14.3506 11.6482 14.3506 8.29062C14.3506 7.32812 14.0113 6.55125 13.4538 5.93937C13.5413 5.72062 13.8475 4.82375 13.3663 3.62062C13.3663 3.62062 12.6331 3.38 10.96 4.5175C10.26 4.32062 9.51633 4.2225 8.77253 4.2225C8.02875 4.2225 7.285 4.32062 6.585 4.5175C4.91188 3.39125 4.17875 3.62062 4.17875 3.62062C3.6975 4.82375 4.00375 5.72062 4.09125 5.93937C3.53375 6.55187 3.19438 7.33937 3.19438 8.29062C3.19438 11.6376 5.22875 12.3926 7.17563 12.6113C6.92375 12.8301 6.69438 13.2132 6.6175 13.7813C6.11438 14.0113 4.85625 14.3832 4.06938 13.0594C3.905 12.7969 3.41313 12.1519 2.72438 12.1626C1.99125 12.1738 2.42938 12.5782 2.735 12.7419C3.10688 12.9494 3.53313 13.7263 3.63188 13.9782C3.80688 14.4701 4.37563 15.4113 6.57375 15.0063C6.57375 15.7394 6.585 16.4282 6.585 16.6357C6.585 16.8657 6.42063 17.1276 5.98313 17.0513C2.40875 15.8613 -0.00186891 12.5169 1.0872e-06 8.74936C1.0872e-06 3.915 3.91563 0 8.75003 0Z"
                          fill="black"
                        />
                      </svg>
                      {followerCount != null && (
                        <span className="text-[12px] leading-none text-[#71717A]">
                          {formatCount(followerCount)}
                        </span>
                      )}
                    </Link>
                    <Link
                      href={process.env.NEXT_PUBLIC_TELEGRAM_URL || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="PayAI Telegram"
                      className="h-10 w-10 rounded-lg border border-[#E4E4E7] flex items-center justify-center hover:bg-[#F8FAFF]"
                    >
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.8813 2.04595C17.7844 1.96233 17.6666 1.90672 17.5405 1.88511C17.4144 1.86349 17.2848 1.8767 17.1656 1.92329L1.33283 8.11939C1.10844 8.20664 0.91847 8.36443 0.791518 8.56899C0.664565 8.77355 0.607501 9.01382 0.628917 9.25362C0.650332 9.49342 0.749068 9.71977 0.910259 9.8986C1.07145 10.0774 1.28637 10.1991 1.52267 10.2452L5.62501 11.0506V15.6249C5.62421 15.874 5.69825 16.1177 5.83755 16.3242C5.97684 16.5308 6.17498 16.6908 6.40626 16.7835C6.6372 16.8778 6.89116 16.9004 7.13513 16.8484C7.37909 16.7964 7.60178 16.6723 7.77423 16.492L9.75236 14.4405L12.8906 17.1874C13.1171 17.3882 13.4091 17.4993 13.7117 17.4999C13.8444 17.4998 13.9762 17.4789 14.1024 17.4381C14.3086 17.3727 14.494 17.2544 14.6403 17.095C14.7865 16.9356 14.8885 16.7406 14.936 16.5295L18.107 2.73423C18.1354 2.60982 18.1294 2.48003 18.0896 2.35878C18.0498 2.23753 17.9778 2.12939 17.8813 2.04595ZM13.1047 4.85845L6.10548 9.87095L2.23048 9.11079L13.1047 4.85845ZM6.87501 15.6249V11.9155L8.81173 13.6139L6.87501 15.6249ZM13.7133 16.2499L7.25392 10.5858L16.5508 3.92251L13.7133 16.2499Z"
                          fill="#09090B"
                        />
                      </svg>
                    </Link>
                    <Link
                      href={process.env.NEXT_PUBLIC_DOCS_PAYAI_NETWORK || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="PayAI Docs"
                      className="h-10 w-10 rounded-lg border border-[#E4E4E7] flex items-center justify-center hover:bg-[#F8FAFF]"
                    >
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M18.125 3.75H12.5C12.0149 3.75 11.5364 3.86295 11.1025 4.07991C10.6685 4.29688 10.2911 4.61189 10 5C9.70892 4.61189 9.33147 4.29688 8.89754 4.07991C8.46362 3.86295 7.98514 3.75 7.5 3.75H1.875C1.70924 3.75 1.55027 3.81585 1.43306 3.93306C1.31585 4.05027 1.25 4.20924 1.25 4.375V15.625C1.25 15.7908 1.31585 15.9497 1.43306 16.0669C1.55027 16.1842 1.70924 16.25 1.875 16.25H7.5C7.99728 16.25 8.47419 16.4475 8.82583 16.7992C9.17746 17.1508 9.375 17.6277 9.375 18.125C9.375 18.2908 9.44085 18.4497 9.55806 18.5669C9.67527 18.6842 9.83424 18.75 10 18.75C10.1658 18.75 10.3247 18.6842 10.4419 18.5669C10.5592 18.4497 10.625 18.2908 10.625 18.125C10.625 17.6277 10.8225 17.1508 11.1742 16.7992C11.5258 16.4475 12.0027 16.25 12.5 16.25H18.125C18.2908 16.25 18.4497 16.1842 18.5669 16.0669C18.6842 15.9497 18.75 15.7908 18.75 15.625V4.375C18.75 4.20924 18.6842 4.05027 18.5669 3.93306C18.4497 3.81585 18.2908 3.75 18.125 3.75ZM7.5 15H2.5V5H7.5C7.99728 5 8.47419 5.19754 8.82583 5.54917C9.17746 5.90081 9.375 6.37772 9.375 6.875V15.625C8.83458 15.2183 8.17633 14.9989 7.5 15ZM17.5 15H12.5C11.8237 14.9989 11.1654 15.2183 10.625 15.625V6.875C10.625 6.37772 10.8225 5.90081 11.1742 5.54917C11.5258 5.19754 12.0027 5 12.5 5H17.5V15Z"
                          fill="#09090B"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#E4E4E7]">
                    <Link
                      href={process.env.NEXT_PUBLIC_DISCORD_URL || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#0A0A0A] hover:text-[#1D45D8] inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Join Dev Discord
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
                  href={activePage === "home" ? "#home" : "/"}
                  onClick={activePage === "home" ? (e) => handleNavClick(e, "home") : undefined}
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
                  href="/ecosystem"
                  className={`block py-2 px-3 rounded-lg text-body font-normal transition-all duration-300 ${
                    activeSection === "projects"
                      ? "bg-[#F5F5F5] text-[#4D63F6] font-medium"
                      : "text-gray-900 hover:text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Ecosystem
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="h-full"
              >
                <Link
                  href={process.env.NEXT_PUBLIC_BLOG_PAYAI_NETWORK || "#"}
                  target="_blank"
                  className="block py-2 px-3 rounded-lg text-body font-normal transition-all duration-300 text-gray-900 hover:text-gray-600 hover:bg-gray-50"
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
