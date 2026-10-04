'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GeometricPattern } from '@/components/animation/GeometricPattern';
import { directors } from '@/data/contact';

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
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Leadership</p>
            <h2 className="font-display font-extrabold uppercase text-white leading-[0.88] tracking-[-0.02em] text-[clamp(32px,4.5vw,64px)]">
              Our Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {directors.map((director) => (
              <div
                key={director.name}
                className="border-t border-white/20 pt-6"
              >
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white">
                  {director.name}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-widest text-white/50">
                  {director.role}
                </p>
                <p className="mt-6 text-sm md:text-base text-white/70 leading-relaxed">
                  {director.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
