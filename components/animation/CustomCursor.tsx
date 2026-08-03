'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined' || reducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

    let rafId: number;
    const pos = { x: 0, y: 0 };

    const move = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setVisible(true);
    };

    const update = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(update);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, [role="button"], input, textarea, select, [data-hover]')) {
        setHovering(true);
      }
    };

    const out = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, [role="button"], input, textarea, select, [data-hover]')) {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over, { passive: true });
    document.addEventListener('mouseout', out, { passive: true });
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={cursorRef}
      className={cn(
        'fixed top-0 left-0 z-[90] pointer-events-none hidden md:block',
        'w-8 h-8 rounded-full border border-forest transition-[width,height,border-color] duration-200',
        hovering && 'w-12 h-12 border-sage',
        visible ? 'opacity-100' : 'opacity-0',
      )}
      aria-hidden="true"
    />
  );
}
