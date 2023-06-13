import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import Head from 'next/head'
import FadeIn from '@/components/Layout/containers/FadeIn'
import { AdminIcon, HomeIcon } from '@/components/Icons'
import LogoutButton from '@/components/Buttons/LogoutButton'
import { Nav } from '@/pages/admin/[...slug]'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface Props {
  navigation: Nav[]
  currentNav: Nav
  children: React.ReactNode
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function LayoutAdmin({
  children,
  navigation,
  currentNav,
}: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Head>
        <title>{`Admin panel - Angelica Moberg Skoglund`}</title>
        <meta name="description" content="" />
      </Head>
      <FadeIn>
        <div>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50 xl:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 backdrop-blur" />
              </Transition.Child>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-full top-0 flex w-16 justify-center pt-5" />
                    </Transition.Child>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="bg-light-300 dark:bg-dark-300 flex grow flex-col gap-y-5 overflow-y-auto px-6 ring-1 ring-white/10">
                      <div className="flex h-16 shrink-0 items-center justify-between">
                        <AdminIcon className="dark:fill-dark-50 fill-light-100 h-8 w-8" />
                        <button
                          type="button"
                          className="-m-2.5 p-2.5"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                      <nav className="flex flex-1 flex-col">
                        <ul
                          role="list"
                          className="flex flex-1 flex-col gap-y-7"
                        >
                          <li>
                            <ul role="list" className="-mx-2 space-y-1">
                              {navigation.map((item) => (
                                <li key={item.title}>
                                  <Link
                                    href={'/admin/' + item.slug}
                                    className={classNames(
                                      item.current
                                        ? 'bg-light-400 dark:bg-light-400 text-light-50'
                                        : 'text-dark-100 dark:text-dark-50 hover:text-dark-200 dark:hover:text-light-50 hover:bg-light-400/20',
                                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                    )}
                                  >
                                    <item.icon
                                      className="h-6 w-6 shrink-0"
                                      aria-hidden="true"
                                    />
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li></li>
                          <li className="-mx-6 mt-auto">
                            <a
                              href="#"
                              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                            >
                              <img
                                className="h-8 w-8 rounded-full bg-gray-800"
                                src="/profil.webp"
                                alt=""
                              />
                              <span className="sr-only">Your profile</span>
                              <span aria-hidden="true">
                                Angelica M Skoglund
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="bg-light-100 dark:bg-black/10 dark:ring-white/5 flex grow flex-col gap-y-5 overflow-y-auto px-6 ring-1 ring-black/5 ">
              <div className="flex h-16 shrink-0 items-center">
                <Link href="/admin/settings/account">
                  <AdminIcon className="dark:fill-dark-50 fill-dark-100 h-8 w-8" />
                </Link>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={'/admin' + item.path}
                            className={classNames(
                              item.current
                                ? 'bg-light-400 dark:bg-light-400 text-light-50'
                                : 'text-dark-100 dark:text-dark-50 hover:text-dark-200 dark:hover:text-light-50 hover:bg-light-400/20',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                            )}
                          >
                            <item.icon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li></li>
                  <li className="-mx-6 mt-auto">
                    <a
                      href="#"
                      className="dark:text-light-50 text-dark-200 flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 hover:bg-gray-800"
                    >
                      <img
                        className="h-8 w-8 rounded-full bg-gray-800"
                        src="/profil.webp"
                        alt=""
                      />
                      <span className="sr-only">Your profile</span>
                      <span aria-hidden="true">Angelica M Skoglund</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="xl:pl-72">
            {/* Sticky search header */}
            <div className="bg-light-200 dark:bg-dark-300 sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-x-6 border-b border-white/5 px-4 shadow-sm sm:px-6 lg:px-8 xl:justify-end">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-white xl:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <div className="space-y-2">
                  <span className="bg-dark-50 dark:bg-light-300 block h-0.5 w-8 animate-pulse"></span>
                  <span className="bg-dark-50 dark:bg-light-300 block h-0.5 w-4 animate-pulse"></span>
                  <span className="bg-dark-50 dark:bg-light-300 block h-0.5 w-2 animate-pulse"></span>
                </div>
              </button>

              <div className="flex items-center">
                <Link className="flex items-center" href="/">
                  <HomeIcon className="stroke-dark-50 mr-2 hidden dark:block" />
                  <HomeIcon className="stroke-dark-100 mr-2 block dark:hidden" />
                </Link>
                <LogoutButton className="group-hover:fill-light-300 dark:group-hover:fill-light-300 h-8 w-8 stroke-red-600 transition dark:stroke-red-600" />
              </div>
            </div>

            <main>
              <header className="border-b border-white/5 ">
                {/* Secondary navigation */}
                <nav className="flex overflow-x-auto py-4">
                  <ul
                    role="list"
                    className="text-dark-100 dark:text-light-100 flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold  leading-6  sm:px-6 lg:px-8"
                  >
                    {currentNav
                      ? currentNav.subNavs.map((item) => (
                          <li key={item.title}>
                            <Link
                              href={'/admin' + item.path}
                              className={
                                item.current
                                  ? 'text-light-400 border-b-light-300 dark:text-light-300 border border-x-0 border-t-0'
                                  : ''
                              }
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))
                      : null}
                  </ul>
                </nav>
              </header>
              {children}
            </main>
          </div>
        </div>
      </FadeIn>
    </>
  )
}
