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
          <LogOutIcon {...props} />
        </div>
      ) : null}
    </>
  )
}

export default LogoutButton
