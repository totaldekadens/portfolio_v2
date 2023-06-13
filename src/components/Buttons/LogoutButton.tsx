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
          <LogOutIcon className="group-hover:fill-light-300 dark:group-hover:fill-light-300 h-8 w-8 fill-red-700 transition dark:fill-red-600" />
        </div>
      ) : null}
    </>
  )
}

export default LogoutButton
