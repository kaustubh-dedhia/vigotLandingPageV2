import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_DURATION = 1.2;

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: DEFAULT_DURATION,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  const setDuration = useCallback((duration: number) => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    lenis.options.duration = duration;
  }, []);

  const resetDuration = useCallback(() => {
    setDuration(DEFAULT_DURATION);
  }, [setDuration]);

  return { lenisRef, setDuration, resetDuration };
}
