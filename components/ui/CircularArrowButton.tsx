'use client';

import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CircularArrowButtonProps {
  href?: string;
  onClick?: () => void;
  label?: string;
  className?: string;
  dark?: boolean;
}

export function CircularArrowButton({ href, onClick, label, className, dark = false }: CircularArrowButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translate(0, 0)';
    }
  };

  const ButtonContent = () => (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={label || 'Continue'}
      className={cn(
        'group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border transition-transform duration-200 ease-out',
        dark ? 'border-white/40 hover:border-white text-white' : 'border-forest/40 hover:border-forest text-forest',
        className,
      )}
    >
      <ArrowRight
        size={24}
        strokeWidth={1.5}
        className={cn(
          'transition-transform duration-300 group-hover:translate-x-1',
          dark ? 'text-white' : 'text-forest',
        )}
      />
    </button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        <ButtonContent />
      </a>
    );
  }

  return <ButtonContent />;
}
