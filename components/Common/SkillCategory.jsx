/**
 * Skill category card, lists the skills for one category with its icon.
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
import { Code, Palette, Server, Wrench } from 'lucide-react';
import { itemVariants } from '@/lib/animations';

const ICONS = { Code, Palette, Server, Wrench };

export default function SkillCategory({ category }) {
  const { name, description, items, icon } = category;
  const Icon = ICONS[icon];

  return (
    <motion.div
      variants={itemVariants}
      className="card p-6 hover:border-amber-500/40 transition-colors"
    >
      <div className="flex items-center gap-3 mb-1">
        {Icon && <Icon className="w-5 h-5 text-amber-accent" aria-hidden="true" />}
        <h3 className="text-xl font-bold text-amber-200">{name}</h3>
      </div>

      <p className="text-slate-400 text-sm mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-2 bg-amber-900/20 border border-amber-700/40 text-slate-200 text-sm rounded-lg hover:bg-amber-900/40 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
