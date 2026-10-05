'use client';

import React from 'react';
import { siteConfig } from '@/config/site.config';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * Scalable SVG Logo (AT Monogram).
 * Built with responsive color tokens matching both Light and Dark modes.
 */
export function Logo({ className = '', size, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 100"
      fill="currentColor"
      className={`text-[#8B5CF6] dark:text-[#a78bfa] hover:brightness-110 dark:drop-shadow-[0_0_15px_rgba(167,139,250,0.35)] transition-all duration-300 ${className}`}
      style={size ? { width: size, height: 'auto' } : undefined}
      aria-label={`${siteConfig.fullName} Logo`}
      {...props}
    >
      {/* A: open chevron with a crossbar */}
      <path d="M 0 100 L 38 0 L 62 0 L 100 100 L 76 100 L 50 30 L 24 100 Z" />
      <path d="M 37.4 64 L 62.6 64 L 67.8 78 L 32.2 78 Z" />
      {/* T: slanted top bar with a centred stem */}
      <path d="M 104 0 L 200 0 L 200 22 L 166 22 L 166 100 L 142 100 L 142 22 L 112 22 Z" />
    </svg>
  );
}

export default Logo;
