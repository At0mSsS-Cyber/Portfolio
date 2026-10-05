"use client";

import { motion } from "framer-motion";

interface MascotFloatProps {
  /** Tailwind width/height classes for responsive sizing */
  sizeClassName?: string;
  className?: string;
}

/**
 * Floating mascot: an original little robot drawn inline as SVG, a nod to the
 * AI agent work. Sits on the dark footer and menu panels.
 */
export function MascotFloat({
  sizeClassName = "w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36",
  className = "",
}: MascotFloatProps) {
  return (
    <motion.div
      className={`relative drop-shadow-[0_8px_24px_rgba(255,255,255,0.15)] ${sizeClassName} ${className}`}
      // Main floating bob — slow, dreamy up-and-down
      animate={{
        y: [0, -14, 0, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Slight tilt / sway layered on top */}
      <motion.div
        className="w-full h-full"
        animate={{
          rotate: [-3, 3, -2, 4, -3],
          x: [0, 5, -3, 4, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Subtle scale "breathing" */}
        <motion.div
          className="w-full h-full"
          animate={{
            scale: [1, 1.04, 1, 1.02, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            className="w-full h-full pointer-events-none select-none"
            role="img"
            aria-label="Friendly robot mascot"
          >
            {/* Antenna */}
            <line x1="60" y1="22" x2="60" y2="11" stroke="#d4d4d8" strokeWidth="3" strokeLinecap="round" />
            <circle cx="60" cy="8" r="5" fill="#8B5CF6" />

            {/* Ears */}
            <rect x="16" y="40" width="9" height="16" rx="3" fill="#8B5CF6" />
            <rect x="95" y="40" width="9" height="16" rx="3" fill="#8B5CF6" />

            {/* Head */}
            <rect x="24" y="22" width="72" height="52" rx="18" fill="#f4f4f5" />
            <rect x="33" y="31" width="54" height="34" rx="12" fill="#18181b" />

            {/* Face */}
            <circle cx="48" cy="46" r="5" fill="#a78bfa" />
            <circle cx="72" cy="46" r="5" fill="#a78bfa" />
            <path d="M 51 56 Q 60 62 69 56" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" />

            {/* Arms */}
            <rect x="25" y="82" width="10" height="20" rx="5" fill="#d4d4d8" />
            <rect x="85" y="82" width="10" height="20" rx="5" fill="#d4d4d8" />

            {/* Body */}
            <rect x="38" y="78" width="44" height="32" rx="12" fill="#f4f4f5" />
            <circle cx="60" cy="93" r="6" fill="#8B5CF6" />
            <circle cx="60" cy="93" r="2.5" fill="#f4f4f5" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default MascotFloat;
