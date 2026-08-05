'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface MaskedImageProps {
  src: string;
  alt: string;
  className?: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  delay?: number;
  parallax?: number;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
}

export function MaskedImage({
  src,
  alt,
  className,
  direction = 'right',
  delay = 0,
  parallax = 0,
  fill = true,
  width,
  height,
  priority = false,
  sizes = '50vw',
  children,
}: MaskedImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const fromClip = getClipFrom(direction);
      if (reducedMotion) {
        gsap.set(wrapperRef.current, { clipPath: 'inset(0% 0% 0% 0%)' });
        setRevealed(true);
        return;
      }
      gsap.fromTo(
        wrapperRef.current,
        { clipPath: fromClip },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: 'power4.inOut',
          delay,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
          onComplete: () => setRevealed(true),
        },
      );

      if (parallax && imageRef.current) {
        gsap.to(imageRef.current, {
          y: parallax,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, [direction, delay, parallax, reducedMotion]);

  return (
    <div
      ref={wrapperRef}
      className={cn('overflow-hidden', className)}
      style={{ clipPath: revealed ? undefined : getClipFrom(direction) }}
    >
      <div ref={imageRef} className={cn('relative w-full h-full', fill && 'absolute inset-0')} style={{ willChange: 'transform' }}>
        <Image
          src={src}
          alt={alt}
          fill={fill && !width}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
        {children}
      </div>
    </div>
  );
}

function getClipFrom(direction: MaskedImageProps['direction']) {
  switch (direction) {
    case 'left':
      return 'inset(0% 0% 0% 100%)';
    case 'right':
      return 'inset(0% 100% 0% 0%)';
    case 'top':
      return 'inset(100% 0% 0% 0%)';
    case 'bottom':
      return 'inset(0% 0% 100% 0%)';
    default:
      return 'inset(0% 100% 0% 0%)';
  }
}
