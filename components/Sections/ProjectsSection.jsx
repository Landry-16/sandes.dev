/**
 * Projects section: showcases each project as a ProjectCard.
 *
 * @component
 * @returns {JSX.Element}
 */
'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/Common/SectionHeading';
import ProjectCard from '@/components/Common/ProjectCard';
import { containerVariants, scrollFadeInVariants } from '@/lib/animations';
import { PROJECTS } from '@/lib/constants';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollFadeInVariants}
        >
          <SectionHeading title="Projects" subtitle="Work I'm proud of" />

          <motion.div
            className="grid md:grid-cols-1 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
