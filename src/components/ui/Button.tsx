'use client';

import React, { forwardRef, ButtonHTMLAttributes, useEffect, useRef, useState } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[hsl(var(--color-primary))]
    text-[hsl(var(--color-primary-foreground))]
    hover:bg-[hsl(var(--color-primary-hover))]
    focus-visible:ring-[hsl(var(--color-ring))]
    shadow-sm
    hover:-translate-y-0.5
  `,
  secondary: `
    bg-[hsl(var(--color-secondary))]
    text-[hsl(var(--color-secondary-foreground))]
    hover:bg-[hsl(var(--color-secondary-hover))]
    focus-visible:ring-[hsl(var(--color-ring))]
  `,
  outline: `
    border
    border-[hsl(var(--color-border))]
    bg-transparent
    text-[hsl(var(--color-foreground))]
    hover:bg-[hsl(var(--color-muted))]
    focus-visible:ring-[hsl(var(--color-ring))]
  `,
  ghost: `
    bg-transparent
    text-[hsl(var(--color-foreground))]
    hover:bg-[hsl(var(--color-muted))]
    focus-visible:ring-[hsl(var(--color-ring))]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  icon: 'h-9 w-9 p-0 flex items-center justify-center',
};

const LoadingSpinner = ({ className = '' }: { className?: string }) => (
  <svg
    className={`animate-spin h-4 w-4 ${className}`.trim()}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      children,
      className = '',
      type = 'button',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const localRef = useRef<HTMLButtonElement | null>(null);
    const prevLoadingRef = useRef(loading);
    const releaseWidthTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [lockedWidth, setLockedWidth] = useState<number | undefined>(undefined);
    const [showCompletionFx, setShowCompletionFx] = useState(false);

    const isDisabled = disabled || loading;

    useEffect(() => {
      const wasLoading = prevLoadingRef.current;

      if (!wasLoading && loading && localRef.current) {
        setLockedWidth(localRef.current.offsetWidth);
        setShowCompletionFx(false);
      }

      if (wasLoading && !loading) {
        if (releaseWidthTimerRef.current) clearTimeout(releaseWidthTimerRef.current);
        releaseWidthTimerRef.current = setTimeout(() => setLockedWidth(undefined), 260);

        setShowCompletionFx(true);
        if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
        feedbackTimerRef.current = setTimeout(() => setShowCompletionFx(false), 760);
      }

      prevLoadingRef.current = loading;
    }, [loading]);

    useEffect(() => {
      return () => {
        if (releaseWidthTimerRef.current) clearTimeout(releaseWidthTimerRef.current);
        if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
      };
    }, []);

    const baseStyles = `
      relative isolate overflow-hidden motion-standard
      inline-flex items-center justify-center gap-2
      font-medium rounded-[var(--radius-md)]
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      focus-visible:shadow-[0_0_0_4px_hsl(var(--color-ring)/0.22)]
      active:scale-[var(--press-scale)]
      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    `;

    const setButtonRef = (node: HTMLButtonElement | null) => {
      localRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
    };

    return (
      <button
        ref={setButtonRef}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        aria-label={ariaLabel}
        data-loading={loading ? 'true' : 'false'}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${loading ? 'btn-loading-morph' : ''} ${className}`.trim()}
        style={lockedWidth ? { width: `${lockedWidth}px` } : undefined}
        {...props}
      >
        {showCompletionFx && (
          <span className="btn-particle-layer" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <span
                key={idx}
                className="btn-particle"
                style={{
                  ['--particle-angle' as string]: `${idx * 60}deg`,
                  ['--particle-delay' as string]: `${idx * 36}ms`,
                }}
              />
            ))}
          </span>
        )}

        {loading && <span className="btn-loading-sheen" aria-hidden="true" />}

        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {loading && <LoadingSpinner className="btn-spinner-pop" />}
          <span className={`transition-opacity duration-200 ${loading ? 'opacity-95' : 'opacity-100'}`}>
            {children}
          </span>
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
