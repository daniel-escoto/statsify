import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface FilterBarProps {
  currentSearchOption: string;
  currentTimeOption: string;
  setSearchOption: (value: string) => void;
  setTimeOption: (value: string) => void;
}

export default function FilterBars({
  currentSearchOption,
  currentTimeOption,
  setSearchOption,
  setTimeOption,
}: FilterBarProps) {
  const searchOptions = ["Songs", "Artists"];
  const timeOptions = ["Past Month", "Past 6 Months", "All Time"];

  return (
    <div className="flex flex-col items-center w-full max-w-4xl space-y-4">
      {/* Selected Options Header */}
      <div className="text-sm text-neutral-dark dark:text-neutral-light">
        Viewing <strong>{currentSearchOption}</strong> from{" "}
        <strong>{currentTimeOption}</strong>
      </div>

      {/* Filter Dropdowns */}
      <div className="flex items-center justify-between bg-neutral-light dark:bg-neutral-dark p-4 rounded-lg w-full">
        {/* Search Options Dropdown */}
        <Dropdown
          title={currentSearchOption}
          options={searchOptions}
          onChange={(value) => setSearchOption(value)}
        />

        {/* Time Options Dropdown */}
        <Dropdown
          title={currentTimeOption}
          options={timeOptions}
          onChange={(value) => setTimeOption(value)}
        />
      </div>
    </div>
  );
}

function Dropdown({
  title,
  options,
  onChange,
}: {
  title: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center space-x-2 px-4 py-2 bg-neutral-light dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light rounded-lg border-2 border-primary hover:border-primary-dark focus:ring-2 focus:ring-offset-2 focus:ring-primary transition">
        <span>{title}</span>
        <ChevronDownIcon className="h-5 w-5" />
      </Menu.Button>
      <Menu.Items className="absolute mt-2 w-48 bg-neutral-light dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light rounded-lg shadow-md ring-1 ring-black ring-opacity-5 z-10">
        {options.map((option) => (
          <Menu.Item key={option}>
            {({ active }) => (
              <button
                onClick={() => onChange(option)}
                className={`${
                  active
                    ? "bg-primary text-white"
                    : "text-neutral-dark dark:text-neutral-light"
                } px-4 py-2 w-full text-left rounded-md transition-colors`}
              >
                {option}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
