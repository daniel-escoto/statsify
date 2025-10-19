interface SegmentedSliderProps {
  icons: React.ReactNode[];
  labels: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
}

export default function SegmentedSlider({
  icons,
  labels,
  selectedIndex,
  onChange,
}: SegmentedSliderProps) {
  return (
    <div className="relative flex max-w-md items-center gap-3 rounded-full bg-purple-950/20 p-2 backdrop-blur-xl">
      {/* Icon buttons */}
      {icons.map((icon, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          aria-label={labels[index]}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
            selectedIndex === index
              ? 'bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-500/50 backdrop-blur-xl'
              : 'border border-white/20 bg-white/10 text-gray-300 backdrop-blur-md hover:bg-white/20'
          }`}
        >
          <span className="h-6 w-6">{icon}</span>
        </button>
      ))}
    </div>
  );
}
