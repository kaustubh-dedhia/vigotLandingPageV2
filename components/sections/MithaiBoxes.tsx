'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { SectionCounter } from '@/components/ui/SectionLabel';
import { categories } from '@/data/categories';
import { mithaiImage } from '@/data/photos';

gsap.registerPlugin(ScrollTrigger);

const category = categories[1];

export function MithaiBoxes() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        imageRefs.current.forEach((el, i) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { clipPath: i % 2 === 0 ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.2,
              ease: 'power4.inOut',
              scrollTrigger: {
                trigger: el,
                start: 'top 95%',
                toggleActions: 'play none none none',
              },
            },
          );
        });

        gsap.from(panelRef.current, {
          yPercent: 30,
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
        gsap.set(imageRefs.current, { clipPath: 'inset(0% 0% 0% 0%)' });
        gsap.set(panelRef.current, { yPercent: 0, opacity: 1 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mithai"
      className="relative w-full overflow-hidden"
      data-theme="dark"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[50vh] lg:h-auto lg:min-h-[80vh] bg-background flex items-end p-6 md:p-12">
          <div
            ref={(el) => {
              if (el) imageRefs.current[0] = el;
            }}
            className="absolute inset-0"
          >
            <Image
              src={mithaiImage}
              alt="Mithai and dry fruit gift boxes"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-forest text-white flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 lg:py-24">
          <SectionCounter number={category.number} label={category.subtitle || 'PACKAGING CATEGORY'} dark className="mb-8" />

          <SplitTextReveal
            as="h2"
            className="font-display font-extrabold uppercase text-white leading-[0.9] tracking-[-0.02em] text-[clamp(36px,4.725vw,76px)]"
          >
            {category.title.join('\n')}
          </SplitTextReveal>

          <div ref={panelRef} className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white/50 mb-4">Mithai Boxes</h3>
              <ul className="space-y-3 text-sm md:text-base text-white/80">
                <li>Food-safe inserts and cavities</li>
                <li>Custom sizes and branding</li>
                <li>Suitable for festive and wedding gifting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white/50 mb-4">Dry Fruit Boxes</h3>
              <ul className="space-y-3 text-sm md:text-base text-white/80">
                <li>Premium compartment packaging</li>
                <li>Elegant gift and hamper formats</li>
                <li>Custom printing and finishing</li>
                <li>Reusable luxury packaging</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
