"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

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
    <header
      className={`sticky top-0 z-50 w-full py-4 transition-all duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-full shadow-sm px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4L4 10L16 16L28 10L16 4Z"
                  fill="#E6EEFF"
                  stroke="#4D63F6"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 22L16 28L28 22"
                  stroke="#4D63F6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 16L16 22L28 16"
                  stroke="#4D63F6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-lg font-semibold text-gray-900">PayAI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#preview"
              onClick={(e) => handleNavClick(e, "preview")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Preview
            </Link>
            <Link
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, "how-it-works")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="#use-cases"
              onClick={(e) => handleNavClick(e, "use-cases")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="#tokenomics"
              onClick={(e) => handleNavClick(e, "tokenomics")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Tokenomics
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
              target="_blank"
              className="inline-flex items-center justify-center bg-white text-gray-800 px-5 py-2 text-sm font-medium border border-gray-200 rounded-md transition-colors hover:bg-gray-50"
            >
              Docs
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_BUY_TOKEN_URL || "#"}
              target="_blank"
              className="inline-flex items-center justify-center bg-[#4D63F6] hover:bg-[#3A50E3] text-white px-5 py-2 text-sm font-medium rounded-md transition-colors"
            >
              Buy
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="px-4 py-2 space-y-1">
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="block py-2 text-base font-medium text-gray-900 hover:text-gray-600"
            >
              Home
            </Link>
            <Link
              href="#preview"
              onClick={(e) => handleNavClick(e, "preview")}
              className="block py-2 text-base font-medium text-gray-900 hover:text-gray-600"
            >
              Preview
            </Link>
            <Link
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, "how-it-works")}
              className="block py-2 text-base font-medium text-gray-900 hover:text-gray-600"
            >
              How it Works
            </Link>
            <Link
              href="#use-cases"
              onClick={(e) => handleNavClick(e, "use-cases")}
              className="block py-2 text-base font-medium text-gray-900 hover:text-gray-600"
            >
              Use Cases
            </Link>
            <Link
              href="#tokenomics"
              onClick={(e) => handleNavClick(e, "tokenomics")}
              className="block py-2 text-base font-medium text-gray-900 hover:text-gray-600"
            >
              Tokenomics
            </Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Link
                href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                target="_blank"
                className="inline-flex items-center justify-center bg-white text-gray-800 px-5 py-2 text-sm font-medium border border-gray-200 rounded-md transition-colors hover:bg-gray-50 w-full"
              >
                Docs
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_BUY_TOKEN_URL || "#"}
                target="_blank"
                className="inline-flex items-center justify-center bg-[#4D63F6] hover:bg-[#3A50E3] text-white px-5 py-2 text-sm font-medium rounded-md transition-colors w-full"
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
