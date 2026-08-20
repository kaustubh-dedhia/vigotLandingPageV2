'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { capabilities, capabilitiesHeading } from '@/data/capabilities';

gsap.registerPlugin(ScrollTrigger);

interface CapabilitiesProps {
  onSectionEnter?: () => void;
  onSectionLeave?: () => void;
}

export const SLOW_DURATION = 2.4;

export function Capabilities({ onSectionEnter, onSectionLeave }: CapabilitiesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0.7, scale: 1.02 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' },
    );
  }, [activeIndex]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const slowTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => onSectionEnter?.(),
        onEnterBack: () => onSectionEnter?.(),
        onLeave: () => onSectionLeave?.(),
        onLeaveBack: () => onSectionLeave?.(),
      });

      gsap.from('.capability-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      return () => {
        slowTrigger.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [onSectionEnter, onSectionLeave]);

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative min-h-screen w-full bg-background px-6 md:px-12 lg:px-16 py-20 md:py-32"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
      >
        <div className="lg:col-span-5">
          <SplitTextReveal
            as="h2"
            className="font-display font-extrabold uppercase text-forest leading-[0.88] tracking-[-0.02em] text-[clamp(40px,5.25vw,84px)]"
          >
            {capabilitiesHeading.join('\n')}
          </SplitTextReveal>

          <div className="mt-12 md:mt-16">
            {capabilities.map((cap, index) => (
              <button
                key={cap.id}
                className="capability-item group block w-full text-left border-t border-border py-5 md:py-6 transition-colors hover:bg-forest/5"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-baseline gap-4">
                  <span className={`
                    text-sm md:text-base font-display font-bold transition-colors duration-300
                    ${activeIndex === index ? 'text-forest' : 'text-sage'}
                  `}
                  >
                    {cap.number}
                  </span>
                  <span className={`
                    text-xl md:text-2xl font-display font-bold uppercase tracking-tight transition-colors duration-300
                    ${activeIndex === index ? 'text-forest' : 'text-forest/60'}
                  `}
                  >
                    {cap.title}
                  </span>
                </div>
                <div
                  className={`
                    overflow-hidden transition-all duration-500 ease-out
                    ${activeIndex === index ? 'max-h-24 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}
                  `}
                >
                  <p className="pl-12 text-sm md:text-base text-charcoal leading-relaxed">{cap.description}</p>
                </div>
                <span
                  className={`
                    block h-[1px] bg-forest mt-5 transition-all duration-500 origin-left
                    ${activeIndex === index ? 'scale-x-100' : 'scale-x-0'}
                  `}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7"
        >
          <div
            ref={imageRef}
            className="sticky top-24 aspect-[4/5] overflow-hidden relative"
          >
            <Image
              src={capabilities[activeIndex].imageSrc}
              alt={capabilities[activeIndex].title}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
