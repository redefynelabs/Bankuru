"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { CompanyLogo } from '../ReuseableComponents/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  link: string;
  name: string;
  sectionIds: string[];
};

const navContents: NavItem[] = [
  { link: "#home", name: 'Home', sectionIds: ['home-section'] },
  { link: "#about", name: 'About', sectionIds: ['about-section'] },
  { link: "#vision", name: 'Vision', sectionIds: ['vision-section'] },
  { link: "#journey", name: 'Journey', sectionIds: ['journey-section', 'journeyMobile-section'] },
  { link: "#products", name: 'Products', sectionIds: ['building-section'] },
];

const CONTACT_SECTION = 'contact-section';
const NAV_OFFSET = 96;

// Journey has separate desktop/mobile sections; pick whichever is rendered
const getVisibleSection = (ids: string[]) => {
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el && el.offsetParent !== null) return el;
  }
  return null;
};

const TopNav = () => {
  const [activeSection, setActiveSection] = useState('home-section');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const scrollPosition = window.scrollY + NAV_OFFSET + 20;
      const contact = document.getElementById(CONTACT_SECTION);
      if (contact && scrollPosition >= contact.offsetTop) {
        setActiveSection(CONTACT_SECTION);
        return;
      }

      for (let i = navContents.length - 1; i >= 0; i--) {
        const section = getVisibleSection(navContents[i].sectionIds);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navContents[i].sectionIds[0]);
          return;
        }
      }
      setActiveSection('home-section');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const scrollToSection = useCallback((sectionIds: string[]) => {
    setIsMenuOpen(false);
    setActiveSection(sectionIds[0]);

    if (sectionIds[0] === 'home-section') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = getVisibleSection(sectionIds);
    if (!element) return;

    window.scrollTo({
      top: Math.max(0, element.offsetTop - NAV_OFFSET),
      behavior: 'smooth',
    });
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionIds: string[]) => {
    e.preventDefault();
    scrollToSection(sectionIds);
  };

  const isActive = (item: NavItem) => activeSection === item.sectionIds[0];

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 md:pt-5 pt-3 pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between gap-6 w-full rounded-full border backdrop-blur-xl transition-all duration-500 ease-out ${
            isScrolled
              ? 'max-w-4xl bg-[#0B0B0B]/70 border-[#FFFFFF1F] shadow-[0_8px_32px_rgba(0,0,0,0.45)] py-2 pl-5 pr-2'
              : 'max-w-6xl bg-[#FFFFFF08] border-[#FFFFFF14] py-2.5 pl-6 pr-2.5'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleClick(e, ['home-section'])}
            aria-label="Bankuru Services home"
            className="shrink-0"
          >
            <Image
              unoptimized
              src={CompanyLogo}
              alt="Bankuru Services"
              width={1000}
              height={1000}
              className={`h-auto transition-all duration-500 ${isScrolled ? 'w-[90px]' : 'w-[104px]'}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {navContents.map((item) => (
                <li key={item.name} className="relative">
                  <Link
                    href={item.link}
                    onClick={(e) => handleClick(e, item.sectionIds)}
                    aria-current={isActive(item) ? 'true' : undefined}
                    className={`relative z-10 block px-4 py-2 text-[15px] tracking-[0.3px] rounded-full transition-colors duration-300 ${
                      isActive(item) ? 'text-white' : 'text-[#BEBCBA] hover:text-white'
                    }`}
                  >
                    {isActive(item) && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-[#FFFFFF14] border border-[#FFFFFF1A]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {/* CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => handleClick(e, [CONTACT_SECTION])}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-black text-[14px] font-semibold px-5 py-2.5"
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen((open) => !open)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF0F] border border-[#FFFFFF1A] text-white"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-[18px] h-[12px]">
                <motion.span
                  className="absolute left-0 top-0 h-[2px] w-full rounded-full bg-current"
                  animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="absolute left-0 top-[5px] h-[2px] w-full rounded-full bg-current"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 top-[10px] h-[2px] w-full rounded-full bg-current"
                  animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              className="fixed inset-x-3 md:top-[92px] top-[80px] z-50 lg:hidden rounded-[28px] border border-[#FFFFFF1F] bg-[#0B0B0B]/90 backdrop-blur-xl p-3 shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="flex flex-col">
                {navContents.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={item.link}
                      onClick={(e) => handleClick(e, item.sectionIds)}
                      aria-current={isActive(item) ? 'true' : undefined}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg transition-colors ${
                        isActive(item)
                          ? 'bg-[#FFFFFF12] text-white font-semibold'
                          : 'text-[#BEBCBA] hover:text-white hover:bg-[#FFFFFF08]'
                      }`}
                    >
                      {item.name}
                      {isActive(item) && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                onClick={(e) => handleClick(e, [CONTACT_SECTION])}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + navContents.length * 0.04, duration: 0.25 }}
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-white text-black font-semibold py-3.5"
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNav;
