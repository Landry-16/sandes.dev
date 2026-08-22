/**
 * Main Portfolio component, orchestrates navigation and all page sections.
 *
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * Owns the active-section state used to highlight the current nav item and
 * to drive smooth scrolling, then renders each section in order.
 */
'use client';

import { useState, useCallback } from 'react';
import Navigation from '@/components/Navigation/Navigation';
import HeroSection from '@/components/Sections/HeroSection';
import AboutSection from '@/components/Sections/AboutSection';
import ProjectsSection from '@/components/Sections/ProjectsSection';
import SkillsSection from '@/components/Sections/SkillsSection';
import ContactSection from '@/components/Sections/ContactSection';
import AnimatedBackgroundBlobs from '@/components/Common/AnimatedBackgroundBlobs';

const AMBIENT_BLOBS = [{ className: 'top-1/4 right-1/4 w-1/3 h-1/3 bg-amber-900/20', duration: 25 }];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  /**
   * Sets the active section and smooth-scrolls it into view.
   * @param {string} sectionId - The section id to navigate to
   */
  const handleNavigation = useCallback((sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleCTA = useCallback(() => {
    handleNavigation('projects');
  }, [handleNavigation]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-teal-950 text-slate-100 font-serif overflow-x-hidden relative">
      <Navigation activeSection={activeSection} onNavigate={handleNavigation} />

      <main className="relative z-10">
        <HeroSection onCTA={handleCTA} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <div className="fixed inset-0 pointer-events-none z-0">
        <AnimatedBackgroundBlobs blobs={AMBIENT_BLOBS} />
      </div>
    </div>
  );
}
