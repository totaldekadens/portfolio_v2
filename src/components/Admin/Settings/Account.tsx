import { useSession } from "next-auth/react"

const Account = () => {

  const { data: session } = useSession()
  console.log(session)

  return (
    <div className="divide-y divide-white/5">
      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7  dark:text-light-50 text-dark-200">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            {/* Use a permanent address where you can receive mail. */}
          </p>
        </div>

        <form className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full flex items-center gap-x-8">
              <img
                src={"/" + session?.user?.image}
                alt=""
                className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
              />
              <div>
                <button
                  type="button"
                  className="rounded-md bg-light-300/60 dark:bg-white/10 px-3 py-2 text-sm font-semibold dark:text-light-50 text-dark-100 shadow-sm dark:hover:bg-white/20 hover:bg-light-300/80 "
                >
                  Change profile picture
                </button>
                <p className="mt-2 text-xs leading-5 text-gray-400">JPG, GIF or PNG. 1MB max.</p>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 dark:text-light-50 text-dark-200">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full  rounded-md border-0 bg-black/5 dark:bg-white/5  py-1.5 dark:text-light-50 text-dark-200 shadow-sm ring-1 ring-inset ring-white/10  focus:ring-2 focus:ring-inset focus:ring-dark-50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 dark:text-light-50 text-dark-200">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5  py-1.5 dark:text-light-50 text-dark-200 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-dark-50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

              <div className="col-span-full">
              <label htmlFor="username" className="block text-sm font-medium leading-6 dark:text-light-50 text-dark-200">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-black/5 dark:bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-dark-50">
                  <span className="flex select-none items-center pl-3 text-gray-400 sm:text-sm">
                   {/*  example.com/ */}
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 dark:text-light-50 text-dark-200 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 dark:text-light-50 text-dark-200">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5  py-1.5 dark:text-light-50 text-dark-200 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-dark-50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

              <div className="col-span-full">
              <label htmlFor="linkedin" className="block text-sm font-medium leading-6 dark:text-light-50 text-dark-200">
                Linkedin
              </label>
              <div className="mt-2">
                <input
                  id="linkedin"
                  name="linkedin"
                  type="text"
                  autoComplete="linkedin"
                  className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5  py-1.5 dark:text-light-50 text-dark-200 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-dark-50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="col-span-full">
              <label htmlFor="github" className="block text-sm font-medium leading-6 dark:text-light-50 text-dark-200">
                Github
              </label>
              <div className="mt-2">
                <input
                  id="github"
                  name="github"
                  type="text"
                  autoComplete="github"
                  className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5 py-1.5 dark:text-light-50 text-dark-200 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-dark-50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

              <div className="col-span-full">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 dark:text-light-50 text-dark-200">
                Phone number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="phone"
                  className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5  py-1.5 dark:text-light-50 text-dark-200 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-dark-50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex">
            <button
              type="submit"
              className="rounded-md bg-light-400 px-3 py-2 text-sm font-semibold dark:text-light-50 text-light-50 shadow-sm hover:bg-light-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-50"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7 dark:text-light-50 text-dark-200">Change password</h2>
          <p className="mt-1 text-sm leading-6 text-dark-100/90 dark:text-gray-400">
            Update your password associated with your account.
          </p>
        </div>

        <form className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="current-password" className="block text-sm font-medium leading-6 dark:text-light-50 text-dark-200">
                Current password
              </label>
              <div className="mt-2">
                <input
                  id="current-password"
                  name="current_password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5  py-1.5 dark:text-light-50 text-dark-200 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-dark-50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="new-password" className="block text-sm font-medium leading-6 dark:text-light-50 text-dark-200">
                New password
              </label>
              <div className="mt-2">
                <input
                  id="new-password"
                  name="new_password"
                  type="password"
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5 py-1.5 dark:text-light-50 text-dark-200 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-dark-50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 dark:text-light-50 text-dark-200">
                Confirm password
              </label>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm_password"
                  type="password"
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5 py-1.5 dark:text-light-50 text-dark-200 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-dark-50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex">
            <button
              type="submit"
              className="rounded-md bg-light-400 px-3 py-2 text-sm font-semibold dark:text-light-50 text-light-50 shadow-sm hover:bg-light-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-50"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7 dark:text-light-50 text-dark-200">Delete account</h2>
          <p className="mt-1 text-sm leading-6 text-dark-100/90 dark:text-gray-400">
            You can delete your account here. This action is not reversible.
            All information related to this account will be deleted permanently.
          </p>
        </div>

        <form className="flex items-start md:col-span-2">
          <button
            type="submit"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold dark:text-light-50 text-dark-200 shadow-sm hover:bg-red-400"
          >
            Yes, delete my account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Account