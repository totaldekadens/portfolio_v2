import Head from "next/head";

export default function SignIn() {
  return (

    <>
    <Head>
         <title>
         Sign in - Angelica Moberg Skoglund
        </title>
    </Head>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8 md:mt-20">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-dark-200 dark:text-light-200">
              Sign in to your account
            </h2>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div className="relative -space-y-px rounded-md ">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md  ring-inset ring-0 "/>
              <div>
                <label htmlFor="email-address" className="sr-only">
                 Username
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative h-11 md:h-auto bg-dark-50/20 block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-light-50 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 dark:placeholder:text-gray-600  focus:ring-2 focus:ring-inset focus:ring-light-300 sm:text-sm sm:leading-6 mb-2"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block bg-dark-50/20 h-11 md:h-auto w-full rounded-md border-0 py-1.5 dark:text-light-50  text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600  focus:z-10 focus:ring-2 focus:ring-inset focus:ring-light-300 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-light-300 focus:ring-light-300"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-dark-200 dark:text-light-100"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <a
                  href="#"
                  className="font-semibold text-dark-50 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-light-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-light-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-300"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
