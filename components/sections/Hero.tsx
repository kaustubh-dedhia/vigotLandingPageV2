'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { GeometricPattern } from '@/components/animation/GeometricPattern';
import { CircularArrowButton } from '@/components/ui/CircularArrowButton';
import { wordmark, companyTagline, heroSubtitle } from '@/data/navigation';
import { heroImage } from '@/data/photos';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      });

      tl.from(taglineRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          supportRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5',
        )
        .from(
          imageRef.current,
          {
            xPercent: 20,
            opacity: 0,
            duration: 1.4,
          },
          0,
        );

      if (!reducedMotion) {
        gsap.to(imageRef.current, {
          y: 60,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.to(patternRef.current, {
          rotation: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full bg-background overflow-hidden flex items-center px-6 md:px-12 lg:px-16 pt-24 pb-12"
    >
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        <div className="lg:col-span-6 z-10 order-2 lg:order-1">
          <p className="mb-2 md:mb-3 text-sm md:text-base uppercase tracking-[0.25em] text-sage font-medium">
            {heroSubtitle}
          </p>
          <SplitTextReveal
            as="h1"
            className="font-display font-extrabold uppercase text-forest leading-[0.88] tracking-[-0.03em] text-[clamp(54px,8.25vw,135px)]"
            trigger={true}
          >
            {wordmark}
          </SplitTextReveal>

          <p
            ref={taglineRef}
            className="mt-4 md:mt-6 text-sm md:text-base uppercase tracking-[0.25em] text-sage font-medium"
          >
            {companyTagline}
          </p>

          <p
            ref={supportRef}
            className="mt-8 md:mt-12 max-w-md text-base md:text-lg text-charcoal leading-relaxed"
          >
            Complete packaging solutions for products designed to be remembered.
          </p>

          <div className="mt-10 md:mt-14 flex items-center gap-4 md:gap-6">
            <CircularArrowButton href="#rigid-boxes" label="Explore packaging" />
            <span className="text-xs uppercase tracking-widest text-sage">Explore Packaging</span>
          </div>
        </div>

        <div className="lg:col-span-6 relative h-[50vh] lg:h-[80vh] order-1 lg:order-2">
          <div
            ref={imageRef}
            className="absolute inset-0 lg:-right-16 lg:-top-8"
          >
            <Image
              src={heroImage}
              alt="Premium rigid box packaging composition"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div
        ref={patternRef}
        className="absolute -bottom-24 -left-24 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] text-pattern opacity-[0.12] pointer-events-none"
      >
        <GeometricPattern animate={false} />
      </div>

    </section>
  );
}
