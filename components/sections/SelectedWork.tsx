'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { projects, projectsHeading } from '@/data/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        const scrollWidth = trackRef.current!.scrollWidth - window.innerWidth;
        if (scrollWidth > 0) {
          gsap.to(trackRef.current, {
            x: -scrollWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: `+=${scrollWidth * 0.8}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      className="relative w-full bg-background overflow-hidden"
      data-theme="dark"
    >
      <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20"
      >
        <div className="max-w-[1600px] mx-auto mb-12 md:mb-20"
        >
          <SplitTextReveal
            as="h2"
            className="font-display font-extrabold uppercase text-forest leading-[0.88] tracking-[-0.02em] text-[clamp(54px,9vw,140px)]"
          >
            {projectsHeading.join('\n')}
          </SplitTextReveal>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 md:gap-10 lg:gap-16"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[50vw] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              <div className="relative aspect-[4/5]"
              >
                <Image
                  src={project.imageSrc}
                  alt={`${project.category} packaging project`}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-between py-2"
              >
                <div>
                  <div className="flex items-baseline gap-4 mb-6"
                  >
                    <span className="text-5xl md:text-6xl font-display font-extrabold text-forest/20">{project.number}</span>
                    <span className="text-xs uppercase tracking-widest text-sage">{project.category}</span>
                  </div>

                  <dl className="space-y-3 text-sm md:text-base"
                  >
                    <div className="flex justify-between border-b border-border pb-2">
                      <dt className="text-sage uppercase text-xs tracking-wider">Format</dt>
                      <dd className="text-forest font-medium">{project.format}</dd>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <dt className="text-sage uppercase text-xs tracking-wider">Material</dt>
                      <dd className="text-forest font-medium">{project.material}</dd>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2"
                    >
                      <dt className="text-sage uppercase text-xs tracking-wider">Finish</dt>
                      <dd className="text-forest font-medium">{project.finish}</dd>
                    </div>
                  </dl>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6"
                >
                  {project.crops.map((crop, idx) => (
                    <div key={`${project.id}-crop-${idx}`} className="relative aspect-square"
                    >
                      <Image
                        src={crop}
                        alt={`Project ${project.number} detail ${idx + 1}`}
                        fill
                        sizes="25vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
