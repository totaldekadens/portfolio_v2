import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import Image from 'next/image'
import Link from 'next/link'
import Badges from '@/components/Badges'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { ChevronRightIcon } from '@/components/Card'
import { projects } from '@/lib/data'
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const images = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Projects - Angelica Moberg Skoglund</title>
        <meta
          name="description"
          content="Some of my projects. Please check out my Github for more."
        />
      </Head>
      <SimpleLayout
        title="Projects"
        intro="This page is under construction. Please checkout all my projects on my Github-page"
      >
        <Container className="mt-24 md:mt-28">
          <motion.div
            initial="hidden"
            animate="show"
            variants={variants}
            className="mx-auto grid max-w-xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-2"
          >
            {projects.map((article, i) => (
              <Link key={i} href={'/projects/' + article.slug}>
                <div className="relative rounded-lg">
                  <motion.img
                    src={article.image.src}
                    alt="bild"
                    className="rounded-lg"
                    variants={images}
                  />

                  <div className="absolute top-0 right-0 left-0 bottom-0 hidden cursor-pointer flex-col rounded-lg bg-black/70 opacity-0 transition duration-300 ease-in-out hover:opacity-100 sm:flex">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8">
                      <h2 className="text-2xl font-medium text-white">
                        {article.title}
                      </h2>

                      <Badges keys={article.keys} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </Container>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
