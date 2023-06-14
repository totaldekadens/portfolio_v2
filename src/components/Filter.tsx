import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {
  AdjustmentsVerticalIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/20/solid'
import { ProjectDocument } from '@/models/ProjectModel'
import { Container } from './Layout/containers/Container'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  projects: ProjectDocument[]
  setCurrentProjects: Dispatch<SetStateAction<ProjectDocument[]>>
}

export default function Filter({ projects, setCurrentProjects }: Props) {
  // Gets all keys in all projects
  const keyList = ['All']
  projects.forEach((project) => {
    project.keys.forEach((key) => {
      keyList.push(key)
    })
  })

  // Remove duplicates
  const uniqueKeys = keyList.filter((key, i) => {
    return keyList.indexOf(key) === i
  })
  // Sort keys from A - Ö
  const ascendingKeys = uniqueKeys.sort((a, b) => (a > b ? 1 : -1))

  // State
  const [selectedFilter, setSelectedFilter] = useState(ascendingKeys[0])
  const filterRef = useRef(null)
  filterRef.current = selectedFilter

  // Filter projects depending on what´s selected
  useEffect(() => {
    if (filterRef.current == 'All') {
      setCurrentProjects(projects)
    } else {
      const foundProjects = projects.filter((project) =>
        project.keys.includes(filterRef.current)
      )
      setCurrentProjects(foundProjects)
    }
  }, [filterRef.current])

  return (
    <Container>
      <div className="flex w-full justify-end">
        <Listbox value={selectedFilter} onChange={setSelectedFilter}>
          {({ open }) => (
            <>
              <div className="relative mt-2 w-[180px]">
                <Listbox.Button className="dark:bg-light-300/10 dark:text-light-50 bg-light-100  relative w-full cursor-pointer rounded-md border py-1.5 pl-3 pr-10 text-left text-gray-900 ring-0  ring-inset focus:outline-none focus:ring-2 dark:ring-black/10 sm:text-sm sm:leading-6">
                  <span className="block truncate">{selectedFilter}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <AdjustmentsVerticalIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="dark:bg-dark-300 absolute z-10 mt-1 max-h-60 w-[180px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {ascendingKeys.map((key) => (
                      <Listbox.Option
                        key={key}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'bg-light-300/80 text-white'
                              : 'dark:text-light-50 text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={key}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'block truncate'
                              )}
                            >
                              {key}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-light-300',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </Container>
  )
}
