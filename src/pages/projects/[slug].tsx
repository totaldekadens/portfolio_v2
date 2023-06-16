import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container } from '@/components/Layout/containers/Container'
import { formatDate } from '@/lib/formatDate'
import FadeIn from '@/components/Layout/containers/FadeIn'
import { GitHubIcon, LinkIcon, ArrowLeftIcon } from '@/components/Icons'
import Link from 'next/link'
import dbConnect from '@/lib/dbConnect'
import Project, { ProjectDocument } from '@/models/ProjectModel'
import { SocialLinkProps } from '../about'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

interface Props {
  previousPathname: string
  project: ProjectDocument
}

function SocialLink({ icon: Icon, href, ...props }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="group -m-1 ml-3 flex items-center p-1 sm:ml-6"
      target="_blank"
      {...props}
    >
      <Icon className=" fill-dark-50 group-hover:fill-light-300 dark:group-hover:fill-light-300 h-8 w-8 transition dark:fill-zinc-400 md:h-10 md:w-10" />
    </Link>
  )
}

function ProjectLayout({ previousPathname, project }: Props) {
  const router = useRouter()
  return (
    <>
      {project ? (
        <>
          <Head>
            <title>{`${project.title} - Angelica Moberg Skoglund`}</title>
            <meta name="description" content={project.description} />
          </Head>
          <FadeIn>
            <Container className="mt-16 md:mt-28 lg:mt-32">
              <div className="xl:relative">
                <div className="mx-auto max-w-7xl">
                  {previousPathname && (
                    <button
                      type="button"
                      onClick={() => router.back()}
                      aria-label="Go back to projects"
                      className="dark:bg-light-300/10 group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5  transition dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-left-12 xl:-top-1.5 xl:mt-0"
                    >
                      <ArrowLeftIcon className="dark:stroke-light-200 h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
                    </button>
                  )}

                  <article>
                    <header className="flex flex-col">
                      <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        {project.title}
                      </h1>
                      <time
                        dateTime={project.date}
                        className="order-first flex items-center  text-base text-zinc-400 dark:text-zinc-500"
                      >
                        <div className=" w-full border-l-2 border-zinc-200 dark:border-zinc-500 ">
                          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                          <span className="ml-3">
                            {formatDate(project.date)}
                          </span>
                        </div>
                        {project.website ? (
                          <Link
                            href={project.website}
                            aria-label=""
                            target="_blank"
                          >
                            <LinkIcon className=" dark:hover:stroke-light-300 stroke-dark-50 hover:stroke-light-300 transition dark:stroke-zinc-400" />
                          </Link>
                        ) : null}
                        {project.github ? (
                          <SocialLink
                            href={project.github}
                            aria-label=""
                            icon={GitHubIcon}
                          />
                        ) : null}
                      </time>
                    </header>

                    <div className="flex flex-wrap gap-2">
                      {project.keys.map((key, i) => (
                        <div
                          key={i}
                          className="bg-light-400/70 text-light-50 dark:bg-light-300/60 dark:text-light-200 z-20 mt-4  rounded-full px-2  py-1  text-[10px] md:py-0 md:text-xs "
                        >
                          {key}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <p
                        className={
                          'text-dark-200/80 dark:text-dark-50 my-7 mb-20 leading-relaxed'
                        }
                      >
                        {project.description}
                      </p>
                      {project.sections.map((section, i) => {
                        return (
                          <div
                            key={i}
                            className="text-dark-200 dark:text-light-100 font-semibold"
                          >
                            <h2 className="mb-4 mt-[80px]  text-2xl">
                              {section?.title}
                            </h2>
                            {section.subTitle ? (
                              <h3
                                className={
                                  section.title ? ' mb-4 ' : 'mb-4 mt-[40px] '
                                }
                              >
                                {section.subTitle}
                              </h3>
                            ) : null}
                            {section.description ? (
                              <p className="text-dark-100/90 dark:text-dark-50 mb-8 text-base font-normal">
                                {section.description}
                              </p>
                            ) : null}

                            {section.images?.map((image, i) => (
                              <img
                                key={i}
                                className={
                                  (section.title && i == 0) ||
                                  (section.subTitle && i == 0)
                                    ? 'my-1 rounded-2xl border border-black/5 dark:border-white/5 sm:dark:border-white/10'
                                    : 'my-9 rounded-2xl border border-black/5 dark:border-white/5 sm:dark:border-white/10'
                                }
                                src={'/' + image.src}
                                alt={image.alt}
                              />
                            ))}
                            {section.video && section.video.src ? (
                              <div className="rounded-lg">
                                <ReactPlayer
                                  url={section.video.src}
                                  playing
                                  loop
                                  controls
                                  muted
                                  width={'100%'}
                                  height={'100%'}
                                  style={{
                                    overflow: 'hidden',
                                    borderRadius: '16px',
                                  }}
                                />
                              </div>
                            ) : null}
                          </div>
                        )
                      })}
                    </div>
                  </article>
                </div>
              </div>
            </Container>
          </FadeIn>
        </>
      ) : null}
    </>
  )
}

export default ProjectLayout

export const getStaticPaths: GetStaticPaths = async () => {
  await dbConnect()
  const projects = await Project.find({ hidden: false })

  const paths = projects.map((project) => ({ params: { slug: project.slug } }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await dbConnect()

  const project = await Project.findOne({ slug: params?.slug })

  return { props: { project: JSON.parse(JSON.stringify(project)) } }
}
