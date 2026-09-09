import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={cn('max-w-2xl', alignClasses, className)}>
      {eyebrow && <p className="eyebrow mb-4 md:mb-5">{eyebrow}</p>}
      <h2 className="heading-xl">{title}</h2>
      {description && (
        <p className="body-lg text-muted mt-5">{description}</p>
      )}
    </div>
  )
}
