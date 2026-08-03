'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SplitTextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  trigger?: boolean;
}

export function SplitTextReveal({ children, className, delay = 0, as: Tag = 'h2', trigger = true }: SplitTextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || !trigger) return;

    const lines = containerRef.current.querySelectorAll('.split-line-inner');
    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(lines, { yPercent: 0 });
        return;
      }
      gsap.fromTo(
        lines,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.1,
          delay,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [children, delay, trigger, reducedMotion]);

  const splitLines = children.split('\n');

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={cn('overflow-hidden', className)}
    >
      {splitLines.map((line, index) => (
        <span key={index} className="split-line block overflow-hidden">
          <span className="split-line-inner block" style={{ transform: 'translateY(0)' }}>{line || '\u00A0'}</span>
        </span>
      ))}
    </Tag>
  );
}
