import { loginUrl } from "../utilities/Api";

export default function SignInWithSpotify() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold text-foreground dark:text-neutral-light">
        Statsify
      </h1>
      <p className="text-2xl text-neutral dark:text-neutral-light mt-4">
        Get all your Spotify stats in one place.
      </p>
      <a
        href={loginUrl}
        className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded mt-6 dark:bg-secondary dark:hover:bg-secondary-dark"
      >
        Sign in with Spotify
      </a>
    </div>
  );
}
