"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";

export function Navbar1() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-smooth border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-[5%] lg:px-8">
        <div className="flex justify-between items-center min-h-16 lg:min-h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="payai-lettermark.svg"
              alt="PayAI"
              className="h-8 lg:h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-midnight font-medium hover:text-electric-purple transition-colors"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-midnight font-medium hover:text-electric-purple transition-colors"
            >
              Products
            </a>
            <a
              href="#docs"
              className="text-midnight font-medium hover:text-electric-purple transition-colors"
            >
              Docs
            </a>
            <a
              href="#blog"
              className="text-midnight font-medium hover:text-electric-purple transition-colors"
            >
              Blog
            </a>
            <a
              href="#community"
              className="text-midnight font-medium hover:text-electric-purple transition-colors"
            >
              Community
            </a>
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              title="Docs"
              variant="secondary"
              size="sm"
              onClick={() =>
                window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank")
              }
            >
              Docs
            </Button>
            <Button
              title="GitHub"
              size="sm"
              className="bg-midnight"
              onClick={() =>
                window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")
              }
            >
              GitHub
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center px-2 py-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-midnight"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path path="M4 6h16M4 10h16M4 14h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
