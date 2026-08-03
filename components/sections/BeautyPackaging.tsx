'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { MaskedImage } from '@/components/animation/MaskedImage';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=80', alt: 'Skincare packaging box', className: 'aspect-[3/4]', direction: 'left' as const, parallax: 25 },
  { src: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=80', alt: 'Wellness beauty box', className: 'aspect-[4/5]', direction: 'right' as const, parallax: 40 },
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80', alt: 'Product reveal kit', className: 'aspect-[16/10]', direction: 'bottom' as const, parallax: 15 },
];

export function BeautyPackaging() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !panelRef.current) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        gsap.from(panelRef.current, {
          x: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      } else {
        gsap.set(panelRef.current, { x: 0, opacity: 1 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="beauty"
      className="relative w-full bg-background px-6 md:px-12 lg:px-16 py-20 md:py-32"
    >
      <div className="max-w-[1600px] mx-auto mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center"
      >
        <div className="lg:col-span-5 order-2 lg:order-1">
          <span className="text-xs uppercase tracking-widest text-sage">05 / PACKAGING CATEGORY</span>

          <SplitTextReveal
            as="h2"
            className="mt-6 font-display font-extrabold uppercase text-forest leading-[0.88] tracking-[-0.02em] text-[clamp(54px,7vw,112px)]"
          >
            BEAUTY
            PACKAGING
          </SplitTextReveal>

          <div
            ref={panelRef}
            className="mt-10 md:mt-14 bg-forest text-white p-8 md:p-10"
          >
            <h3 className="text-xs uppercase tracking-widest text-white/50 mb-6">COSMETIC BOXES</h3>
            <ul className="space-y-3 text-sm md:text-base text-white/80">
              <li>Skincare packaging solutions</li>
              <li>Wellness and beauty boxes</li>
              <li>Product reveal kits</li>
              <li>Custom inserts and finishes</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 grid grid-cols-2 gap-4 md:gap-6"
        >
          <div className="col-span-1 mt-12">
            <MaskedImage
              src={images[0].src}
              alt={images[0].alt}
              className={images[0].className}
              direction={images[0].direction}
              parallax={images[0].parallax}
            />
          </div>
          <div className="col-span-1">
            <MaskedImage
              src={images[1].src}
              alt={images[1].alt}
              className={images[1].className}
              direction={images[1].direction}
              parallax={images[1].parallax}
            />
          </div>
          <div className="col-span-2">
            <MaskedImage
              src={images[2].src}
              alt={images[2].alt}
              className={images[2].className}
              direction={images[2].direction}
              parallax={images[2].parallax}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
