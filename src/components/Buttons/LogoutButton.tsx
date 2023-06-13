import { LogOutIcon } from '../Icons'
import { useSession, signOut } from 'next-auth/react'

const LogoutButton = (props) => {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <div
          className="pointer-events-auto  flex h-10 w-10 cursor-pointer items-center justify-end"
          onClick={() => signOut()}
        >
          <LogOutIcon
            {...props} /* className="group-hover:fill-light-300 dark:group-hover:fill-light-300 h-8 w-8 stroke-red-600 transition dark:stroke-red-600"  */
          />
        </div>
      ) : null}
    </>
  )
}

export default LogoutButton
