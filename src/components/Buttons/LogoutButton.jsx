import { LogOutIcon } from '../Icons'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

const LogoutButton = () => {
  const { data: session } = useSession()
  console.log(session)
  return (
    <>
      {session ? (
        <div
          className="pointer-events-auto hidden h-10 w-10 cursor-pointer items-center md:flex"
          onClick={() => signOut()}
        >
          <LogOutIcon className="h-8 w-8 fill-dark-50 transition group-hover:fill-light-300 dark:fill-zinc-400 dark:group-hover:fill-light-300" />
        </div>
      ) : null}
    </>
  )
}

export default LogoutButton
