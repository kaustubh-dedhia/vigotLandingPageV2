'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { MaskedImage } from '@/components/animation/MaskedImage';
import { gameImages } from '@/data/photos';

gsap.registerPlugin(ScrollTrigger);

const images = gameImages;

export function ToyGameBoxes() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !panelRef.current) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        gsap.from(panelRef.current, {
          yPercent: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        });
      } else {
        gsap.set(panelRef.current, { yPercent: 0, opacity: 1 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="toys"
      className="relative w-full bg-background px-6 md:px-12 lg:px-16 py-20 md:py-32"
    >
      <div className="max-w-[1600px] mx-auto">
        <span className="text-xs uppercase tracking-widest text-sage">04 / PACKAGING CATEGORY</span>

        <SplitTextReveal
          as="h2"
          className="mt-6 font-display font-extrabold uppercase text-forest leading-[0.88] tracking-[-0.02em] text-[clamp(40px,6.75vw,105px)]"
        >
          TOY &
          GAME BOXES
        </SplitTextReveal>

        <div className="mt-8 md:mt-12 grid grid-cols-12 gap-4 md:gap-6 items-start"
        >
          {images.map((img, index) => (
            <MaskedImage
              key={`toys-${index}`}
              src={img.src}
              alt={img.alt}
              className={`${img.className} group cursor-pointer`}
              direction={index % 2 === 0 ? 'right' : 'left'}
              delay={index * 0.1}
              parallax={index % 2 === 0 ? 20 : 35}
            >
              <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
            </MaskedImage>
          ))}
        </div>

        <div
          ref={panelRef}
          className="mt-[-60px] md:mt-[-120px] relative z-10 ml-auto bg-forest text-white p-8 md:p-12 max-w-md"
        >
          <h3 className="text-xs uppercase tracking-widest text-white/50 mb-6">GAME BOXES</h3>
          <ul className="space-y-3 text-sm md:text-base text-white/80">
            <li>Custom game boxes</li>
            <li>Play meets protection</li>
            <li>Crafted for brands and creators</li>
            <li>Designed to protect every piece</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
