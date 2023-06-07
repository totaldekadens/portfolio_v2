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
import Projects from '@/components/Projects'
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
      <div>
        <SimpleLayout
          title="Projects"
          intro="This page is under construction. Please checkout all my projects on my Github-page"
        />
        <Projects />
      </div>
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
