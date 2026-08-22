/**
 * About section: personal background, philosophy, and a decorative
 * stacked-books illustration on desktop.
 *
 * @component
 * @returns {JSX.Element}
 */
'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/Common/SectionHeading';
import { containerVariants, itemVariants, scrollFadeInVariants } from '@/lib/animations';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollFadeInVariants}
        >
          <SectionHeading title="About" subtitle="My journey in tech and beyond" />

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.p variants={itemVariants} className="text-slate-200 text-lg leading-relaxed">
                I&apos;m a third-year computer science student at Epitech Paris, where I&apos;ve learned that great software isn&apos;t just about elegant code, it&apos;s about understanding the problem deeply and communicating solutions clearly.
              </motion.p>

              <motion.p variants={itemVariants} className="text-slate-200 text-lg leading-relaxed">
                My interests span full-stack web development, system design, and exploring how technology can solve real-world problems. I believe in writing clean, maintainable code and always seeking to understand the &quot;why&quot; behind technical decisions.
              </motion.p>

              <motion.p variants={itemVariants} className="text-slate-200 text-lg leading-relaxed">
                Beyond coding, I&apos;m an avid reader and writer. I find that both disciplines sharpen my ability to think critically and express ideas precisely, skills that directly translate to better programming.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="relative w-full h-80">
                <div className="absolute inset-0 flex items-end justify-center gap-3">
                  <div className="w-16 h-40 bg-gradient-to-b from-rose-900 to-rose-950 rounded-lg shadow-2xl transform -rotate-3" />
                  <div className="w-16 h-48 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg shadow-2xl" />
                  <div className="w-16 h-44 bg-gradient-to-b from-teal-800 to-teal-900 rounded-lg shadow-2xl transform rotate-2" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
