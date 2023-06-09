import { ArrowDownIcon } from '../Icons'

const CVButton = ({ title, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="mt-6 flex flex-col items-center justify-center gap-2 rounded-md bg-light-300 py-2 px-3 text-sm font-semibold text-light-50 outline-offset-2 transition hover:bg-light-400 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-light-300/60 dark:hover:bg-light-300/30   dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
    >
      <button className="group flex w-full items-center justify-center gap-2">
        {title}
        <ArrowDownIcon className="h-4 w-4 stroke-light-50 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </button>
    </a>
  )
}

export default CVButton
