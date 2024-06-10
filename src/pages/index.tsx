import Head from 'next/head'
import { Container } from '@/components/Layout/containers/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/Icons'
import Projects from '@/components/Projects'
import FadeIn from '@/components/Layout/containers/FadeIn'
import Project from '@/models/ProjectModel'
import dbConnect from '@/lib/dbConnect'
import Link from 'next/link'
import { GetStaticProps } from 'next'

function SocialLink({ icon: Icon, ...props }) {
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
          <div className="mb-36 flex flex-col items-center sm:mb-44 md:mb-56">
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

export const getStaticProps: GetStaticProps = async () => {
  await dbConnect()

  const projects = await Project.find({ hidden: false })

  const descendingProjects = projects.sort((a, b) => (a.date < b.date ? 1 : -1))

  return {
    props: { projects: JSON.parse(JSON.stringify(descendingProjects)) },
  }
}
