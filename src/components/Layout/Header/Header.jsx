import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from '@/components/Layout/containers/Container'
import LogoutButton from '../../Buttons/LogoutButton'
import { AdminIcon, SunIcon, MoonIcon } from '../../Icons'
import MobileNavigation from './MobileNavigation'
import DesktopNavigation from './DesktopNavigation'
import HomeButton from '@/components/Buttons/HomeButton'

export function ModeToggle() {
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
      <SunIcon className="fill-light-200 stroke-light-300 md:stroke-light-400   md:group-hover:stroke-dark-100   h-6 w-6 transition group-hover:fill-teal-50 group-hover:stroke-zinc-500 dark:hidden  md:fill-zinc-100" />{' '}
      <MoonIcon className="stroke-light-200 [@media(prefers-color-scheme:dark)]:group-hover:stroke-light-300 hidden  h-6 w-6 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  )
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
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
                <HomeButton
                  title={'Angelica M S'}
                  className={'block md:hidden xl:block'}
                />
                <HomeButton
                  title={'Angelica'}
                  className={'hidden md:block xl:hidden'}
                />
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
