import { useSession } from 'next-auth/react'

const Account = () => {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div className="divide-y divide-white/5">
      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="dark:text-light-50 text-dark-200 text-base  font-semibold leading-7">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            {/* Use a permanent address where you can receive mail. */}
          </p>
        </div>

        <form className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full flex items-center gap-x-8">
              <img
                src={'/' + session?.user?.image}
                alt=""
                className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
              />
              <div>
                <button
                  type="button"
                  className="bg-light-300/60 dark:text-light-50 text-dark-100 hover:bg-light-300/80 rounded-md px-3 py-2 text-sm font-semibold shadow-sm dark:bg-white/10 dark:hover:bg-white/20 "
                >
                  Change profile picture
                </button>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  JPG, GIF or PNG. 1MB max.
                </p>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="dark:text-light-50 text-dark-200 block text-sm font-medium leading-6"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="dark:text-light-50 text-dark-200  focus:ring-dark-50 block w-full rounded-md  border-0 bg-black/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10  focus:ring-2 focus:ring-inset dark:bg-white/5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="dark:text-light-50 text-dark-200 block text-sm font-medium leading-6"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="dark:text-light-50 text-dark-200 focus:ring-dark-50 block w-full rounded-md  border-0 bg-black/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset dark:bg-white/5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="username"
                className="dark:text-light-50 text-dark-200 block text-sm font-medium leading-6"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="focus-within:ring-dark-50 flex rounded-md bg-black/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset dark:bg-white/5">
                  <span className="flex select-none items-center pl-3 text-gray-400 sm:text-sm">
                    {/*  example.com/ */}
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="dark:text-light-50 text-dark-200 flex-1 border-0 bg-transparent py-1.5 pl-1 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="email"
                className="dark:text-light-50 text-dark-200 block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="dark:text-light-50 text-dark-200 focus:ring-dark-50 block w-full rounded-md  border-0 bg-black/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset dark:bg-white/5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="linkedin"
                className="dark:text-light-50 text-dark-200 block text-sm font-medium leading-6"
              >
                Linkedin
              </label>
              <div className="mt-2">
                <input
                  id="linkedin"
                  name="linkedin"
                  type="text"
                  autoComplete="linkedin"
                  className="dark:text-light-50 text-dark-200 focus:ring-dark-50 block w-full rounded-md  border-0 bg-black/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset dark:bg-white/5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="github"
                className="dark:text-light-50 text-dark-200 block text-sm font-medium leading-6"
              >
                Github
              </label>
              <div className="mt-2">
                <input
                  id="github"
                  name="github"
                  type="text"
                  autoComplete="github"
                  className="dark:text-light-50 text-dark-200 focus:ring-dark-50 block w-full rounded-md border-0 bg-black/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset dark:bg-white/5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="phone"
                className="dark:text-light-50 text-dark-200 block text-sm font-medium leading-6"
              >
                Phone number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="phone"
                  className="dark:text-light-50 text-dark-200 focus:ring-dark-50 block w-full rounded-md  border-0 bg-black/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset dark:bg-white/5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex">
            <button
              type="submit"
              className="bg-light-400 dark:text-light-50 text-light-50 hover:bg-light-400/60 focus-visible:outline-dark-50 rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="dark:text-light-50 text-dark-200 text-base font-semibold leading-7">
            Change password
          </h2>
          <p className="text-dark-100/90 mt-1 text-sm leading-6 dark:text-gray-400">
            Update your password associated with your account.
          </p>
        </div>

        <form className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="current-password"
                className="dark:text-light-50 text-dark-200 block text-sm font-medium leading-6"
              >
                Current password
              </label>
              <div className="mt-2">
                <input
                  id="current-password"
                  name="current_password"
                  type="password"
                  autoComplete="current-password"
                  className="dark:text-light-50 text-dark-200 focus:ring-dark-50 block w-full rounded-md  border-0 bg-black/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset dark:bg-white/5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="new-password"
                className="dark:text-light-50 text-dark-200 block text-sm font-medium leading-6"
              >
                New password
              </label>
              <div className="mt-2">
                <input
                  id="new-password"
                  name="new_password"
                  type="password"
                  autoComplete="new-password"
                  className="dark:text-light-50 text-dark-200 focus:ring-dark-50 block w-full rounded-md border-0 bg-black/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset dark:bg-white/5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="confirm-password"
                className="dark:text-light-50 text-dark-200 block text-sm font-medium leading-6"
              >
                Confirm password
              </label>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm_password"
                  type="password"
                  autoComplete="new-password"
                  className="dark:text-light-50 text-dark-200 focus:ring-dark-50 block w-full rounded-md border-0 bg-black/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset dark:bg-white/5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex">
            <button
              type="submit"
              className="bg-light-400 dark:text-light-50 text-light-50 hover:bg-light-400/60 focus-visible:outline-dark-50 rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="dark:text-light-50 text-dark-200 text-base font-semibold leading-7">
            Delete account
          </h2>
          <p className="text-dark-100/90 mt-1 text-sm leading-6 dark:text-gray-400">
            You can delete your account here. This action is not reversible. All
            information related to this account will be deleted permanently.
          </p>
        </div>

        <form className="flex items-start md:col-span-2">
          <button
            type="submit"
            className="dark:text-light-50 text-dark-200 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-red-400"
          >
            Yes, delete my account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Account
