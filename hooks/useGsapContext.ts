import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapContext(scopeSelector?: string) {
  const scopeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {}, scopeRef.current ?? undefined);
    return () => ctx.revert();
  }, []);

  return scopeRef;
}

export function initGsap() {
  gsap.registerPlugin(ScrollTrigger);
}
