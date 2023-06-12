import clsx from 'clsx'

interface Props {
  className: string
  children?: React.ReactNode
}

export function Prose({ children, className }: Props) {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
  )
}
