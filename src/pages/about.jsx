import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/profil.webp'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-dark-100 transition hover:text-dark-200 dark:text-light-200 dark:hover:text-light-200"
      >
        <Icon className="h-6 w-6 flex-none fill-dark-100 transition group-hover:fill-dark-50" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Angelica Moberg Skoglund</title>
        <meta name="description" content="I’m Angelica Moberg Skoglund." />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="flex w-full justify-center lg:pl-20 ">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square  rotate-3 rounded-2xl bg-zinc-100 object-cover  dark:bg-zinc-800 "
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-dark-200 dark:text-light-200 sm:text-5xl">
              Hi! I’m Angelica <span className="text-light-300">:)</span>
            </h1>
            <div className="mt-6 text-base text-dark-200/80 dark:text-zinc-400">
              <p className="mb-8">
                Something I´ve always liked since I was a kid is problem
                solving. Not like how it is with a Rubik´s cube, more like: "Oh
                crap, this happened and we need to fix it!" And with the odds
                against us, ofc. I guess I got that from my soccer years. My
                coach always told us. "It's not over until it's over, and a lot
                can happen if you want to." Some people quit, I don't.
                Challenges motivates me. I'm stubborn and positive. :)
              </p>
              <b className="dark:text-light-100">My nish?</b>
              <p className="mb-8">
                This one is so hard, because I’m right between frontend and
                backend at the moment. I know I like to work with functionality
                and problem solving (as mentioned), so I’ve been drawn to eg
                admin pages within projects in school and been the one ending up
                with creating the API’s.
              </p>
              <b className="dark:text-light-100">How I work?</b>
              <p className="mb-8">
                When I go back and look at how it was at my previous workplaces,
                I notice a pattern. I get a task or responsibility and I end up
                being really good at it (Maybe not so Swedish of me to say). I
                always want to get a good understanding of why I do things and
                not just how to do it. It is very important to me. As a
                co-worker I think I am perceived as very driven and ambitious. I
                have also heard that I'm comfortable to be around with. If
                someone wants a hug, I'm always there.
              </p>
              <b className="dark:text-light-100">Teamwork?</b>
              <p className="mb-8">
                I played soccer until I turned 23 so I’m a team player in the
                root. I have no problem helping out if someone is in need of
                help or brainstorming. Asking for help is neither a problem for
                me. We do it together and we complement each other, that’s my
                mindset.
              </p>{' '}
              <b className="dark:text-light-100">Leadership?</b>
              <p>
                In total I have had a leadership role in almost 7 years. I love
                being there for people and help them grow. My ambition is not to
                be a leader again, but I think it’s a good thing to mention
                about my past.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/totaldekadens"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/angelica-moberg-skoglund-012aa2212/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:angelica.moberg@hotmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                angelica.moberg@hotmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
