import { useEffect, useRef, useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  const [isDark, setIsDark] = useState()

  return (
    <div className={'relative'}>
      <Header setIsDark={setIsDark} />
      <main>
        <Component
          isDark={isDark}
          previousPathname={previousPathname}
          {...pageProps}
        />
      </main>
      <Footer />
    </div>
  )
}
