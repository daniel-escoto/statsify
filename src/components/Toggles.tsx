import { SearchOptions, TimeOptions } from "./Interfaces";
import Button from "./Button";

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
    <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl px-4 py-4 space-y-4 md:space-y-0">
      {/* Search Options (Songs / Artists) */}
      <div className="flex gap-4">
        <Button
          isActive={currentSearchOption === SearchOptions.TRACK}
          onClick={() => setSearchOption(SearchOptions.TRACK)}
        >
          Songs
        </Button>
        <Button
          isActive={currentSearchOption === SearchOptions.ARTIST}
          onClick={() => setSearchOption(SearchOptions.ARTIST)}
        >
          Artists
        </Button>
      </div>

      {/* Time Options (Past Month, Past 6 Months, All Time) */}
      <div className="flex gap-4">
        <Button
          isActive={currentTimeOption === TimeOptions.SHORT_TERM}
          onClick={() => setTimeOption(TimeOptions.SHORT_TERM)}
        >
          Past Month
        </Button>
        <Button
          isActive={currentTimeOption === TimeOptions.MEDIUM_TERM}
          onClick={() => setTimeOption(TimeOptions.MEDIUM_TERM)}
        >
          Past 6 Months
        </Button>
        <Button
          isActive={currentTimeOption === TimeOptions.LONG_TERM}
          onClick={() => setTimeOption(TimeOptions.LONG_TERM)}
        >
          All Time
        </Button>
      </div>
    </div>
  );
}
