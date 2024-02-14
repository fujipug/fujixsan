'use client'
import { useIsClient } from '@/utils/is-client-ctx'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Shows', href: '#', scrollId: 'shows', current: false },
  { name: 'Press Kit', href: '#', scrollId: 'epk', current: false },
  { name: 'Music', href: '#', scrollId: 'music', current: false },
  { name: 'Merch', href: '#', scrollId: 'merch', current: false },
  { name: 'Venues', href: '#', scrollId: 'venues', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [offset, setOffset] = useState(0);
  const isClient = useIsClient();

  const scroll = (scrollId: string) => {
    const section = document.querySelector(`#${scrollId}`);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    navigation.forEach((item) => {
      item.scrollId !== scrollId ? item.current = false : item.current = true;
    });
  };

  useEffect(() => {
    const onScroll = () => isClient && setOffset(window.scrollY);
    // clean up code
    isClient && window.removeEventListener('scroll', onScroll);
    isClient && window.addEventListener('scroll', onScroll, { passive: true });
    return () => { isClient && window.removeEventListener('scroll', onScroll) }
  }, [isClient]);

  let navbarClasses = 'fixed w-full z-10 drop-shadow-lg';
  let showLogo = ''
  if (offset > 50) {
    navbarClasses += ' bg-[#00223e] transition ease-in-out duration-500';
    showLogo = ' sm:opacity-1 transition ease-in-out duration-500'
  } else {
    navbarClasses += ' bg-[#00223e]/0 transition ease-out-in duration-500';
    showLogo = ' sm:opacity-0 transition ease-in-out duration-500'
  }

  return (
    <Disclosure as="nav" className={navbarClasses}>
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <img
                  className={`h-8 w-auto cursor-pointer ${showLogo}`}
                  src="small_fujixsan_logo.png"
                  alt="Fujixsan Logo"
                  onClick={() => scroll('home')}
                />
                {/* <div className="flex flex-shrink-0 items-center">
                </div> */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={() => scroll(item.scrollId)}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white hover:cursor-pointer',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={() => scroll(item.scrollId)}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white hover:cursor-pointer',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
