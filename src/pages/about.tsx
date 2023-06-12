import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Layout/containers/Container'
import { MailIcon } from '@/components/Icons'
import portraitImage from '@/images/profil.webp'
import FadeIn from '@/components/Layout/containers/FadeIn'
import { aboutPage as page } from '@/lib/data'

export interface SocialLinkProps {
  href: string
  icon: (props: any) => JSX.Element
  className?: string
  children?: React.ReactNode
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: SocialLinkProps) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="text-dark-100 hover:text-dark-200 dark:text-light-200 dark:hover:text-light-200 group flex text-sm font-medium transition"
      >
        <Icon className="fill-dark-100 group-hover:fill-dark-50 h-6 w-6 flex-none transition" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Angelica Moberg Skoglund</title>
        <meta name="description" content="I’m Angelica Moberg Skoglund." />
      </Head>
      <FadeIn>
        <Container className="mt-16 sm:mt-32 xl:mt-40">
          <div className="lg:grid-rows-[auto_1fr] grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12">
            <div className="flex w-full justify-center lg:pl-20 ">
              <div className="max-w-xs px-2.5 lg:max-w-none xl:max-w-lg">
                <Image
                  src={portraitImage}
                  alt="Picture of me"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square  rotate-3 rounded-2xl bg-zinc-100 object-cover  dark:bg-zinc-800 "
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="text-dark-200 dark:text-light-200 text-4xl font-semibold tracking-tight sm:text-5xl xl:text-6xl">
                Hi! I’m Angelica <span className="text-light-300">:)</span>
              </h1>
              <div className="text-dark-200/80 mt-6 text-base dark:text-zinc-400 xl:mt-9 ">
                <p className="mb-8">{page.intro}</p>
                {page.sections.map((section) => (
                  <>
                    <b className="dark:text-light-100">{section.header}</b>
                    <p className="mb-8">{section.text}</p>
                  </>
                ))}
              </div>
            </div>
            <div className="lg:pl-20">
              <ul role="list">
                {page.socialIcons.map((icon) => (
                  <SocialLink
                    href={icon.href}
                    icon={icon.icon}
                    className="mt-4"
                  >
                    {icon.title}
                  </SocialLink>
                ))}
                <SocialLink
                  href={`mailto:${page.email}`}
                  icon={MailIcon}
                  className="dark:border-zinc-700/40 mt-8 border-t border-zinc-100 pt-8"
                >
                  {page.email}
                </SocialLink>
              </ul>
            </div>
          </div>
        </Container>
      </FadeIn>
    </>
  )
}
