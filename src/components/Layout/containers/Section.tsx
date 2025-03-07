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
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-start justify-center gap-y-8 md:grid-cols-4">
        <h2
          id={id}
          className="text-light-400/60 dark:text-light-200/60 h-8 text-sm font-semibold"
        >
          {title}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
