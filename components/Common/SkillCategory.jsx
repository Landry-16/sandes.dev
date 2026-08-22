/**
 * Skill category card, lists the skills for one category.
 *
 * @component
 * @param {Object} props
 * @param {import('@/lib/constants').SkillCategory} props.category - Skill category data
 * @returns {JSX.Element}
 *
 * @example
 * <SkillCategory category={SKILLS.frontend} />
 */
'use client';

import { motion } from 'framer-motion';
import { itemVariants } from '@/lib/animations';

export default function SkillCategory({ category }) {
  const { name, items } = category;

  return (
    <motion.div
      variants={itemVariants}
      className="card p-6 hover:border-accent/40 transition-colors"
    >
      <h3 className="text-xl font-bold text-accent mb-4">{name}</h3>

      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-2 bg-accent/10 border border-accent/30 text-text text-sm rounded-lg hover:bg-accent/20 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
