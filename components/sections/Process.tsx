'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { processHeading, processSteps } from '@/data/process';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        ScrollTrigger.create({
          trigger: triggerRef.current,
          start: 'top top',
          end: '+=90%',
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const index = Math.min(
              processSteps.length - 1,
              Math.floor(self.progress * processSteps.length),
            );
            setActiveStep(index);
          },
        });

        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: '+=90%',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} id="process" className="relative w-full bg-background"
    >
      <div
        ref={triggerRef}
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20"
      >
        <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          <div className="lg:col-span-5"
          >
            <SplitTextReveal
              as="h2"
              className="font-display font-extrabold uppercase text-forest leading-[0.88] tracking-[-0.02em] text-[clamp(54px,7vw,112px)]"
            >
              {processHeading.join('\n')}
            </SplitTextReveal>

            <div className="mt-12 md:mt-16"
            >
              <div className="relative h-[1px] bg-border mb-10"
              >
                <div
                  ref={progressRef}
                  className="absolute top-0 left-0 h-full bg-forest origin-left"
                  style={{ transform: 'scaleX(0)' }}
                />
              </div>

              <div className="space-y-6"
              >
                {processSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`transition-opacity duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-30'}`}
                  >
                    <div className="flex items-baseline gap-4"
                    >
                      <span className="text-2xl md:text-3xl font-display font-extrabold text-forest/30">{step.number}</span>
                      <span className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-forest">{step.title}</span>
                    </div>
                    {activeStep === index && (
                      <p className="mt-2 text-sm md:text-base text-charcoal leading-relaxed max-w-md">{step.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 relative aspect-[4/3] lg:aspect-auto"
          >
            <div className="relative h-full min-h-[300px] lg:min-h-[500px] overflow-hidden"
            >
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`absolute inset-0 transition-opacity duration-700 ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={step.imageSrc}
                    alt={step.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
