import { SimpleLayout } from '@/components/Layout/containers/SimpleLayout'
import Head from 'next/head'
import FadeIn from '@/components/Layout/containers/FadeIn'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '@/components/Icons'
import Example from '@/components/Setting'

const Admin = ({ previousPathname }) => {
  const router = useRouter()
  const list = [
    { title: 'Pages', slug: 'pages' },
    { title: 'Layout', slug: 'layout' },
    { title: 'Personal Info', slug: 'personal-info' },
  ]
  return (
    <>
      <Head>
        <title>{`Admin panel - Angelica Moberg Skoglund`}</title>
        <meta name="description" content="" />
      </Head>
      <FadeIn>
        <Example />
      </FadeIn>
    </>
  )
}

export default Admin
