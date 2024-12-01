import { loginUrl } from "../utilities/Api";

export default function SignInWithSpotify() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <h1 className="text-4xl font-bold text-foreground dark:text-neutral-light text-center">
        Statsify
      </h1>
      <p className="text-lg text-neutral dark:text-neutral-light mt-4 text-center">
        Get all your Spotify stats in one place.
      </p>
      <a
        href={loginUrl}
        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg mt-8 shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
      >
        Sign in with Spotify
      </a>
      <div className="mt-6 max-w-lg text-center text-sm text-neutral-dark dark:text-neutral-light">
        <p>
          Experiencing issues with Safari? Please disable private browsing mode
          or try using another browser like Chrome or Firefox for a smoother
          experience.
        </p>
      </div>
    </div>
  );
}
