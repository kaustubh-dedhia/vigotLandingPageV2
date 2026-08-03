'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { CircularArrowButton } from '@/components/ui/CircularArrowButton';
import { GeometricPattern } from '@/components/animation/GeometricPattern';
import { contact } from '@/data/contact';

gsap.registerPlugin(ScrollTrigger);

export function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        gsap.from(contentRef.current, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        });
      } else {
        gsap.set(contentRef.current, { y: 0, opacity: 1 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen w-full bg-forest text-white overflow-hidden"
      data-theme="dark"
    >
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] text-white opacity-[0.08]">
        <GeometricPattern />
      </div>
      <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] text-white opacity-[0.08] rotate-180">
        <GeometricPattern />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20"
      >
        <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          <div className="lg:col-span-8"
          >
            <SplitTextReveal
              as="h2"
              className="font-display font-extrabold uppercase text-white leading-[0.88] tracking-[-0.02em] text-[clamp(54px,9vw,140px)]"
            >
              {contact.headline.join('\n')}
            </SplitTextReveal>
          </div>

          <div className="lg:col-span-3 lg:col-start-10 flex flex-col justify-end"
          >
            <div className="space-y-6 text-sm md:text-base text-white/80"
            >
              <p className="text-white/50 text-xs uppercase tracking-widest">{contact.cta}</p>
              <a href={`mailto:${contact.email}`} className="block hover:text-white transition-colors">{contact.email}</a>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="block hover:text-white transition-colors">{contact.phone}</a>
              <p>{contact.location}</p>
              <div className="flex gap-6 pt-2"
              >
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>

            <div className="mt-12">
              <CircularArrowButton dark href={`mailto:${contact.email}`} label="Start a project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
