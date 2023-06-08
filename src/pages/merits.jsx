import Head from 'next/head'
import CVButton from '@/components/CVButton'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'
import logoAtria from '@/images/logos/atria.png'
import logoH5 from '@/images/logos/h5.png'
import logoWallmander from '@/images/logos/wallmander.png'
import logoWallmanderWhite from '@/images/logos/logo-white-transparant.png'
import logoIngram from '@/images/logos/ingram.png'
import { motion } from 'framer-motion'
import FadeInPage from '@/components/FadeInPage'
function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-light-300 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-light-300 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Wallmander & Co',
      title: 'Web developer - Internship',
      logoDark: logoWallmanderWhite,
      logoLight: logoWallmander,
      start: '2023',
      end: '2023',
    },
    {
      company: 'H5 Förnyelsebyrå AB',
      title: 'Web developer - Internship',
      logoDark: logoH5,
      logoLight: logoH5,
      start: '2022',
      end: '2022',
    },
    {
      company: 'Atria Sweden',
      title: 'Production Coordinator',
      logoDark: logoAtria,
      logoLight: logoAtria,
      start: '2021',
      end: '2021',
    },
    {
      company: 'Ingram Micro Logistics AB',
      title: 'Group leader / Specialist ',
      logoDark: logoIngram,
      logoLight: logoIngram,
      start: '2011',
      end: '2021',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40 xl:min-w-[466px] xl:max-w-[466px]">
      <h2 className="flex text-sm font-semibold text-dark-200 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none " />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50  dark:ring-0">
              <Image
                src={role.logoLight}
                alt=""
                className="h-7 w-7 object-contain"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-dark-200 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-dark-50 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <CVButton
        title="Download CV"
        href="/cv/Angelica_Moberg_Skoglund_CV.pdf"
      />
    </div>
  )
}

const list = [
  {
    author: 'Angelica Moberg Skoglund',
    date: '2023-05-16',
    title: 'Best Master Thesis in the class',
    description:
      'Angelica och Jacob har inte bara utvecklat en webbutik för smink med ett innovativt koncept utan en hel E-handelsplattform med ett egenutvecklat backend. Nästan 20 000 kodrader i bland annat Next.js och Mantine.dev resulterade i en utbyggnadsbar webbproduktion och en väldigt bra grund att stå på. Teknologierna tillsammans med MongoDB har tillämpats på bästa möjliga sätt. Angelica och Jacob demonstrerar förmågan att gå från idé till färdig produkt på kort tid.',
  },
  {
    author: 'Angelica Moberg Skoglund',
    date: '2023-05-16',
    title:
      'Graduated in Web development with focus on E-commerce at Medieinstitutet AB Göteborg',
    description: 'With VG in all courses',
  },
]

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex() {
  return (
    <>
      <Head>
        <title>Merits / Resumé - Angelica Moberg Skoglund</title>
        <meta name="description" content="Some of my merits." />
      </Head>
      <FadeInPage>
        <SimpleLayout title="Merits / Resumé" intro="">
          <div className="flex flex-col gap-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 xl:max-w-[1500px] xl:flex-row xl:justify-between">
            <div className="xl:min-w-xl  x flex flex-col space-y-16">
              {list.map((article, i) => (
                <Article key={i} article={article} />
              ))}
            </div>
            <Resume />
          </div>
        </SimpleLayout>
      </FadeInPage>
    </>
  )
}
