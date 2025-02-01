import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from '@/components/Layout/containers/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="hover:text-dark-100 dark:hover:text-light-300 transition"
    >
      {children}
    </Link>
  )
}

function ExtLink({ href, children }) {
  return (
    <Link
      href={href}
      className="hover:text-dark-100 dark:hover:text-light-300 transition"
      target="_blank"
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
            <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
              <Container.Inner>
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="text-light-400 dark:text-light-200 flex gap-6 text-sm font-medium">
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/tech">Tech</NavLink>
                    <ExtLink href="https://github.com/totaldekadens">
                      Github
                    </ExtLink>
                  </div>
                  <p className="text-dark-100 dark:text-light-200/60 text-center text-sm">
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
