import React, { useState } from 'react';

const Header = () => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="TechTri Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TechTri
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          {isMobileOpen ? (
            <span className="text-xl">✖</span>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div
          className={`${
            isMobileOpen ? 'flex' : 'hidden'
          } md:flex items-center justify-between font-medium w-full md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white"
              >
                Home
              </a>
            </li>

            {/* Company menu */}
            <li
              className="relative"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 dark:text-white">
                Company
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isCompanyOpen && (
                <div className="absolute left-0 mt-1 w-screen max-w-lg bg-gray-50 md:bg-white shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-600">
                  <div className="grid grid-cols-2 gap-4 p-5">
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Online Stores</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Connect with third-party tools that you're already using.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Segmentation</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Filter your customers and target them effectively.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Marketing CRM</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Manage customer relationships at scale.
                          </span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Analytics</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Track your performance with detailed reports.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Automation</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Automate repetitive marketing tasks easily.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Integrations</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Connect with popular third-party apps.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
