import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from '@/components/Layout/containers/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-dark-100 dark:hover:text-light-300"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const { pathname } = useRouter()

  return (
    <>
      {pathname == '/signin' ? null : (
        <footer className="mt-32">
          <Container.Outer>
            <div className="dark:border-zinc-700/40 border-t border-zinc-100 pb-16 pt-10">
              <Container.Inner>
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex gap-6 text-sm font-medium text-light-300 dark:text-light-200">
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/tech">Tech</NavLink>
                  </div>
                  <p className="text-sm text-dark-50 dark:text-light-300">
                    &copy; {new Date().getFullYear()} Angelica Moberg Skoglund.
                    All rights reserved.
                  </p>
                </div>
              </Container.Inner>
            </div>
          </Container.Outer>
        </footer>
      )}
    </>
  )
}
