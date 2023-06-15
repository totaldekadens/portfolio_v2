import { ArrowDownIcon } from '../Icons'

interface Props {
  title: string
  href: string
}

const CVButton = ({ title, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-light-400 text-light-50 hover:bg-light-300 dark:bg-light-300/60 dark:hover:bg-light-300/30 mt-6 flex flex-col items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold outline-offset-2 transition active:bg-zinc-800 active:text-zinc-100/70 active:transition-none   dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
    >
      <button className="group flex w-full items-center justify-center gap-2">
        {title}
        <ArrowDownIcon className="stroke-light-50 h-4 w-4 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </button>
    </a>
  )
}

export default CVButton
