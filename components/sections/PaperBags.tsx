'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { MaskedImage } from '@/components/animation/MaskedImage';

gsap.registerPlugin(ScrollTrigger);

const stripImages = [
  'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80',
];

const lifestyleImages = [
  { src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80', alt: 'Paper bag lifestyle shot', className: 'aspect-[4/5]', direction: 'left' as const },
  { src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80', alt: 'Colourful paper bags', className: 'aspect-[16/10]', direction: 'right' as const },
];

export function PaperBags() {
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !stripRef.current) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        gsap.from(stripRef.current, {
          xPercent: 10,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        });

        gsap.to(stripRef.current, {
          xPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      } else {
        gsap.set(stripRef.current, { xPercent: 0, opacity: 1 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="paper-bags"
      className="relative w-full bg-background px-6 md:px-12 lg:px-16 py-20 md:py-32"
    >
      <div className="max-w-[1600px] mx-auto">
        <span className="text-xs uppercase tracking-widest text-sage">07 / PACKAGING CATEGORY</span>

        <SplitTextReveal
          as="h2"
          className="mt-6 font-display font-extrabold uppercase text-forest leading-[0.88] tracking-[-0.02em] text-[clamp(54px,9vw,140px)]"
        >
          PAPER
          BAGS
        </SplitTextReveal>

        <div className="mt-8 md:mt-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-sage" />
            <span className="text-xs uppercase tracking-widest text-sage">Eco paper bag choice</span>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-12 overflow-hidden">
        <div ref={stripRef} className="flex gap-3 md:gap-4">
          {stripImages.map((src, i) => (
            <div key={`strip-${i}`} className="relative flex-shrink-0 w-40 md:w-64 aspect-[3/4]"
            >
              <Image src={src} alt="Coloured paper bag" fill sizes="20vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <MaskedImage
          src={lifestyleImages[0].src}
          alt={lifestyleImages[0].alt}
          className={lifestyleImages[0].className}
          direction={lifestyleImages[0].direction}
          parallax={20}
        />
        <div className="md:mt-16">
          <MaskedImage
            src={lifestyleImages[1].src}
            alt={lifestyleImages[1].alt}
            className={lifestyleImages[1].className}
            direction={lifestyleImages[1].direction}
            parallax={35}
          />
          <ul className="mt-8 space-y-3 text-sm md:text-base text-charcoal">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-forest" /> Brand visibility
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-forest" /> Sustainable packaging
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-forest" /> Custom colours and sizes
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-forest" /> Premium handles and finishes
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
