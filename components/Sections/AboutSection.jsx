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
    <section id="about" className="min-h-screen flex items-center py-32 relative">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollFadeInVariants}
        >
          <SectionHeading title="About" subtitle="My journey in tech and beyond" />

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.p variants={itemVariants} className="text-text text-lg leading-relaxed">
                I&apos;m a third-year computer science student at Epitech Paris, where I&apos;ve learned that great software isn&apos;t just about elegant code, it&apos;s about understanding the problem deeply and communicating solutions clearly.
              </motion.p>

              <motion.p variants={itemVariants} className="text-text text-lg leading-relaxed">
                My interests span full-stack web development, system design, and exploring how technology can solve real-world problems. I believe in writing clean, maintainable code and always seeking to understand the &quot;why&quot; behind technical decisions.
              </motion.p>

              <motion.p variants={itemVariants} className="text-text text-lg leading-relaxed">
                Beyond coding, I&apos;m an avid reader and writer. I find that both disciplines sharpen my ability to think critically and express ideas precisely, skills that directly translate to better programming.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="relative w-full h-96">
                <div className="absolute inset-0 flex items-end justify-center gap-3">
                  <motion.div
                    animate={{ rotateZ: -3 }}
                    className="w-20 h-48 bg-gradient-to-b from-rose-900 to-rose-950 rounded-lg shadow-2xl"
                  />
                  <motion.div
                    animate={{ rotateZ: 0 }}
                    className="w-20 h-56 bg-gradient-to-b from-accent to-pink-900 rounded-lg shadow-2xl"
                  />
                  <motion.div
                    animate={{ rotateZ: 3 }}
                    className="w-20 h-52 bg-gradient-to-b from-pink-800 to-rose-900 rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
