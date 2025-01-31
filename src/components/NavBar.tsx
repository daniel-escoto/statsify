import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { UserProfile } from "./Interfaces";
import DarkModeToggle from "./DarkModeToggle";
import ProfileButton from "./ProfileButton";
import ProfileMenu from "./ProfileMenu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
  const location = useLocation();
  const isTopPage = location.pathname === "/top";
  const isRecentPage = location.pathname === "/recent";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-2xl font-bold text-white dark:text-foreground-dark"
            >
              Statsify
            </Link>

            {/* Desktop Navigation */}
            {token && (
              <div className="hidden md:flex space-x-4">
                <Link
                  to="/top"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isTopPage
                      ? "bg-primary-light text-white"
                      : "text-gray-300 hover:bg-primary-light hover:text-white"
                  }`}
                >
                  Top
                </Link>
                <Link
                  to="/recent"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isRecentPage
                      ? "bg-primary-light text-white"
                      : "text-gray-300 hover:bg-primary-light hover:text-white"
                  }`}
                >
                  Recent
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <DarkModeToggle />

            {token && userProfile ? (
              <>
                <Menu as="div" className="relative">
                  <ProfileButton userProfile={userProfile} />
                  <ProfileMenu
                    userProfile={userProfile}
                    handleLogOut={handleLogOut}
                  />
                </Menu>
                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-primary-light focus:outline-none"
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              </>
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

        {/* Mobile Navigation Menu */}
        {token && (
          <div
            className={`md:hidden transition-all duration-200 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-primary-light">
              <Link
                to="/top"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isTopPage
                    ? "bg-primary-light text-white"
                    : "text-gray-300 hover:bg-primary-light hover:text-white"
                }`}
              >
                Top
              </Link>
              <Link
                to="/recent"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isRecentPage
                    ? "bg-primary-light text-white"
                    : "text-gray-300 hover:bg-primary-light hover:text-white"
                }`}
              >
                Recent
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
