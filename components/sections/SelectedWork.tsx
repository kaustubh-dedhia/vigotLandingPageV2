'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { projectsHeading } from '@/data/projects';
import { selectedWorkProjects } from '@/data/photos';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current || reducedMotion) return;
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const style = window.getComputedStyle(track);
      const pl = parseFloat(style.paddingLeft) || 0;
      const pr = parseFloat(style.paddingRight) || 0;
      const gap = parseFloat(style.gap) || 0;

      const cards = Array.from(track.children) as HTMLElement[];
      const cardsWidth = cards.reduce((acc, card) => acc + card.offsetWidth, 0);
      const gapsWidth = (cards.length - 1) * gap;
      const trackWidth = pl + cardsWidth + gapsWidth + pr;
      const scrollWidth = trackWidth - window.innerWidth;

      if (scrollWidth > 0) {
        gsap.to(track, {
          x: -scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: `+=${scrollWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
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
      <div className="min-h-fit md:min-h-screen flex flex-col justify-center py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto mb-6 md:mb-12 px-6 md:px-12 lg:px-16">
          <SplitTextReveal
            as="h2"
            className="font-display font-extrabold uppercase text-forest leading-[0.92] tracking-[-0.02em] text-[clamp(36px,6.075vw,95px)]"
          >
            {projectsHeading.join('\n')}
          </SplitTextReveal>
        </div>

        <div
          ref={trackRef}
          className="flex gap-5 md:gap-10 lg:gap-16 px-6 md:px-12 lg:px-16 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 md:mx-0 md:overflow-visible md:snap-none scrollbar-hide"
        >
          {selectedWorkProjects.map((project, index) => (
            <article
              key={project.id}
              className={`flex-shrink-0 w-[85vw] max-w-[380px] md:w-[45vw] md:max-w-none lg:w-[35vw] snap-center md:snap-align-none grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ${index === selectedWorkProjects.length - 1 ? 'mr-6 md:mr-0' : ''}`}
            >
              <div className="relative aspect-[4/5] max-h-[55vh] md:max-h-none rounded-sm overflow-hidden bg-border">
                <Image
                  src={project.imageSrc}
                  alt={`${project.category} packaging project`}
                  fill
                  sizes="(max-width: 768px) 85vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-between py-2 min-w-0">
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-2xl md:text-3xl font-display font-extrabold text-forest/20">{project.number}</span>
                    <span className="text-[10px] uppercase tracking-widest text-sage">{project.category}</span>
                  </div>

                  <dl className="space-y-1.5 text-xs md:text-sm">
                    <div className="flex justify-between border-b border-border pb-1.5">
                      <dt className="text-sage uppercase text-[10px] tracking-wider">Format</dt>
                      <dd className="text-forest font-medium">{project.format}</dd>
                    </div>
                    <div className="flex justify-between border-b border-border pb-1.5">
                      <dt className="text-sage uppercase text-[10px] tracking-wider">Material</dt>
                      <dd className="text-forest font-medium">{project.material}</dd>
                    </div>
                    <div className="flex justify-between border-b border-border pb-1.5">
                      <dt className="text-sage uppercase text-[10px] tracking-wider">Finish</dt>
                      <dd className="text-forest font-medium">{project.finish}</dd>
                    </div>
                  </dl>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                  {project.crops.map((crop, idx) => (
                    <div
                      key={`${project.id}-crop-${idx}`}
                      className="relative w-full h-28 sm:h-32 rounded-sm overflow-hidden bg-border"
                    >
                      <Image
                        src={crop}
                        alt={`Project ${project.number} detail ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 40vw, 20vw"
                        className="object-contain"
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
