/**
 * Single navigation button with an animated active-state underline.
 *
 * @component
 * @param {Object} props
 * @param {import('@/lib/constants').NavItem} props.item - Nav item data
 * @param {boolean} props.isActive - Whether this item is the active section
 * @param {() => void} props.onClick - Called when the item is clicked
 * @returns {JSX.Element}
 *
 * @example
 * <NavLink item={item} isActive={activeSection === item.id} onClick={() => onNavigate(item.id)} />
 */
'use client';

import { motion } from 'framer-motion';

export default function NavLink({ item, isActive, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className={`text-sm font-medium uppercase tracking-wider transition-colors relative ${
        isActive ? 'text-amber-300' : 'text-slate-400 hover:text-amber-200'
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-current={isActive ? 'true' : undefined}
    >
      {item.label}

      {isActive && (
        <motion.div
          layoutId="activeUnderline"
          className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full"
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}
