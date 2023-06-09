import CVButton from '@/components/Buttons/CVButton'
import { BriefcaseIcon } from '@/components/SocialIcons'
import Image from 'next/image'
import { resume } from '@/lib/data'
const Resume = () => {
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40 xl:min-w-[466px] xl:max-w-[466px]">
      <h2 className="flex text-sm font-semibold text-dark-200 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none " />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50  dark:ring-0">
              <Image
                src={role.logoLight}
                alt=""
                className="h-7 w-7 object-contain"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-dark-200 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-dark-50 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
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
