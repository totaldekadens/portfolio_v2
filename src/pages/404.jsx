import Head from 'next/head'
import Link from 'next/link'
import { Container } from '@/components/Layout/containers/Container'
import FadeIn from '@/components/Layout/containers/FadeIn'

export default function Home() {
  return (
    <>
      <Head>
        <title>404 - Page not found - Angelica Moberg Skoglund</title>
        <meta
          name="description"
          content="Web developer based in Sweden´s
            little Tuscany, Skene in Marks kommun."
        />
        <meta
          property="og:image"
          content="https://mobergskoglund.se/newlogo.png"
        />
      </Head>
      <FadeIn>
        <Container className={'mt-24 md:mt-44'}>
          <div className="flex w-full justify-center">
            <h1 className="text-4xl font-semibold tracking-tight text-light-300 dark:text-light-300 sm:text-5xl">
              404 - Page not found
            </h1>
          </div>
        </Container>
      </FadeIn>
    </>
  )
}
