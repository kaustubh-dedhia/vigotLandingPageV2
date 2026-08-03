'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { wordmark } from '@/data/navigation';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { GeometricPattern } from '@/components/animation/GeometricPattern';

export function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current) return;

    if (reducedMotion) {
      onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete,
      });

      tl.to(progressRef.current, {
        width: '100%',
        duration: 1.2,
        ease: 'power2.inOut',
        onUpdate: function () {
          setProgress(Math.round(this.progress() * 100));
        },
      })
        .to(textRef.current, {
          y: -30,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in',
        })
        .to(
          containerRef.current,
          {
            yPercent: -100,
            duration: 1,
            ease: 'power4.inOut',
          },
          '-=0.2',
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-forest flex flex-col items-center justify-center text-white"
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.12]">
        <GeometricPattern className="w-[90vw] h-[90vw] max-w-[700px] max-h-[700px] text-white" />
      </div>

      <div ref={textRef} className="relative z-10 text-center">
        <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tight">{wordmark}</h1>
        <div className="mt-10 mx-auto w-48 h-[2px] bg-white/20 rounded-full overflow-hidden">
          <div ref={progressRef} className="h-full bg-white w-0" />
        </div>
        <p className="mt-4 text-xs tracking-widest opacity-60">{progress.toString().padStart(2, '0')}%</p>
      </div>
    </div>
  );
}
