import { Fragment, useEffect, useRef, useState, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Layout/containers/Container'
//import avatarImage from '@/images/newlogo.png'
import LogoutButton from '../Buttons/LogoutButton'
import { AdminIcon, SunIcon, MoonIcon, CloseIcon } from '../Icons'

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block w-full py-5">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button
        aria-label="Go to mobile menu"
        className="group flex items-center rounded-full px-2 py-2 text-sm font-medium text-zinc-800   backdrop-blur dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
      >
        <div className="space-y-2">
          <span className="bg-light-400 dark:bg-light-200  block h-0.5 w-8 animate-pulse"></span>
          <span className="bg-light-400 dark:bg-light-200 block h-0.5 w-4 animate-pulse"></span>
          <span className="bg-light-400 dark:bg-light-200 block h-0.5 w-2 animate-pulse"></span>
        </div>
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Popover.Panel
            focus
            className="bg-light-400 dark:bg-dark-300 fixed inset-x-4 bottom-0 left-32 right-0 top-0  z-50 origin-top px-8 py-5 "
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="text-light-100 dark:text-light-100 h-10 w-10" />
              </Popover.Button>
              <div className=" flex  md:hidden ">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>

            <nav className="mt-10 flex h-full w-full  ">
              <ul className="divide-light-50/20 text-light-100 dark:text-light-200 -my-2  flex w-full flex-col divide-y text-3xl dark:divide-zinc-100/5">
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/projects">Projects</MobileNavItem>
                <MobileNavItem href="/tech">Tech</MobileNavItem>
                <MobileNavItem href="/merits">Merits</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
    <li className="white whitespace-nowrap">
      <Link
        href={href}
        className={clsx(
          ' relative block  px-3 py-2 transition',
          isActive
            ? 'text-dark-200 dark:text-light-100 border-b transition '
            : 'hover:text-dark-100 dark:hover:text-light-300'
        )}
      >
        {children}
        {isActive && (
          <span className="h-pxbg-gradient-to-r absolute inset-x-1 -bottom-px from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="text-light-400 dark:text-light-100 flex rounded-lg px-3 text-sm font-medium backdrop-blur  md:text-base   ">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/tech">Tech</NavItem>
        <NavItem href="/merits">Merits / Resumé</NavItem>
      </ul>
    </nav>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()
    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full  px-3 py-2 shadow-lg  backdrop-blur transition  dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="fill-light-400 stroke-light-200 md:stroke-light-400   md:group-hover:stroke-dark-100   h-6 w-6 transition group-hover:fill-teal-50 group-hover:stroke-zinc-500 dark:hidden  md:fill-zinc-100" />{' '}
      <MoonIcon className="stroke-light-200 [@media(prefers-color-scheme:dark)]:group-hover:stroke-light-300 hidden  h-6 w-6 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  )
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function HomeContainer({ className, ...props }) {
  return (
    <div
      className={clsx(className, 'rounded-lg p-0.5 backdrop-blur ')}
      {...props}
    />
  )
}

function HomeButton({ title, className }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(
        className,
        'dark:text-light-100 text-light-400 hover:text-dark-100 dark:hover:text-light-300 pointer-events-auto relative whitespace-nowrap px-3  py-2 font-medium transition'
      )}
    >
      {title}
    </Link>
  )
}

function Home({ large = false, className, ...props }) {
  return (
    <>
      <HomeButton
        title={'Angelica M S'}
        className={'block md:hidden xl:block'}
      />
      <HomeButton title={'Angelica'} className={'hidden md:block xl:hidden'} />
    </>
  )
}

export function Header() {
  let isHomePage = useRouter().pathname === '/'

  let headerRef = useRef(null)
  let avatarRef = useRef(null)
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateStyles() {
      updateHeaderStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{ position: 'var(--header-position)' }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{ position: 'var(--header-inner-position)' }}
          >
            <div className="relative flex justify-between gap-4 md:pt-12">
              <div className="flex flex-1 ">
                <HomeContainer>
                  <Home />
                </HomeContainer>
              </div>

              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className=" hidden justify-end md:flex md:flex-1">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
              <div className="pointer-events-auto hidden items-center md:flex">
                <Link
                  aria-label="Go to admin panel"
                  href={'/admin/settings/account'}
                >
                  <AdminIcon className="hover:fill-dark-200 dark:hover:fill-light-300 fill-light-400 dark:fill-light-50 h-6 w-6 transition" />
                </Link>
                <LogoutButton className="group-hover:fill-light-300 dark:group-hover:fill-light-300 h-6 w-6 stroke-red-600 transition dark:stroke-red-600" />
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  )
}
