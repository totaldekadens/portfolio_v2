import Head from 'next/head'
import { SimpleLayout } from '@/components/Layout/containers/SimpleLayout'
import Projects from '@/components/Projects'
import FadeIn from '@/components/Layout/containers/FadeIn'
import Project, { ProjectDocument } from '@/models/ProjectModel'
import dbConnect from '@/lib/dbConnect'
import { GetStaticProps } from 'next'
import Filters from '@/components/Filter'
import { useState } from 'react'

interface Props {
  projects: ProjectDocument[]
}

export default function ArticlesIndex({ projects }: Props) {
  const [currentProjects, setCurrentProjects] = useState(projects)
  return (
    <>
      <Head>
        <title>Projects - Angelica Moberg Skoglund</title>
        <meta
          name="description"
          content="Some of my projects. Please check out my Github for more."
        />
      </Head>
      <FadeIn>
        <SimpleLayout
          title="Projects"
          intro="Check out some of my projects I've done during my education and afterwards. Want to see more? Please visit my Github page."
        />
        {projects ? (
          <>
            <Filters
              projects={projects}
              setCurrentProjects={setCurrentProjects}
            />
            <Projects projects={projects} currentProjects={currentProjects} />
          </>
        ) : null}
      </FadeIn>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  await dbConnect()

  const projects = await Project.find({ hidden: false })
  const descendingProjects = projects.sort((a, b) => (a.date < b.date ? 1 : -1))

  return { props: { projects: JSON.parse(JSON.stringify(descendingProjects)) } }
}
