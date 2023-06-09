import { Container } from '@/components/Layout/containers/Container'

interface Props {
  title: string
  intro: string
  children?: React.ReactNode
}

export function SimpleLayout({ title, intro, children }: Props) {
  return (
    <Container className="mt-16 sm:mt-32 xl:mt-40">
      <header className="max-w-2xl">
        <h1 className="text-dark-200 text-4xl font-semibold tracking-tight dark:text-zinc-100 sm:text-5xl xl:text-6xl">
          {title}
        </h1>
        <p className=" text-light-400/80 dark:text-light-100/80 mt-6 text-base  xl:text-lg">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
