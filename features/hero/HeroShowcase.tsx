'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const PIPELINE_STEPS = ['HL7 v2', 'Transform', 'FHIR R4'];

const STATS = [
  { value: '4 yrs', label: 'Experience' },
  { value: '90%', label: 'Faster interface builds' },
  { value: '100+', label: 'React components' },
];

function floatTransition(duration: number, delay = 0) {
  return { duration, delay, repeat: Infinity, ease: 'easeInOut' as const };
}

/**
 * Hero illustration shown when no portrait photo is configured (siteConfig.images.heroPortrait).
 * Three floating product cards sketch the work: an integration pipeline, an AI agent
 * conversation and headline numbers.
 */
export function HeroShowcase() {
  return (
    <div
      className="relative w-[460px] h-[430px] shrink-0 scale-[0.66] min-[400px]:scale-75 sm:scale-90 xl:scale-110"
      aria-hidden="true"
    >
      {/* Card 1: Integration pipeline */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={floatTransition(6)}
        className="absolute top-0 left-0 w-[300px] -rotate-3 rounded-2xl border border-border/80 bg-card/95 p-5 shadow-2xl backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Integration Pipeline
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Deployed
          </span>
        </div>

        <div className="mt-4 flex items-center gap-1.5">
          {PIPELINE_STEPS.map((step, index) => (
            <React.Fragment key={step}>
              {index > 0 && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#8B5CF6]" />}
              <span className="rounded-lg border border-border bg-muted/70 px-2.5 py-1.5 font-mono text-[11px] font-semibold text-foreground whitespace-nowrap">
                {step}
              </span>
            </React.Fragment>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-1.5">
          <span className="h-1.5 w-full rounded-full bg-muted" />
          <span className="h-1.5 w-2/3 rounded-full bg-muted" />
        </div>
      </motion.div>

      {/* Card 2: AI agent conversation */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={floatTransition(7, 0.4)}
        className="absolute top-[150px] right-0 w-[290px] rotate-2 rounded-2xl border border-white/10 bg-[#171717] p-5 text-white shadow-2xl"
      >
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
          <Sparkles className="h-3.5 w-3.5 text-[#a78bfa]" />
          AI Agent
        </div>

        <div className="mt-3 flex flex-col gap-2.5">
          <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#8B5CF6] px-3 py-2 text-xs leading-snug">
            Create an ADT feed from HL7 v2 to FHIR R4
          </p>
          <p className="flex max-w-[90%] items-start gap-2 rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-xs leading-snug text-neutral-200">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
            Flow validated. Ready to deploy.
          </p>
        </div>
      </motion.div>

      {/* Card 3: Headline numbers */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={floatTransition(5.5, 0.8)}
        className="absolute bottom-0 left-[30px] w-[340px] -rotate-1 rounded-2xl border border-border/80 bg-card/95 p-5 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-3 gap-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-2xl font-bold tracking-tight text-[#8B5CF6] dark:text-[#a78bfa]">
                {stat.value}
              </span>
              <span className="text-[10px] font-medium uppercase leading-tight tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default HeroShowcase;
