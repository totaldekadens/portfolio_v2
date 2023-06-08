import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import Projects from '@/components/Projects'
import FadeInPage from '@/components/FadeInPage'

export default function ArticlesIndex() {
  return (
    <>
      <Head>
        <title>Projects - Angelica Moberg Skoglund</title>
        <meta
          name="description"
          content="Some of my projects. Please check out my Github for more."
        />
      </Head>
      <FadeInPage>
        <SimpleLayout
          title="Projects"
          intro="This page is under construction. Please checkout all my projects on my Github-page"
        />
        <Projects />
      </FadeInPage>
    </>
  )
}
