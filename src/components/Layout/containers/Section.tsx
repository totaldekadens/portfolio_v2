import { useId } from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: Props) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="md:dark:border-zinc-700/40 md:border-l md:border-zinc-100 md:pl-6"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2
          id={id}
          className="text-sm font-semibold text-light-300 dark:text-light-300"
        >
          {title}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}