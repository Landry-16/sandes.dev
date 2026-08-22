/**
 * Contact section: closing call-to-action, social links, and footer note.
 *
 * @component
 * @returns {JSX.Element}
 */
'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/Common/SectionHeading';
import SocialLink from '@/components/Common/SocialLink';
import { containerVariants, itemVariants, scrollFadeInVariants } from '@/lib/animations';
import { SOCIAL_LINKS, SITE_METADATA } from '@/lib/constants';

export default function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="max-w-2xl mx-auto px-6 w-full text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollFadeInVariants}
        >
          <SectionHeading
            title="Get in Touch"
            subtitle="Let's talk code, books, and ideas"
            className="flex flex-col items-center text-center"
          />

          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-slate-400 text-lg mt-6 mb-12 leading-relaxed"
          >
            I&apos;m always interested in hearing about new opportunities, interesting projects, or just chatting about code, books, and ideas.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-12"
          >
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.id} link={link} />
            ))}
          </motion.div>

          <p className="text-slate-500 text-sm">
            &copy; {year} {SITE_METADATA.name}. Built with React, Next.js, and a love for clean code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
