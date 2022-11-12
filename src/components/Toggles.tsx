import { SearchOptions, TimeOptions } from "./Interfaces";

export default function Toggles({
  currentSearchOption,
  currentTimeOption,
  setSearchOption,
  setTimeOption,
}: {
  currentSearchOption: SearchOptions;
  currentTimeOption: TimeOptions;
  setSearchOption: (searchOption: SearchOptions) => void;
  setTimeOption: (timeOption: TimeOptions) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-10">
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-row items-center justify-center space-x-2">
          <button
            className={`${
              currentSearchOption === SearchOptions.TRACK
                ? "bg-red-700 text-white dark:bg-red-600 dark:text-gray-900"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            } font-bold py-2 px-4 rounded-full`}
            onClick={() => setSearchOption(SearchOptions.TRACK)}
          >
            Songs
          </button>
          <button
            className={`${
              currentSearchOption === SearchOptions.ARTIST
                ? "bg-red-700 text-white dark:bg-red-600 dark:text-gray-900"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            } font-bold py-2 px-4 rounded-full dark:bg-gray-700 dark:text-gray-200`}
            onClick={() => setSearchOption(SearchOptions.ARTIST)}
          >
            Artists
          </button>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
          <button
            className={`${
              currentTimeOption === TimeOptions.SHORT_TERM
                ? "bg-red-700 text-white dark:bg-red-600 dark:text-gray-900"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            } font-bold py-2 px-4 rounded-full`}
            onClick={() => setTimeOption(TimeOptions.SHORT_TERM)}
          >
            Past Month
          </button>
          <button
            className={`${
              currentTimeOption === TimeOptions.MEDIUM_TERM
                ? "bg-red-700 text-white dark:bg-red-600 dark:text-gray-900"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            } font-bold py-2 px-4 rounded-full`}
            onClick={() => setTimeOption(TimeOptions.MEDIUM_TERM)}
          >
            Past 6 Months
          </button>
          <button
            className={`${
              currentTimeOption === TimeOptions.LONG_TERM
                ? "bg-red-700 text-white dark:bg-red-600 dark:text-gray-900"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            } font-bold py-2 px-4 rounded-full`}
            onClick={() => setTimeOption(TimeOptions.LONG_TERM)}
          >
            All Time
          </button>
        </div>
      </div>
    </div>
  );
}
