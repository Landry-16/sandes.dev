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
  const isExternal = !href.startsWith('mailto:');

  return (
    <motion.a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-pink-400 flex items-center justify-center text-black hover:from-pink-300 hover:to-pink-400 hover:shadow-xl hover:shadow-accent/30 transition-all"
      aria-label={ariaLabel}
      title={name}
    >
      {Icon && <Icon className="w-6 h-6" aria-hidden="true" />}
    </motion.a>
  );
}
