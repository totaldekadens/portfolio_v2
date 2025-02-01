import Head from 'next/head'
import { Container } from '@/components/Layout/containers/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/Icons'
import FadeIn from '@/components/Layout/containers/FadeIn'
import Project from '@/models/ProjectModel'
import dbConnect from '@/lib/dbConnect'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { SimpleLayout } from '@/components/Layout/containers/SimpleLayout'
import Resume from '@/components/Resume'
import { Article } from './merits'
import { meritPage } from '@/lib/data'

export function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link href={props.href} className="group -m-1 p-1" {...props}>
      <Icon className="fill-dark-50 group-hover:fill-light-300 dark:group-hover:fill-light-300 h-8 w-8 transition dark:fill-zinc-400 " />
    </Link>
  )
}

export default function Home({ projects }) {
  return (
    <>
      <Head>
        {/* Todo:  Make this dynamic later */}
        <title>Angelica Moberg Skoglund - Web Developer</title>
        <meta
          name="description"
          content="Web developer based in Sweden´s
            little Tuscany, Skene in Marks kommun."
        />
        <meta
          property="og:image"
          content="https://mobergskoglund.se/logos/Angelica_MS_dark.webp"
        />
      </Head>
      <FadeIn>
        <Container className={'mt-24 w-full md:mt-56 '}>
          <div className="mb-8 flex flex-col items-center sm:mb-8 md:mb-8">
            {' '}
            {/* md:items-start  */}
            <h1 className="text-dark-200 dark:text-light-100 text-center text-2xl font-semibold tracking-tight sm:text-4xl md:text-start md:text-5xl xl:text-6xl ">
              {/* Todo:  Make this dynamic later */}
              Hello there, I'm Angelica!
            </h1>
            <p className="text-dark-100 dark:text-dark-50 mt-6 text-center text-base md:text-start xl:text-lg">
              A web developer based in Sweden´s little Tuscany, Skene in Mark's
              municipality.
            </p>{' '}
            <p className="text-dark-100 dark:text-dark-50 mt-6 text-center text-sm italic xl:text-base">
              This was previously my portfolio site that I used while searching
              for my first job as a developer. Although it will no longer be
              updated, I am keeping the site as a cherished memory to look back
              on.
            </p>{' '}
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://github.com/totaldekadens"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
                target="_blank"
              />
              <SocialLink
                href="https://www.linkedin.com/in/angelica-moberg-skoglund-012aa2212/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
                target="_blank"
              />
              <SocialLink
                href={'mailto:angelica.moberg@hotmail.com'}
                icon={MailIcon}
                aria-label="Contact by mail"
              />
            </div>
          </div>
        </Container>

        <div className="mb-28 flex h-16 items-end justify-center sm:mb-0 sm:h-40">
          <span className="bg-light-400 dark:bg-light-200  block h-0.5 w-1/2 animate-pulse"></span>
        </div>
        <SimpleLayout title="" intro={''}>
          <div className="md:mb-30 mb-10 flex flex-col items-start sm:mb-28 sm:items-center">
            <h2 className="text-dark-200 dark:text-light-100 text-center text-xl font-semibold tracking-tight sm:text-3xl md:text-start md:text-4xl xl:text-5xl ">
              {/* Todo:  Make this dynamic later */}
              Merits / Resumé
            </h2>
          </div>
          <div className="flex flex-col gap-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 xl:max-w-[1500px] xl:flex-row xl:justify-between">
            <div className="xl:min-w-xl  x flex flex-col space-y-16">
              {meritPage.merits.map((merit, i) => (
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

export const getStaticProps: GetStaticProps = async () => {
  await dbConnect()

  const projects = await Project.find({ hidden: false })

  const descendingProjects = projects.sort((a, b) => (a.date < b.date ? 1 : -1))

  return {
    props: { projects: JSON.parse(JSON.stringify(descendingProjects)) },
  }
}
