import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { CloseIcon } from '../../Icons'
import Link from 'next/link'
import { ModeToggle } from './Header'

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
            className="bg-light-100 dark:bg-dark-300 fixed inset-x-4 bottom-0 left-32 right-0 top-0  z-50 origin-top px-8 py-5 "
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="text-light-300 dark:text-light-100 h-10 w-10" />
              </Popover.Button>
              <div className=" flex  md:hidden ">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>

            <nav className="mt-10 flex h-full w-full  ">
              <ul className="divide-dark-300/5 text-light-300 dark:text-light-200 -my-2  flex w-full flex-col divide-y text-3xl dark:divide-zinc-100/5">
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

export default MobileNavigation
