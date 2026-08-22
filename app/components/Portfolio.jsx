'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // CUSTOMIZE: Update these projects with your actual projects
  const projects = [
    {
      title: 'Project One',
      description: 'Add your project description here. What problem did it solve? What technologies did you use?',
      tags: ['React', 'TypeScript', 'TailwindCSS'],
      link: '#',
      github: '#',
    },
    {
      title: 'Project Two',
      description: 'Describe your second project. Focus on the technical challenges and your solutions.',
      tags: ['Next.js', 'Node.js', 'PostgreSQL'],
      link: '#',
      github: '#',
    },
    {
      title: 'Project Three',
      description: 'Add details about this project. What did you learn? How does it showcase your skills?',
      tags: ['Python', 'Machine Learning', 'FastAPI'],
      link: '#',
      github: '#',
    },
  ];

  // CUSTOMIZE: Update these skills with your actual technical skills
  const skills = {
    'Languages': ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
    'Frontend': ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    'Backend': ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    'Tools': ['Git', 'Docker', 'Linux', 'VS Code'],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-serif">
      {/* ============ NAVIGATION ============ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-amber-700/20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-amber-100"
          >
            sandes
          </motion.div>

          <div className="flex gap-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm uppercase tracking-widest transition-colors ${
                  activeSection === item
                    ? 'text-amber-300'
                    : 'text-slate-400 hover:text-amber-200'
                }`}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* ============ HERO SECTION ============ */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-900/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="relative z-10 text-center max-w-2xl px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-amber-300 text-sm uppercase tracking-[0.3em] mb-2">
              Welcome to my digital study
            </p>
            {/* CUSTOMIZE: Change "Sandes" to your name */}
            <h1 className="text-6xl md:text-7xl font-bold text-amber-50 leading-tight mb-4">
              Sandes
            </h1>
            <p className="text-xl text-slate-300 italic">
              Computer Science Student | Builder | Writer
            </p>
          </motion.div>

          {/* CUSTOMIZE: Update this introduction */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-12"
          >
            Third year at Epitech Paris. Passionate about crafting elegant solutions to complex problems, both in code and in prose.
          </motion.p>

          <motion.button
            variants={itemVariants}
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold rounded-sm hover:from-amber-500 hover:to-amber-400 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.button>
        </motion.div>

        {/* Scroll indicator animation */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-amber-300/50 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-amber-300 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section
        id="about"
        className="min-h-screen flex items-center py-20 relative"
      >
        <div className="max-w-4xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section heading */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-50 mb-2">
                About
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Text content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* CUSTOMIZE: Update these paragraphs with your story */}
                <motion.p variants={itemVariants} className="text-slate-300 text-lg leading-relaxed mb-6">
                  I&apos;m a third-year computer science student at Epitech Paris, where I&apos;ve learned that great software isn&apos;t just about elegant code, it&apos;s about understanding the problem deeply and communicating solutions clearly.
                </motion.p>

                <motion.p variants={itemVariants} className="text-slate-300 text-lg leading-relaxed mb-6">
                  My interests span full-stack web development, system design, and exploring how technology can solve real-world problems. I believe in writing clean, maintainable code and always seeking to understand the &quot;why&quot; behind technical decisions.
                </motion.p>

                <motion.p variants={itemVariants} className="text-slate-300 text-lg leading-relaxed">
                  Beyond coding, I&apos;m an avid reader and writer. I find that both disciplines sharpen my ability to think critically and express ideas precisely, skills that directly translate to better programming.
                </motion.p>
              </motion.div>

              {/* Decorative books illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden md:flex items-center justify-center"
              >
                <div className="relative w-full h-80">
                  {/* Stacked books effect - dark academia aesthetic */}
                  <div className="absolute inset-0 flex items-end justify-center gap-2">
                    <div className="w-16 h-40 bg-gradient-to-b from-red-900 to-red-950 rounded-sm shadow-lg transform -rotate-3"></div>
                    <div className="w-16 h-48 bg-gradient-to-b from-amber-800 to-amber-900 rounded-sm shadow-lg"></div>
                    <div className="w-16 h-44 bg-gradient-to-b from-blue-900 to-blue-950 rounded-sm shadow-lg transform rotate-2"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ PROJECTS SECTION ============ */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section heading */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-50 mb-2">
                Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
            </div>

            {/* Projects grid */}
            <motion.div
              className="grid md:grid-cols-1 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-700/20 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  {/* Project header with title and links */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-amber-100 group-hover:text-amber-200 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        className="text-slate-400 hover:text-amber-300 transition-colors"
                        title="View project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.github}
                        className="text-slate-400 hover:text-amber-300 transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Project description */}
                  <p className="text-slate-400 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-amber-900/30 border border-amber-700/50 text-amber-200 text-sm rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ SKILLS SECTION ============ */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section heading */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-50 mb-2">
                Skills
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
            </div>

            {/* Skills grid organized by category */}
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-700/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-amber-200 mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-amber-900/20 border border-amber-700/40 text-slate-200 text-sm rounded-sm hover:bg-amber-900/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 relative"
      >
        <div className="max-w-2xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={containerVariants}
          >
            {/* Section heading */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-50 mb-4">
                Get in Touch
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mx-auto"></div>
            </motion.div>

            {/* Contact description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg mb-12 leading-relaxed"
            >
              I&apos;m always interested in hearing about new opportunities, interesting projects, or just chatting about code, books, and ideas.
            </motion.p>

            {/* Social links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center gap-6 mb-12"
            >
              {[
                { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  variants={itemVariants}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center text-slate-950 hover:from-amber-500 hover:to-amber-400 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  title={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Footer */}
            <motion.p variants={itemVariants} className="text-slate-500 text-sm">
              &copy; 2026 Sandes. Built with React, Next.js, and a love for clean code.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
