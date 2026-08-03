'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface GeometricPatternProps {
  className?: string;
  animate?: boolean;
  direction?: 'draw' | 'fade';
}

export function GeometricPattern({ className, animate = true, direction = 'draw' }: GeometricPatternProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !animate) return;

    const paths = svgRef.current.querySelectorAll('path');

    const ctx = gsap.context(() => {
      if (direction === 'draw') {
        gsap.set(paths, { strokeDasharray: 1000, strokeDashoffset: 1000 });
        gsap.to(paths, {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: 'power2.inOut',
          stagger: 0.15,
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      } else {
        gsap.from(paths, {
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, svgRef);

    return () => ctx.revert();
  }, [animate, direction]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 400"
      fill="none"
      className={cn('w-full h-full', className)}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.9">
        <path d="M50 200 L200 100 L350 200 L200 300 Z" />
        <path d="M200 100 L200 300" />
        <path d="M50 200 L350 200" />
        <path d="M125 150 L275 150 L275 250 L125 250 Z" />
        <path d="M125 150 L200 100 L275 150" />
        <path d="M125 250 L200 300 L275 250" />
        <path d="M200 100 L200 50 L250 75" />
        <path d="M350 200 L400 175 L400 225 Z" />
        <path d="M50 200 L0 175 L0 225 Z" />
        <path d="M200 300 L200 380 L150 340" />
      </g>
    </svg>
  );
}
