import { loginUrl } from '../utilities/Api';

export default function SignInWithSpotify() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-gradient-to-b from-background to-background/50 px-4 py-16 dark:from-neutral-dark dark:to-neutral-dark/50">
      <div className="mx-auto max-w-4xl text-center">
        {/* Hero Content */}
        <div className="mb-12 space-y-6">
          <h1 className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-6xl font-extrabold text-foreground text-transparent dark:text-neutral-light">
            Statsify
          </h1>
          <p className="text-2xl font-medium text-neutral-dark dark:text-neutral-light">
            Discover Your Musical Journey
          </p>
          <p className="mx-auto max-w-2xl text-lg text-neutral dark:text-neutral-light/80">
            Dive deep into your Spotify listening habits. Get insights about
            your favorite artists, tracks, and genres. Visualize your music
            taste like never before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-lg font-semibold text-foreground dark:text-neutral-light">
              Top Tracks
            </h3>
            <p className="text-neutral dark:text-neutral-light/80">
              See what songs you&apos;ve had on repeat
            </p>
          </div>
          <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-lg font-semibold text-foreground dark:text-neutral-light">
              Artist Insights
            </h3>
            <p className="text-neutral dark:text-neutral-light/80">
              Discover your most-played artists
            </p>
          </div>
          <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-lg font-semibold text-foreground dark:text-neutral-light">
              Recent Activity
            </h3>
            <p className="text-neutral dark:text-neutral-light/80">
              Track your latest listening history
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={loginUrl}
          className="mt-8 inline-flex transform items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
        >
          <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          Connect with Spotify
        </a>

        {/* Browser Notice */}
        <div className="mx-auto mt-8 max-w-lg rounded-lg bg-white/5 p-4 text-center text-sm text-neutral-dark/80 backdrop-blur-sm dark:text-neutral-light/80">
          <p>
            Experiencing issues with Safari? Please disable private browsing
            mode or try using another browser like Chrome or Firefox for a
            smoother experience.
          </p>
        </div>
      </div>
    </div>
  );
}
