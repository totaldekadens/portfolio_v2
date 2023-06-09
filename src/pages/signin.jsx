import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Yup schema to validate the form
const schema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
})

const ErrorMessage = ({ message }) => {
  return (
    <span className="text-xs text-red-600 dark:text-red-500">{message}</span>
  )
}

export default function SignIn() {
  const [error, setError] = useState()
  const session = useSession()

  const router = useRouter()
  // Redirect user back to the previous visited page when logged in
  useEffect(() => {
    if (session.data) {
      if (typeof router.query.callbackUrl === 'string') {
        router.push(router.query.callbackUrl || '/')
      } else {
        router.push('/')
      }
    }
  }, [router, session.data])

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ username, password }) => {
      // Make a request to your backend to store the data
      const res = await signIn('credentials', {
        inputValue: username,
        password: password,
        redirect: false,
        callbackUrl: '/',
      })
      console.log(res)
      if (res?.error) {
        setError('Username or password not valid')
      }
    },
  })

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik

  return (
    <>
      <Head>
        <title>Sign in - Angelica Moberg Skoglund</title>
      </Head>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 md:mt-20 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          {session.data ? null : (
            <>
              <div>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-dark-200 dark:text-light-200">
                  Sign in to your account
                </h2>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative -space-y-px rounded-md ">
                  <div className="pointer-events-none absolute inset-0 z-10 rounded-md  ring-0 ring-inset " />
                  <div>
                    <label htmlFor="username" className="sr-only">
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      type="text"
                      autoComplete="username"
                      required
                      className="relative mb-2 block h-11 w-full rounded-md border-0 bg-dark-50/20 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-light-300 dark:text-light-50 dark:placeholder:text-gray-600 sm:text-sm sm:leading-6 md:h-auto"
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
                      value={values.password}
                      onChange={handleChange}
                      required
                      className="relative block h-11 w-full rounded-md border-0 bg-dark-50/20 py-1.5 text-gray-900 ring-1  ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-light-300 dark:text-light-50 dark:placeholder:text-gray-600 sm:text-sm sm:leading-6 md:h-auto"
                      placeholder="Password"
                    />
                    {error ? <ErrorMessage message={error} /> : null}
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
            </>
          )}
        </div>
      </div>
    </>
  )
}
