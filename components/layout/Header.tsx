'use client';

import { useEffect, useRef, useState } from 'react';
import { navigation, wordmark } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkSection, setDarkSection] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const darkSections = document.querySelectorAll('[data-theme="dark"]');
      let overDark = false;
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 60 && rect.bottom >= 60) {
          overDark = true;
        }
      });
      setDarkSection(overDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 transition-all duration-300',
          scrolled && 'bg-background/90 backdrop-blur-sm',
        )}
        aria-label="Primary navigation"
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={cn(
            'font-display text-xl font-bold tracking-tight transition-colors',
            darkSection && !scrolled ? 'text-white' : 'text-forest',
          )}
        >
          {wordmark}
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Desktop navigation">
          {navigation.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                'text-xs uppercase tracking-widest font-medium transition-colors hover:opacity-60',
                darkSection && !scrolled ? 'text-white' : 'text-forest',
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className={cn(
            'md:hidden p-2 transition-colors',
            darkSection && !scrolled ? 'text-white' : 'text-forest',
          )}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-forest flex flex-col px-6 md:px-12 py-5"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl font-bold tracking-tight text-white">{wordmark}</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-white"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center gap-4" aria-label="Mobile navigation">
            {navigation.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-white text-4xl md:text-6xl font-display font-bold uppercase tracking-tight leading-none opacity-0 animate-slide-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
