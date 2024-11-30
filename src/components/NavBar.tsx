import { loginUrl } from "../utilities/Api";

interface NavBarProps {
  token: string;
  handleLogOut: () => void;
}

export default function NavBar({ token, handleLogOut }: NavBarProps) {
  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Title */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground">Statsify</h1>
          </div>

          {/* Login/Logout Button */}
          <div className="flex items-center space-x-4">
            {token ? (
              <button
                type="button"
                onClick={handleLogOut}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Log Out
              </button>
            ) : (
              <a
                href={loginUrl}
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
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
