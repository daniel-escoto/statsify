export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* circular loading svg */}
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
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
          d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
        ></path>
      </svg>
      <p className="text-gray-900">Loading...</p>
    </div>
  );
}
