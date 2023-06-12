import { LogOutIcon } from '../Icons'
import { useSession, signOut } from 'next-auth/react'

const LogoutButton = () => {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <div
          className="pointer-events-auto hidden h-10 w-10 cursor-pointer items-center md:flex"
          onClick={() => signOut()}
        >
          <LogOutIcon className="fill-dark-50 group-hover:fill-light-300 dark:group-hover:fill-light-300 h-8 w-8 transition dark:fill-zinc-400" />
        </div>
      ) : null}
    </>
  )
}

export default LogoutButton
