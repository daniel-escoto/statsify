import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserProfile } from "./Interfaces";

interface ProfileMenuProps {
  userProfile: UserProfile;
  handleLogOut: () => void;
}

export default function ProfileMenu({
  userProfile,
  handleLogOut,
}: ProfileMenuProps) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        <div className="p-4">
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            {userProfile.display_name}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {userProfile.followers.total} followers
          </div>

          {userProfile.country && (
            <div className="mt-3 flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Country</span>
              <span className="text-gray-900 dark:text-white">
                {userProfile.country}
              </span>
            </div>
          )}

          {userProfile.product && (
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Account</span>
              <span className="text-gray-900 dark:text-white capitalize">
                {userProfile.product}
              </span>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <Menu.Item>
              {({ active }) => (
                <a
                  href={userProfile.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-3 py-2 rounded-md text-sm ${
                    active
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  View on Spotify
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogOut}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                    active
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Log Out
                </button>
              )}
            </Menu.Item>
          </div>
        </div>
      </Menu.Items>
    </Transition>
  );
}
