'use client';

import React, { forwardRef, HTMLAttributes } from 'react';

export type CardSize = 'sm' | 'md' | 'lg';
export type CardVariant = 'default' | 'elevated' | 'outlined';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: CardSize;
  variant?: CardVariant;
  hover?: boolean;
  clickable?: boolean;
}

const sizeStyles: Record<CardSize, string> = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

const variantStyles: Record<CardVariant, string> = {
  default: `
    bg-[hsl(var(--color-elevated))]
    border border-[hsl(var(--color-border))/0.6]
  `,
  elevated: `
    bg-[hsl(var(--color-elevated))]
    shadow-md
    border border-[hsl(var(--color-border))/0.4]
  `,
  outlined: `
    bg-transparent
    border-2 border-[hsl(var(--color-border))]
  `,
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      size = 'md',
      variant = 'default',
      hover = false,
      clickable = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      rounded-[var(--radius-lg)] motion-standard
      text-[hsl(var(--color-card-foreground))]
      transition-shadow duration-[var(--motion-duration-hover)] [transition-timing-function:var(--ease-standard)]
    `;

    const hoverStyles = hover
      ? `
        hover:shadow-lg
        hover:border-[hsl(var(--color-primary-300))]
        hover:-translate-y-1
      `
      : '';

    const clickableStyles = clickable
      ? `
        cursor-pointer
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[hsl(var(--color-ring))]
        focus-visible:ring-offset-2
        focus-visible:shadow-[0_0_0_5px_hsl(var(--color-ring)/0.20)]
        active:scale-[var(--press-scale)]
      `
      : '';

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${hoverStyles} ${clickableStyles} ${className}`.trim()}
        tabIndex={clickable ? 0 : undefined}
        role={clickable ? 'button' : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card subcomponents for structured content
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`mb-3 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, as: Component = 'h3', className = '', ...props }, ref) => (
    <Component
      ref={ref}
      className={`text-lg font-semibold text-[hsl(var(--color-card-foreground))] ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
);

CardTitle.displayName = 'CardTitle';

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`text-[hsl(var(--color-muted-foreground))] ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
);

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`mt-4 pt-3 border-t border-[hsl(var(--color-border))] ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
);

CardFooter.displayName = 'CardFooter';

export default Card;
