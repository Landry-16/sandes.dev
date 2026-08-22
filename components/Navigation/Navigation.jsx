/**
 * Fixed navigation bar with section links and smooth-scroll behavior.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.activeSection='home'] - Currently active section id
 * @param {(sectionId: string) => void} props.onNavigate - Called with a section id when a link is clicked
 * @returns {JSX.Element}
 *
 * @description
 * Stays pinned to the top of the viewport and highlights whichever section
 * is currently active, sharing a single animated underline between links.
 */
'use client';

import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/constants';
import NavLink from './NavLink';

export default function Navigation({ activeSection = 'home', onNavigate }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-teal-950/95 via-teal-950/90 to-transparent backdrop-blur-xl border-b border-amber-600/20">
      <div className="max-w-4xl mx-auto px-6 py-5 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-amber-100 font-serif"
        >
          sandes
        </motion.div>

        <div className="flex gap-8 sm:gap-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onClick={() => onNavigate(item.id)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
