import { useEffect, useRef } from 'react'
import '@/styles/tailwind.css'
import 'focus-visible'
import { SessionProvider } from 'next-auth/react'
import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'

function usePrevious(value: any) {
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
        {!router.pathname ? null : router.pathname.includes('/admin') ? null : (
          <Header />
        )}

        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        {!router.pathname ? null : router.pathname.includes('/admin') ? null : (
          <Footer />
        )}
      </div>
    </SessionProvider>
  )
}
