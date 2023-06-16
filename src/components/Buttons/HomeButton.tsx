import clsx from 'clsx'
import Link from 'next/link'

function HomeButton({ title, className }) {
  return (
    <div className={'rounded-lg p-0.5 backdrop-blur'}>
      <Link
        href="/"
        aria-label="Home"
        className={clsx(
          className,
          'dark:text-light-100 text-light-400 hover:text-dark-100 dark:hover:text-light-300 pointer-events-auto relative whitespace-nowrap px-3  py-2 font-medium transition'
        )}
      >
        {title}
      </Link>
    </div>
  )
}

export default HomeButton
