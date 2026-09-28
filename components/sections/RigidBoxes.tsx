'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { SectionCounter } from '@/components/ui/SectionLabel';
import { categories } from '@/data/categories';
import { rigidBoxImage } from '@/data/photos';

gsap.registerPlugin(ScrollTrigger);

const category = categories[0];

export function RigidBoxes() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const benefitRefs = useRef<HTMLLIElement[]>([]);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        benefitRefs.current.forEach((el, i) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { opacity: 0.3, x: -20 },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                end: 'top 60%',
                scrub: true,
              },
            },
          );
        });
      }

      gsap.set(benefitRefs.current, { opacity: 1, x: 0 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="rigid-boxes" className="relative bg-background"
    >
      <div
        className="min-h-screen w-full flex items-center px-6 md:px-12 lg:px-16 pt-32 md:pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 relative h-[50vh] lg:h-[75vh]">
            <div ref={imageRef} className="absolute inset-0 overflow-hidden">
              <Image
                src={rigidBoxImage}
                alt="Premium rigid box product photography"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <span className="text-xs uppercase tracking-widest text-sage mb-8 block">{category.subtitle || 'PACKAGING CATEGORY'}</span>

            <SplitTextReveal
              as="h2"
              className="font-display font-extrabold uppercase text-forest leading-[0.9] tracking-[-0.02em] text-[clamp(40px,5.25vw,84px)]"
            >
              {category.title.join('\n')}
            </SplitTextReveal>

            <p className="mt-6 md:mt-8 max-w-md text-base md:text-lg text-charcoal leading-relaxed"
            >
              {category.description}
            </p>

            <ul className="mt-10 md:mt-14 space-y-4">
              {category.benefits.map((benefit, index) => (
                <li
                  key={benefit}
                  ref={(el) => {
                    if (el) benefitRefs.current[index] = el;
                  }}
                  className="flex items-center gap-4 text-base md:text-lg text-forest"
                >
                  <span className="w-2 h-2 rounded-full bg-forest" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
