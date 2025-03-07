import clsx from 'clsx'

interface CardProps {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children?: React.ReactNode
}

interface CardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
}

interface CardTitleProps {
  as?: keyof JSX.IntrinsicElements
  href?: string
  children?: React.ReactNode
}

interface CardDescriptionProps {
  children?: React.ReactNode
}

interface CardCtaProps {
  children?: React.ReactNode
}

interface CardEyebrowProps {
  as?: keyof JSX.IntrinsicElements
  dateTime?: string
  decorate?: boolean
  className?: string
  children?: React.ReactNode
}

export function Card({
  as: Component = 'div',
  className,
  children,
}: CardProps) {
  return (
    <Component className={clsx(className, 'group relative flex  items-center')}>
      {children}
    </Component>
  )
}

Card.Link = function CardLink({ children }: CardLinkProps) {
  return (
    <>
      <div className="dark:bg-dark-300 absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition  group-hover:scale-100  group-hover:opacity-50 sm:-inset-x-6 sm:rounded-2xl" />
      <span className="absolute -inset-x-4 -inset-y-6   sm:-inset-x-6 sm:rounded-2xl sm:bg-transparent sm:bg-none" />
      <span className="relative z-10">{children}</span>
    </>
  )
}

Card.Title = function CardTitle({
  as: Component = 'h2',
  href,
  children,
}: CardTitleProps) {
  return (
    <Component className="text-dark-200 dark:text-light-100 text-base font-semibold tracking-tight">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({
  children,
}: CardDescriptionProps) {
  return (
    <p className="text-light-400/80 dark:text-light-100/80 relative z-10 mt-2 text-sm ">
      {children}
    </p>
  )
}

// Used for "date"
Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps) {
  return (
    <Component
      className={clsx(
        className,
        'dark:text-light-200/70 text-light-400/80 relative z-10 order-first mb-3 flex items-center text-sm',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}
