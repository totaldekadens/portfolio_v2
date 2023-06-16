import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/Layout/containers/Container'
import Badges from '@/components/Badges'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ChevronRightIcon } from './Icons'
import { ProjectDocument } from '@/models/ProjectModel'
import { formatDate } from '@/lib/formatDate'
import clsx from 'clsx'

interface ProjectsProps {
  projects: ProjectDocument[]
  currentProjects?: ProjectDocument[]
}
interface ProjectProps {
  project: ProjectDocument
  index: number
}

const Project = ({ project, index }: ProjectProps) => {
  const [ref2, inView2] = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  return (
    <Link href={'/projects/' + project.slug}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        ref={ref2}
        className="relative rounded-lg object-cover "
      >
        <Image
          priority={index == 0 || index == 1 ? true : false}
          width={580}
          height={351}
          src={'/' + project.image.src}
          alt="bild"
          className=" rounded-lg dark:border dark:border-white/10"
        />
        <div
          style={{
            inset: '-2px',
          }}
          className={`bg-light-100 dark:bg-dark-300 absolute flex cursor-pointer flex-col rounded-lg opacity-0 transition duration-300 ease-in-out md:hover:opacity-100`}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8">
            <span className="text-light-300/90 dark:text-light-100/50 text-sm">
              {formatDate(project.date) ? formatDate(project.date) : 'Ongoing'}
            </span>
            <h2 className="text-dark-200 dark:text-light-100 text-2xl font-medium">
              {project.title}
            </h2>
            <Badges keys={project.keys} />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

const Projects = ({ projects, currentProjects }: ProjectsProps) => {
  const { pathname } = useRouter()

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

  return (
    <>
      {!projects ? null : (
        <>
          {/* Desktop */}

          <Container
            className={clsx(
              'hidden md:flex',
              pathname == '/' ? `mt-24 md:mt-28` : `mt-4 md:mt-10`
            )}
          >
            <div className="mx-auto max-w-xl  lg:max-w-none ">
              <motion.div
                initial="hidden"
                animate="show"
                variants={variants}
                className="mx-auto grid max-w-xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-2"
              >
                {pathname == '/'
                  ? projects.slice(0, 4).map((project, i) => (
                      <Link key={i} href={'/projects/' + project.slug}>
                        <div className="relative h-full w-full rounded-lg ">
                          <motion.img
                            src={'/' + project.image.src}
                            alt="bild"
                            className=" h-full w-full rounded-lg  object-cover  dark:border dark:border-white/10"
                            variants={images}
                          />

                          <div
                            style={{
                              inset: '-2px',
                            }}
                            className={`bg-light-100 dark:bg-dark-300 absolute flex cursor-pointer flex-col rounded-lg opacity-0 transition duration-300 ease-in-out md:hover:opacity-100`}
                          >
                            <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8">
                              <span className="text-light-300/90 dark:text-light-100/50 text-sm">
                                {formatDate(project.date)
                                  ? formatDate(project.date)
                                  : 'Ongoing'}
                              </span>
                              <h2 className="text-dark-200 dark:text-light-100 text-2xl font-medium">
                                {project.title}
                              </h2>
                              <Badges keys={project.keys} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  : !currentProjects
                  ? null
                  : currentProjects.map((project, i) => (
                      <Link key={i} href={'/projects/' + project.slug}>
                        <div className="relative h-full rounded-lg ">
                          <motion.img
                            src={'/' + project.image.src}
                            alt="bild"
                            className=" h-full w-full rounded-lg object-cover dark:border dark:border-white/10"
                            variants={images}
                          />

                          <div
                            style={{
                              inset: '-2px',
                            }}
                            className={`bg-light-100 dark:bg-dark-300 absolute flex cursor-pointer flex-col rounded-lg opacity-0 transition duration-300 ease-in-out md:hover:opacity-100`}
                          >
                            <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8">
                              <span className="text-light-300/90 dark:text-light-100/50 text-sm">
                                {formatDate(project.date)
                                  ? formatDate(project.date)
                                  : 'Ongoing'}
                              </span>
                              <h2 className="text-dark-200 dark:text-light-100 text-2xl font-medium">
                                {project.title}
                              </h2>
                              <Badges keys={project.keys} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
              </motion.div>
              {pathname == '/' ? (
                <Link
                  href={'/projects'}
                  className=" sm:text-md text-dark-200 dark:text-light-100 mt-10 flex w-full items-center justify-end text-sm font-semibold "
                >
                  Go to all projects
                  <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
                </Link>
              ) : null}
            </div>
          </Container>

          {/* Tab and Mobile display */}

          <Container
            className={clsx(
              'md:hidden',
              pathname == '/' ? `mt-24 md:mt-28` : `mt-6 md:mt-10`
            )}
          >
            <div className="mx-auto max-w-xl  lg:max-w-none ">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-2">
                {pathname == '/'
                  ? projects
                      .slice(0, 4)
                      .map((project, i) => (
                        <Project index={i} key={i} project={project} />
                      ))
                  : !currentProjects
                  ? null
                  : currentProjects.map((project, i) => (
                      <Project index={i} key={i} project={project} />
                    ))}
              </div>
              {pathname == '/' ? (
                <Link
                  href={'/projects'}
                  className=" sm:text-md text-dark-200 dark:text-light-100 mt-10 flex w-full items-center justify-end text-sm font-semibold "
                >
                  Go to all projects
                  <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
                </Link>
              ) : null}
            </div>
          </Container>
        </>
      )}
    </>
  )
}

export default Projects
