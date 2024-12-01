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
    <div className="flex items-center justify-between bg-neutral-light dark:bg-neutral-dark p-4 rounded-lg shadow-md w-full max-w-4xl">
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
      <Menu.Button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark focus:ring-2 focus:ring-offset-2 focus:ring-primary">
        <span>{title}</span>
        <ChevronDownIcon className="h-5 w-5" />
      </Menu.Button>
      <Menu.Items className="absolute mt-2 w-40 bg-white dark:bg-neutral-dark rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10">
        {options.map((option) => (
          <Menu.Item key={option}>
            {({ active }) => (
              <button
                onClick={() => onChange(option)}
                className={`${
                  active
                    ? "bg-primary text-white"
                    : "text-gray-800 dark:text-gray-200"
                } px-4 py-2 w-full text-left`}
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
