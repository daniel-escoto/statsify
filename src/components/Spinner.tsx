export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <svg
        className="animate-spin h-8 w-8 text-primary dark:text-neutral-light"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17z"
        ></path>
      </svg>
      <p className="mt-4 text-primary dark:text-neutral-light text-sm font-semibold">
        Loading...
      </p>
    </div>
  );
}
