/**
 * Project card, displays one project with its tags and external links.
 *
 * @component
 * @param {Object} props
 * @param {import('@/lib/constants').Project} props.project - Project data
 * @returns {JSX.Element}
 *
 * @example
 * <ProjectCard project={project} />
 *
 * @accessibility
 * Link icons carry descriptive aria-labels; placeholder links ('#') are
 * hidden rather than rendered as dead links.
 */
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { itemVariants } from '@/lib/animations';

export default function ProjectCard({ project }) {
  const { title, description, tags, link, github } = project;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="card group p-8 backdrop-blur-sm hover:border-accent/50 hover:shadow-xl hover:shadow-accent/30 transition-colors transition-shadow duration-300"
    >
      <div className="flex justify-between items-start mb-4 gap-4">
        <h3 className="text-2xl font-bold text-light group-hover:text-accent transition-colors flex-1">
          {title}
        </h3>

        <div className="flex gap-3 flex-shrink-0">
          {link && link !== '#' && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textMuted hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-lg"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}

          {github && github !== '#' && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textMuted hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-lg"
              aria-label={`View ${title} source code`}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <p className="text-text text-base leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 bg-accent/10 border border-accent/30 text-accent text-sm rounded-lg hover:bg-accent/20 transition-all"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
