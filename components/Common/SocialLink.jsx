/**
 * Single social/contact icon link with hover and tap feedback.
 *
 * @component
 * @param {Object} props
 * @param {import('@/lib/constants').SocialLinkData} props.link - Social link data
 * @returns {JSX.Element}
 *
 * @example
 * <SocialLink link={SOCIAL_LINKS[0]} />
 *
 * @accessibility
 * Renders an accessible name via aria-label rather than relying on the icon alone.
 */
'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { itemVariants } from '@/lib/animations';

const ICONS = { Mail, Github, Linkedin };

export default function SocialLink({ link }) {
  const { name, icon, href, ariaLabel } = link;
  const Icon = ICONS[icon];

  return (
    <motion.a
      href={href}
      variants={itemVariants}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-accent to-amber-400 flex items-center justify-center text-teal-950 hover:shadow-glow transition-shadow"
      aria-label={ariaLabel}
      title={name}
    >
      {Icon && <Icon className="w-5 h-5" aria-hidden="true" />}
    </motion.a>
  );
}
