import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container } from '@/components/Layout/containers/Container'
import { formatDate } from '@/lib/formatDate'
import FadeIn from '@/components/Layout/containers/FadeIn'
import { GitHubIcon, LinkIcon, ArrowLeftIcon } from '@/components/Icons'
import Link from 'next/link'
import dbConnect from '@/lib/dbConnect'
import  Project  from '@/models/ProjectModel'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 ml-6 p-1" target="_blank" {...props}>
      <Icon className=" h-6 w-6 fill-dark-50 transition group-hover:fill-light-300 dark:fill-zinc-400 dark:group-hover:fill-light-300 md:h-10 md:w-10" />
    </Link>
  )
}

function ArticleLayout({ previousPathname, project }) {
  return (
    <>
      {project ? (
        <>
          <Head>
            <title>{`${project.title} - Angelica Moberg Skoglund`}</title>
            <meta name="description" content={project.description} />
          </Head>
          <FadeIn>
            <Container className="mt-16 lg:mt-32">
              <div className="xl:relative">
                <div className="mx-auto max-w-7xl">
                  {previousPathname && (
                    <button
                      type="button"
                      onClick={() => router.back()}
                      aria-label="Go back to projects"
                      className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition  dark:bg-light-300/10 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:-left-12 xl:mt-0"
                    >
                      <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-light-200 dark:group-hover:stroke-zinc-400" />
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
                          <SocialLink
                            href={project.website}
                            aria-label=""
                            icon={LinkIcon}
                          />
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
                          className="z-20 mt-4 rounded-full bg-zinc-200 bg-light-300/60 px-2  py-1 text-[10px] text-light-50 dark:bg-zinc-800 dark:bg-dark-300/60  dark:text-light-200 md:py-0 md:text-xs "
                        >
                          {key}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <p
                        className={
                          project.description2
                            ? 'my-7 leading-relaxed text-dark-200/80 dark:text-dark-50'
                            : 'my-7 mb-20 leading-relaxed text-dark-200/80 dark:text-dark-50'
                        }
                      >
                        {project.description}
                      </p>
                      {project.description2 ? (
                        <p className=" mb-10 leading-relaxed text-dark-200/80 dark:text-dark-50">
                          {project.description2}
                        </p>
                      ) : null}
                      {project.sections.map((section, i) => {
                        return (
                          <div className="font-semibold text-dark-200 dark:text-light-100">
                            <h2 className="mt-[80px] mb-4  text-2xl">
                              {section?.title}
                            </h2>
                            <h3
                              className={
                                section.title ? ' mb-4 ' : 'mt-[40px] mb-4 '
                              }
                            >
                              {section?.subTitle}
                            </h3>

                            <p className="mb-8 text-base font-normal text-dark-100/80 dark:text-dark-50">
                              {section?.description}
                            </p>

                            {section.images.map((image, i) => (
                              <img
                                className={
                                  (section.title && i == 0) ||
                                  (section.subTitle && i == 0)
                                    ? 'my-1 rounded-2xl'
                                    : 'my-9 rounded-2xl'
                                }
                                src={"/" + image.src}
                                alt={image.alt}
                              />
                            ))}
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

export default ArticleLayout

export const getStaticPaths = async () => {

await dbConnect()
  const projects = await Project.find({})

  const paths = projects.map((project) => ({ params: { slug: project.slug }}))

  return {
    paths,
    fallback: true, 
  }
}

export const getStaticProps = async ({params}) => {
  await dbConnect()

  const project = await Project.findOne({slug: params?.slug})

  return { props: { project : JSON.parse(JSON.stringify(project))  }}
}