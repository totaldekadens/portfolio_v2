import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

export default DesktopNavigation
