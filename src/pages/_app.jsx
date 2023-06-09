import { useEffect, useRef } from 'react'
import { Footer } from '@/components/Layout/Footer'
import { Header } from '@/components/Layout/Header'
import '@/styles/tailwind.css'
import 'focus-visible'
import { SessionProvider } from 'next-auth/react'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <SessionProvider session={session}>
      <div className={'relative'}>
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </SessionProvider>
  )
}
