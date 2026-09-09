import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

export function Container({
  children,
  className,
  size = 'default',
}: ContainerProps) {
  const sizeClasses = {
    narrow: 'max-w-3xl',
    default: 'max-w-6xl',
    wide: 'max-w-[1440px]',
  }

  return (
    <div
      className={cn(
        'mx-auto px-5 sm:px-8 lg:px-12',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  )
}
