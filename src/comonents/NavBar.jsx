import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/Logo_Restory.png'; // Adjust the path as per your project structure

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About us', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-zinc-200 shadow-lg fixed w-full z-10">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 overflow-hidden h-20" style={{ paddingLeft: "10px" }}>
            <div className="relative flex h-full items-center justify-between">
              <div className="flex items-center">
                <img src={Logo} alt="Restory Logo" className="w-50 h-20 " style={{ marginLeft: "-20px" }} />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 justify-end">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        'nav-link',
                        'text-gray-900',
                        'rounded-md px-3 py-2 text-md text-md',
                        'hover:text-sky-500',
                        'hover:border-b-2 border-black'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                      onClick={() => { close(); window.scrollTo(0, 0); }} // Close and scroll to top
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-zinc-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    'block',
                    'px-3 py-2 text-base font-medium',
                    'text-gray-900 hover:text-sky-500'
                  )}
                  onClick={() => { close(); window.scrollTo(0, 0); }} // Close and scroll to top
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
