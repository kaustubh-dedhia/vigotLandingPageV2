'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { MaskedImage } from '@/components/animation/MaskedImage';
import { hamperHeroImage, hamperCrops } from '@/data/photos';

gsap.registerPlugin(ScrollTrigger);

const heroImage = hamperHeroImage;
const crops = hamperCrops;

export function HamperPackaging() {
  const sectionRef = useRef<HTMLElement>(null);
  const blockRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        blockRefs.current.forEach((el, i) => {
          if (!el) return;
          const fromY = i % 2 === 0 ? 80 : -60;
          gsap.from(el, {
            y: fromY,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 95%',
              toggleActions: 'play none none none',
            },
          });
        });
      } else {
        gsap.set(blockRefs.current, { y: 0, opacity: 1 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hampers"
      className="relative w-full bg-background px-6 md:px-12 lg:px-16 py-20 md:py-32"
    >
      <div className="max-w-[1600px] mx-auto">
        <span className="text-xs uppercase tracking-widest text-sage">04 / PACKAGING CATEGORY</span>

        <SplitTextReveal
          as="h2"
          className="mt-6 mb-8 md:mb-12 font-display font-extrabold uppercase text-forest leading-[0.88] tracking-[-0.02em] text-[clamp(40px,6.75vw,105px)]"
        >
          HAMPER
          PACKAGING
        </SplitTextReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-start">
          <div
            ref={(el) => {
              if (el) blockRefs.current[0] = el;
            }}
            className="lg:col-span-7 relative aspect-[4/3]"
          >
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
            <div
              ref={(el) => {
                if (el) blockRefs.current[1] = el;
              }}
              className="bg-forest text-white p-8 md:p-10"
            >
              <h3 className="text-xs uppercase tracking-widest text-white/50 mb-6">EXCLUSIVE HAMPERS</h3>
              <ul className="space-y-3 text-sm md:text-base text-white/80">
                <li>Elegant gifts, beautifully packed</li>
                <li>Thoughtfully designed gift boxes</li>
                <li>Corporate and festive gifting</li>
                <li>Fully customisable inserts</li>
              </ul>
            </div>

            <div
              ref={(el) => {
                if (el) blockRefs.current[2] = el;
              }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {crops.map((crop, idx) => (
                <MaskedImage
                  key={`hamper-crop-${idx}`}
                  src={crop.src}
                  alt={crop.alt}
                  className={crop.className}
                  direction={crop.from}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
