"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InfiniteLogoScroll({ data }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...data, ...data].map((partner, i) => (
          <div
            key={i}
            className="relative w-[178px] h-[58px] flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={partner.src}
              alt={partner.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
