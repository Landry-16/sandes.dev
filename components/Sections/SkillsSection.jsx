/**
 * Skills section: technical skills grouped into SkillCategory cards.
 *
 * @component
 * @returns {JSX.Element}
 */
'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/Common/SectionHeading';
import SkillCategory from '@/components/Common/SkillCategory';
import { containerVariants, scrollFadeInVariants } from '@/lib/animations';
import { SKILLS } from '@/lib/constants';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollFadeInVariants}
        >
          <SectionHeading title="Skills" subtitle="Technologies & tools" />

          <motion.div
            className="grid md:grid-cols-2 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Object.entries(SKILLS).map(([key, category]) => (
              <SkillCategory key={key} category={category} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
