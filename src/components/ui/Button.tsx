import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  href?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium tracking-[0.2em] uppercase transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses = {
    primary: 'bg-gold text-charcoal hover:bg-gold-light',
    secondary:
      'border border-ivory/25 text-ivory hover:border-gold hover:text-gold',
    ghost: 'text-ivory/80 hover:text-gold',
  }

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-[11px]',
    md: 'px-8 py-3.5 text-xs',
    lg: 'px-10 py-4 text-xs',
  }

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}
