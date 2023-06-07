import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { ChevronRightIcon } from '@/components/Card'
import Badges from '@/components/Badges'
import { projects } from '@/lib/data'
import { useRouter } from 'next/router'
const Projects = () => {
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
    <Container className="mt-24 md:mt-28">
      <div className="mx-auto max-w-xl  lg:max-w-none ">
        <motion.div
          initial="hidden"
          animate="show"
          variants={variants}
          className="mx-auto grid max-w-xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-2"
        >
          {projects.map((project, i) => (
            <Link key={i} href={'/projects/' + project.slug}>
              <div className="relative rounded-lg ">
                <motion.img
                  src={project.image.src}
                  alt="bild"
                  className="h-full rounded-lg object-cover"
                  variants={images}
                />

                <div
                  style={{ backgroundColor: project.accentColor }}
                  className={`absolute top-0 right-0 left-0 bottom-0 flex cursor-pointer flex-col rounded-lg bg-light-100 opacity-0 transition duration-300 ease-in-out dark:bg-dark-300 md:hover:opacity-100`}
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
  )
}

export default Projects
