import { useEffect, useRef, useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'
import 'focus-visible'
import { motion } from 'framer-motion'
function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <div className={'relative'}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </motion.div>
    </div>
  )
}
