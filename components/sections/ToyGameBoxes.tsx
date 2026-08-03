'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { MaskedImage } from '@/components/animation/MaskedImage';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1200&q=80', alt: 'Toy packaging box', className: 'col-span-6 md:col-span-5 aspect-[4/5]' },
  { src: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80', alt: 'Board game box detail', className: 'col-span-6 md:col-span-4 md:col-start-8 aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1600&q=80', alt: 'Game packaging stack', className: 'col-span-12 md:col-span-6 md:col-start-4 aspect-[16/10]' },
];

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
            start: 'top 90%',
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
          className="mt-6 font-display font-extrabold uppercase text-forest leading-[0.88] tracking-[-0.02em] text-[clamp(54px,9vw,140px)]"
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
