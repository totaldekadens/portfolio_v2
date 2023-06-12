import CVButton from '@/components/Buttons/CVButton'
import { BriefcaseIcon } from '@/components/Icons'
import Image from 'next/image'
import { resume } from '@/lib/data'
const Resume = () => {
  return (
    <div className="dark:border-zinc-700/40 xl:min-w-[466px] xl:max-w-[466px] rounded-2xl border border-zinc-200 p-6">
      <h2 className="text-dark-200 flex text-sm font-semibold dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none " />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, i) => (
          <li key={i} className="flex gap-4">
            <div className="dark:border-zinc-700/50 relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border  dark:ring-0">
              <Image
                src={role.logoLight}
                alt=""
                className="h-7 w-7 object-contain"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="text-dark-200 w-full flex-none text-sm font-medium dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="text-dark-50 ml-auto text-xs dark:text-zinc-500"
                aria-label={`${role.start ?? role.start} until ${
                  role.end ?? role.end
                }`}
              >
                <time dateTime={role.start ?? role.start}>
                  {role.start ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end ?? role.end}>
                  {role.end ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <CVButton
        title="Download CV"
        href="/cv/Angelica_Moberg_Skoglund_CV.pdf"
      />
    </div>
  )
}

export default Resume
