import clsx from 'clsx'
import Link from 'next/link'

const variantStyle = {
  danger: ' text-light-50 bg-red-600 hover:bg-red-500',
  positive:
    'bg-indigo-600 dark:text-white dark:bg-indigo-500 dark:hover:bg-indigo-400 text-light-50 hover:bg-indigo-500 focus-visible:outline-dark-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  normal:
    'bg-light-400 dark:text-dark-300 dark:bg-light-100/90 text-light-50 hover:bg-light-400/60 focus-visible:outline-dark-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  modest:
    'bg-light-300 dark:text-light-50 text-light-50 hover:bg-light-300/80 dark:bg-white/10 dark:hover:bg-white/20',
}

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: 'modest' | 'normal' | 'positive' | 'danger'
  title: string
  className?: string
  href?: string
}

interface LinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'modest' | 'normal' | 'positive' | 'danger'
  title: string
  className?: string
  href?: string
}

const Button = ({
  variant,
  className,
  href,
  title,
  ...props
}: ButtonProps & LinkProps) => {
  className = clsx(
    'rounded-md px-3 py-2 text-sm font-semibold  shadow-sm',
    variantStyle[variant],
    className
  )
  return href ? (
    <Link href={href} className={className} {...props}>
      {title}
    </Link>
  ) : (
    <button className={className} {...props}>
      {title}
    </button>
  )
}

export default Button
