import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/Layout/containers/Container'
import { ChevronRightIcon } from '@/components/Card'
import Badges from '@/components/Badges'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const Project = ({ project }) => {
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
        triggerOnce
        ref={ref2}
        className="relative rounded-lg "
      >
        <Image
          width={600}
          height={600}
          src={"/" + project.image.src}
          alt="bild"
          className=" rounded-lg object-contain"
        />
        <div
          style={{
            backgroundColor: project.accentColor,
            inset: '-2px',
          }}
          className={`absolute flex cursor-pointer flex-col rounded-lg bg-light-100 opacity-0 transition duration-300 ease-in-out dark:bg-dark-300 md:hover:opacity-100`}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8">
            <h2 className="text-2xl font-medium text-dark-200 dark:text-light-100">
              {project.title}
            </h2>
            <Badges keys={project.keys} />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

const Projects = ({projects}) => {
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

  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: false,
  })

  return (
    <>
      <Container className="mt-24 hidden md:mt-28 md:flex">
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
                    <div className="relative rounded-lg ">
                      <motion.img
                        src={"/" + project.image.src}
                        alt="bild"
                        className=" rounded-lg object-contain"
                        variants={images}
                      />

                      <div
                        style={{
                          backgroundColor: project.accentColor,
                          inset: '-2px',
                        }}
                        className={`absolute flex cursor-pointer flex-col rounded-lg bg-light-100 opacity-0 transition duration-300 ease-in-out dark:bg-dark-300 md:hover:opacity-100`}
                      >
                        <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8">
                          <h2 className="text-2xl font-medium text-dark-200 dark:text-light-100">
                            {project.title}
                          </h2>
                          <Badges keys={project.keys} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              : projects.map((project, i) => (
                  <Link key={i} href={'/projects/' + project.slug}>
                    <div className="relative rounded-lg ">
                      <motion.img
                        src={"/" + project.image.src}
                        alt="bild"
                        className=" rounded-lg object-contain"
                        variants={images}
                      />

                      <div
                        style={{
                          backgroundColor: project.accentColor,
                          inset: '-2px',
                        }}
                        className={`absolute flex cursor-pointer flex-col rounded-lg bg-light-100 opacity-0 transition duration-300 ease-in-out dark:bg-dark-300 md:hover:opacity-100`}
                      >
                        <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8">
                          <h2 className="text-2xl font-medium text-dark-200 dark:text-light-100">
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
              className=" sm:text-md mt-10 flex w-full items-center justify-end text-sm font-semibold text-dark-200 dark:text-light-100 "
            >
              Go to all projects
              <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
            </Link>
          ) : null}
        </div>
      </Container>

      {/* Tab and Mobile display */}

      <Container className="s mt-24 md:mt-28 md:hidden">
        <div className="mx-auto max-w-xl  lg:max-w-none ">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-2">
            {pathname == '/'
              ? projects
                  .slice(0, 4)
                  .map((project, i) => <Project key={i} project={project} />)
              : projects.map((project, i) => (
                  <Project key={i} project={project} />
                ))}
          </div>
          {pathname == '/' ? (
            <Link
              href={'/projects'}
              className=" sm:text-md mt-10 flex w-full items-center justify-end text-sm font-semibold text-dark-200 dark:text-light-100 "
            >
              Go to all projects
              <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
            </Link>
          ) : null}
        </div>
      </Container>
    </>
  )
}

export default Projects
