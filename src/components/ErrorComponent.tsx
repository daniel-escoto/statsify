export default function ErrorComponent({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <h1 className="text-2xl font-bold text-error dark:text-error-light">
        Something went wrong!
      </h1>
      <p className="text-lg text-neutral dark:text-neutral-light mt-4 text-center">
        {message}
      </p>
      <button
        onClick={onRetry}
        className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded mt-6 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 dark:focus:ring-primary-dark"
      >
        Log Out and Try Again
      </button>
    </div>
  );
}
