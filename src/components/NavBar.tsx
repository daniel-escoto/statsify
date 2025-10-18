import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import { UserProfile } from './Interfaces';
import ProfileButton from './ProfileButton';
import ProfileMenu from './ProfileMenu';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavBarProps {
  token: string;
  handleLogOut: () => void;
  userProfile?: UserProfile | null;
  className?: string;
}

export default function NavBar({
  token,
  handleLogOut,
  userProfile,
  className = '',
}: NavBarProps) {
  const location = useLocation();
  const isTopPage = location.pathname === '/top';
  const isRecentPage = location.pathname === '/recent';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`bg-primary dark:bg-primary-dark ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-2xl font-bold text-white dark:text-foreground-dark"
            >
              Statsify
            </Link>

            {/* Desktop Navigation */}
            {token && (
              <div className="hidden space-x-4 md:flex">
                <Link
                  to="/top"
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isTopPage
                      ? 'bg-primary-light text-white'
                      : 'text-gray-300 hover:bg-primary-light hover:text-white'
                  }`}
                >
                  Top
                </Link>
                <Link
                  to="/recent"
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isRecentPage
                      ? 'bg-primary-light text-white'
                      : 'text-gray-300 hover:bg-primary-light hover:text-white'
                  }`}
                >
                  Recent
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
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
                  className="rounded-md p-2 text-gray-300 hover:bg-primary-light hover:text-white focus:outline-none md:hidden"
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
                  className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white transition hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
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
            className={`transition-all duration-200 ease-in-out md:hidden ${
              isMobileMenuOpen
                ? 'max-h-40 opacity-100'
                : 'max-h-0 overflow-hidden opacity-0'
            }`}
          >
            <div className="space-y-1 border-t border-primary-light px-2 pb-3 pt-2">
              <Link
                to="/top"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  isTopPage
                    ? 'bg-primary-light text-white'
                    : 'text-gray-300 hover:bg-primary-light hover:text-white'
                }`}
              >
                Top
              </Link>
              <Link
                to="/recent"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  isRecentPage
                    ? 'bg-primary-light text-white'
                    : 'text-gray-300 hover:bg-primary-light hover:text-white'
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
