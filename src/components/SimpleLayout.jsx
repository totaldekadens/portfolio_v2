import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32 xl:mt-40">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-dark-200 dark:text-zinc-100 sm:text-5xl xl:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-dark-100 dark:text-zinc-400 xl:text-lg">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
