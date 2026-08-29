import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  glass = false,
  hoverEffect = false,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-100/50',
          glass && 'glass-panel border-white/60 shadow-slate-200/50',
          hoverEffect && 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-slate-200',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
