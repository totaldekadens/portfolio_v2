import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { ChevronRightIcon } from '@/components/Card'
import CVButton from '@/components/CVButton'
import Badges from '@/components/Badges'

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

export function ArrowRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-right"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12l14 0"></path>
      <path d="M13 18l6 -6"></path>
      <path d="M13 6l6 6"></path>
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-dark-50 transition group-hover:fill-light-300 dark:fill-zinc-400 dark:group-hover:fill-light-300" />
    </Link>
  )
}

export function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

import { projects } from '@/lib/data'
export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Angelica Moberg Skoglund - Web developer, cat mom and a hobby-ish
          carpenter.
        </title>
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
      <Container className={'mt-24 md:mt-44'}>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-light-300 dark:text-light-300 sm:text-5xl">
            <span className="text-dark-200 dark:text-light-100">
              Web developer,{' '}
            </span>
            cat mom and a hobby-ish carpenter.
          </h1>
          <p className="mt-6 text-base text-dark-100 dark:text-dark-50">
            Hello! I’m Angelica, a newly graduated web developer based in
            Sweden´s little Tuscany, Skene in Marks kommun.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/totaldekadens"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/angelica-moberg-skoglund-012aa2212/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="mailto:angelica.moberg@hotmail.com"
              icon={MailIcon}
              aria-label="Contact by mail"
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto max-w-xl  lg:max-w-none ">
          <motion.div
            initial="hidden"
            animate="show"
            variants={variants}
            className="mx-auto grid max-w-xl grid-cols-1 gap-20 lg:max-w-none lg:grid-cols-2"
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

                  <div className="absolute top-0 right-0 left-0 bottom-0 flex cursor-pointer flex-col rounded-lg bg-black/70 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
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
          <Link
            href={'/projects'}
            className="mt-10 flex w-full items-center justify-end text-sm font-semibold text-dark-200 dark:text-light-100 "
          >
            Go to all projects
            <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
          </Link>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
