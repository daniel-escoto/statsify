import { SearchOptions, TimeOptions } from "./Interfaces";
import ToggleContainer from "./ToggleContainer";

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
      <ToggleContainer
        options={[
          { label: "Songs", value: SearchOptions.TRACK },
          { label: "Artists", value: SearchOptions.ARTIST },
        ]}
        activeValue={currentSearchOption}
        onChange={setSearchOption}
      />

      <ToggleContainer
        options={[
          { label: "Past Month", value: TimeOptions.SHORT_TERM },
          { label: "Past 6 Months", value: TimeOptions.MEDIUM_TERM },
          { label: "All Time", value: TimeOptions.LONG_TERM },
        ]}
        activeValue={currentTimeOption}
        onChange={setTimeOption}
      />
    </div>
  );
}
