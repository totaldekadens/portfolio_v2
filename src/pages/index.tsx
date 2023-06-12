import Head from 'next/head'
import { Container } from '@/components/Layout/containers/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/Icons'
import Projects from '@/components/Projects'
import FadeIn from '@/components/Layout/containers/FadeIn'
import Project from '@/models/ProjectModel'
import dbConnect from '@/lib/dbConnect'
import Link from 'next/link'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link href={props.href} className="group -m-1 p-1" {...props}>
      <Icon className="fill-dark-50 group-hover:fill-light-300 dark:group-hover:fill-light-300 h-6 w-6 transition dark:fill-zinc-400" />
    </Link>
  )
}

export default function Home({ projects }) {
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
      <FadeIn>
        <Container className={'mt-24 md:mt-44'}>
          <div className="max-w-3xl xl:max-w-4xl ">
            <h1 className="text-light-300 dark:text-light-300 text-4xl font-semibold tracking-tight sm:text-5xl xl:text-6xl ">
              <span className="text-dark-200 dark:text-light-100">
                Web developer,{' '}
              </span>
              cat mom and a hobby-ish carpenter.
            </h1>
            <p className="text-dark-100 dark:text-dark-50 mt-6 text-base xl:text-lg">
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
                href={'mailto:angelica.moberg@hotmail.com'}
                icon={MailIcon}
                aria-label="Contact by mail"
              />
            </div>
          </div>
        </Container>
        {projects ? <Projects projects={projects} /> : null}
      </FadeIn>
    </>
  )
}

export const getStaticProps = async () => {
  await dbConnect()

  const projects = await Project.find({})

  return { props: { projects: JSON.parse(JSON.stringify(projects)) } }
}
