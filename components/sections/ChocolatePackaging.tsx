'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { chocolateImages } from '@/data/photos';

gsap.registerPlugin(ScrollTrigger);

const images = chocolateImages;

export function ChocolatePackaging() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        imageRefs.current.forEach((el, i) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { clipPath: 'inset(0% 100% 0% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.2,
              ease: 'power4.inOut',
              delay: i * 0.15,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            },
          );
        });

        gsap.to(trackRef.current, {
          x: -120,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      } else {
        gsap.set(imageRefs.current, { clipPath: 'inset(0% 0% 0% 0%)' });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="chocolate"
      className="relative w-full overflow-hidden"
    >
      <div className="bg-forest text-white px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-white/50">03 / PACKAGING CATEGORY</span>
          <SplitTextReveal
            as="h2"
            className="mt-6 font-display font-extrabold uppercase text-white leading-[0.88] tracking-[-0.02em] text-[clamp(36px,6.075vw,95px)]"
          >
            CHOCOLATE
            PACKAGING
          </SplitTextReveal>

          <p className="mt-8 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
            Premium chocolate boxes engineered for visual impact, gifting and product protection.
          </p>
        </div>
      </div>

      <div className="bg-background py-12 md:py-20 overflow-hidden"
      >
        <div ref={trackRef} className="flex items-end gap-4 md:gap-6 px-6 md:px-12 lg:px-16"
        >
          {images.map((img, index) => (
            <div
              key={`chocolate-${index}`}
              ref={(el) => {
                if (el) imageRefs.current[index] = el;
              }}
              className={`relative ${img.width} flex-shrink-0 aspect-[3/4]`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
