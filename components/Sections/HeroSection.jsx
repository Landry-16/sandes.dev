/**
 * Hero/landing section with the introduction, CTA, and ambient background.
 *
 * @component
 * @param {Object} props
 * @param {() => void} props.onCTA - Called when the "View My Work" button is clicked
 * @returns {JSX.Element}
 */
'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';
import AnimatedBackgroundBlobs from '@/components/Common/AnimatedBackgroundBlobs';

const HERO_BLOBS = [
  { className: 'top-10 left-10 w-96 h-96 bg-amber-900/40', duration: 15 },
  { className: 'bottom-10 right-10 w-96 h-96 bg-teal-900/20', duration: 20, delay: 1 },
];

export default function HeroSection({ onCTA }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <AnimatedBackgroundBlobs blobs={HERO_BLOBS} />

      <motion.div
        className="relative z-10 text-center max-w-3xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-amber-300/80 text-sm uppercase tracking-[0.3em] font-semibold mb-3">
            Welcome to my digital study
          </p>

          <h1 className="text-6xl md:text-7xl font-bold text-amber-50 leading-tight mb-6 font-serif">
            Sandes
          </h1>

          <p className="text-2xl text-amber-200/80 italic font-serif">
            Computer Science Student | Builder | Writer
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-14"
        >
          Third year at Epitech Paris. Passionate about crafting elegant solutions to complex problems, both in code and in prose.
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={onCTA}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-accent to-amber-400 text-teal-950 font-bold text-lg rounded-xl hover:from-amber-400 hover:to-amber-300 transition-all shadow-lg hover:shadow-glow-lg"
        >
          View My Work
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="w-7 h-11 border-2 border-amber-400/50 rounded-full flex items-center justify-center hover:border-amber-300 transition-colors">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-1.5 h-2.5 bg-amber-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
