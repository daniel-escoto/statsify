import React from "react";
import { Menu } from "@headlessui/react";
import { UserProfile } from "./Interfaces";
import DarkModeToggle from "./DarkModeToggle";
import ProfileButton from "./ProfileButton";
import ProfileMenu from "./ProfileMenu";

interface NavBarProps {
  token: string;
  handleLogOut: () => void;
  userProfile?: UserProfile | null;
}

export default function NavBar({
  token,
  handleLogOut,
  userProfile,
}: NavBarProps) {
  return (
    <nav className="bg-primary dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white dark:text-foreground-dark">
              Statsify
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <DarkModeToggle />

            {token && userProfile ? (
              <Menu as="div" className="relative">
                <ProfileButton userProfile={userProfile} />
                <ProfileMenu
                  userProfile={userProfile}
                  handleLogOut={handleLogOut}
                />
              </Menu>
            ) : (
              token && (
                <button
                  type="button"
                  onClick={handleLogOut}
                  className="bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary-dark transition focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  Log Out
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
