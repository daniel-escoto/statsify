import { useState } from "react";
import { loginUrl } from "../utilities/Api";
import {
  CLIENT_ID,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  TOP_TRACKS_ENDPOINT,
  TOP_ARTISTS_ENDPOINT,
  RESPONSE_TYPE,
} from "../utilities/Config";

export default function NavBar({
  token,
  handleLogOut,
}: {
  token: string;
  handleLogOut: () => void;
}) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    // simple navbar using tailwind
    // slight red color
    // if logged in, show log out button
    // if not logged in, show log in button
    <nav className="bg-red-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpened(!isOpened)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpened ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* title on left and signin signout button on the right */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>

          {/* login logout buttons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {token ? (
              <button
                type="button"
                className="bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            ) : (
              <a
                href={loginUrl}
                className="bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Log In
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
