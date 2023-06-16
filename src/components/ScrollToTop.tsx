import { classNames } from '@/lib/ClassNames'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 ">
      <button
        aria-label="Scroll to top"
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'dark:text-dark-50 hover:text-light-400 text-dark-50 inline-flex items-center rounded-full  p-3 transition-opacity duration-300 dark:bg-none'
        )}
      >
        <ChevronUpIcon
          className="dark:hover:text-light-400 h-12 w-12 transition "
          aria-hidden="true"
        />
      </button>
    </div>
  )
}

export default ScrollToTop
