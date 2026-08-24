"use client";
import { useId, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

/**
 * Disclosure item for the homepage FAQ.
 *
 * The answer is always mounted and collapsed with height animation rather than
 * conditionally rendered. Conditional mounting kept every answer out of the
 * server-rendered HTML, so crawlers and AI agents saw six questions and no
 * answers.
 */
export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonId = `${panelId}-button`;

  return (
    <div className="w-full border-b border-[#E4E4E7] py-3 lg:py-5">
      <button
        id={buttonId}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-sm lg:text-xl font-medium text-[#09090B]">
          {question}
        </span>
        <span className="text-black">{open ? <Minus /> : <Plus />}</span>
      </button>

      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        /*
         * Mounted always so the answers reach the server-rendered HTML, but
         * hidden from assistive tech while collapsed so screen readers match
         * what is on screen.
         */
        aria-hidden={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="pt-3 lg:pt-4 text-[13px] lg:text-base text-[#0A0A0A]/60">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}
