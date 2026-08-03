import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionLabel({ children, className, dark = false }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-block text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium',
        dark ? 'text-white/70' : 'text-sage',
        className,
      )}
    >
      {children}
    </span>
  );
}

interface SectionCounterProps {
  number: string;
  label: string;
  className?: string;
  dark?: boolean;
}

export function SectionCounter({ number, label, className, dark = false }: SectionCounterProps) {
  return (
    <div className={cn('flex items-baseline gap-3', className)}>
      <span
        className={cn(
          'text-4xl md:text-5xl font-display font-extrabold leading-none',
          dark ? 'text-white/20' : 'text-forest/20',
        )}
      >
        {number}
      </span>
      <span className={cn('text-xs uppercase tracking-widest', dark ? 'text-white/60' : 'text-sage')}>{label}</span>
    </div>
  );
}
