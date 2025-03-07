import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/Layout/containers/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { Merit, meritPage as page } from '@/lib/data'
import FadeIn from '@/components/Layout/containers/FadeIn'
import Resume from '@/components/Resume'

interface ArticleProps {
  merit: Merit
}

export function Article({ merit }: ArticleProps) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title>{merit.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={merit.date}
          className="md:hidden"
          decorate
        >
          {formatDate(merit.date)}
        </Card.Eyebrow>
        <Card.Description>{merit.description}</Card.Description>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={merit.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(merit.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function Merits() {
  return (
    <>
      <Head>
        <title>{`${page.title} - Angelica Moberg Skoglund`}</title>
        <meta
          property="og:image"
          content="https://mobergskoglund.se/logos/Angelica_MS_dark.webp"
        />
      </Head>
      <FadeIn>
        <SimpleLayout title={page.title} intro={page.intro}>
          <div className="flex flex-col gap-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 xl:max-w-[1500px] xl:flex-row xl:justify-between">
            <div className="xl:min-w-xl  x flex flex-col space-y-16">
              {page.merits.map((merit, i) => (
                <Article key={i} merit={merit} />
              ))}
            </div>
            <Resume />
          </div>
        </SimpleLayout>
      </FadeIn>
    </>
  )
}
