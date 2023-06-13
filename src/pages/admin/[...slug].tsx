import LayoutAdmin from '@/components/Admin/LayoutAdmin'
import Account from '@/components/Admin/Settings/Account'
import {
  Cog6ToothIcon,
  FolderIcon,
  ServerIcon,
  SignalIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

interface SubNav {
  title: string
  slug: string
  component: /* () => JSX.Element |  */ any
  current: boolean
  path: string
}

export interface Nav {
  title: string
  slug: string
  path: string
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string
      titleId?: string
    } & React.RefAttributes<SVGSVGElement>
  >
  current: boolean
  subNavs: SubNav[]
}

const navigation: Nav[] = [
  {
    title: 'Projects',
    slug: 'projects',
    path: '/projects/boilerplate-ecommerce',
    icon: FolderIcon,
    current: false,
    subNavs: [
      {
        title: 'Boilerplate E-commerce',
        slug: 'boilerplate-ecommerce',
        path: '/projects/boilerplate-ecommerce',
        component: '',
        current: true,
      },
      {
        title: 'Poll / Survey',
        slug: 'poll',
        path: '/projects/poll',
        component: '',
        current: false,
      },
      {
        title: 'Master Thesis',
        slug: 'master-thesis',
        path: '/projects/master-thesis',
        component: '',
        current: false,
      },
      {
        title: 'Business Adventure Hero',
        slug: 'adventure-hero',
        path: '/projects/adventure-hero',
        component: '',
        current: false,
      },
      {
        title: 'Portfolio assignment',
        slug: 'portfolio-assignment',
        path: '/projects/portfolio-assignment',
        component: '',
        current: false,
      },
      {
        title: 'SAD Active E-Commerce',
        slug: 'sad-active',
        path: '/projects/sad-active',
        component: '',
        current: false,
      },
      {
        title: 'ZEON MILO E-Commerce',
        slug: 'zeon-milo',
        path: '/projects/zeon-milo',
        component: '',
        current: false,
      },
    ],
  },
  {
    title: 'Pages',
    icon: ServerIcon,
    slug: 'pages',
    path: '/pages/merits',
    current: false,
    subNavs: [
      {
        title: 'Merits',
        slug: 'merits',
        path: '/pages/merits',
        component: '',
        current: true,
      },
      {
        title: 'Tech',
        slug: 'tech',
        path: '/pages/tech',
        component: '',
        current: false,
      },
    ],
  },
  {
    title: 'Layout',
    slug: 'layout',
    path: '/layout/header',
    icon: SignalIcon,
    current: false,
    subNavs: [
      {
        title: 'Header',
        slug: 'header',
        path: '/layout/header',
        component: '',
        current: true,
      },
      {
        title: 'Footer',
        slug: 'footer',
        path: '/layout/footer',
        component: '',
        current: false,
      },
    ],
  },
  {
    title: 'Settings',
    slug: 'settings',
    path: '/settings/account',
    icon: Cog6ToothIcon,
    current: true,
    subNavs: [
      {
        title: 'Account',
        slug: 'account',
        path: '/settings/account',
        component: Account,
        current: true,
      },
      {
        title: 'Presentation',
        slug: 'presentation',
        path: '/settings/presentation',
        component: '',
        current: false,
      },
    ],
  },
]

export default function Admin() {
  const [currentNav, setCurrentNav] = useState<Nav>({
    title: 'Settings',
    slug: 'settings',
    path: '/settings/account',
    icon: Cog6ToothIcon,
    current: true,
    subNavs: [
      {
        title: 'Account',
        slug: 'account',
        path: '/settings/account',
        component: Account,
        current: true,
      },
      {
        title: 'Presentation',
        slug: 'presentation',
        path: '/settings/presentation',
        component: '',
        current: false,
      },
    ],
  })
  const [currentNavList, setCurrentNavList] = useState<Nav[]>(navigation)
  let currentNavListRef = useRef(null)
  currentNavListRef.current = currentNavList

  const { query } = useRouter()

  useEffect(() => {
    if (currentNavListRef.current && query && query.slug) {
      let copy: Nav[] = [...currentNavListRef.current]

      copy.forEach((element) => {
        if (query.slug[0] == element.slug) {
          element.current = true
          setCurrentNav(element)
          element.subNavs.forEach((subNav) => {
            if (query.slug[1] == subNav.slug) {
              subNav.current = true
            } else {
              subNav.current = false
            }
          })
        } else {
          element.current = false
        }
      })
      setCurrentNavList(copy)
    }
  }, [query])

  return (
    <>
      <LayoutAdmin navigation={currentNavList} currentNav={currentNav}>
        {currentNav
          ? currentNav.subNavs.map((page, i) => {
              if (page.current) {
                if (page.component) {
                  return <page.component key={i} />
                }
                return (
                  <h1 key={i} className="m-4 text-black dark:text-white">
                    {page.title} will be fixed shortly
                  </h1>
                )
              }
            })
          : null}
      </LayoutAdmin>
    </>
  )
}
