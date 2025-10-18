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
    <div className="relative flex items-center gap-3 max-w-md">
      {/* Icon buttons */}
      {icons.map((icon, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          aria-label={labels[index]}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
            selectedIndex === index
              ? "text-white bg-gradient-to-br from-purple-500 to-purple-700 backdrop-blur-xl shadow-lg shadow-purple-500/50"
              : "text-gray-300 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20"
          }`}
        >
          <span className="w-6 h-6">{icon}</span>
        </button>
      ))}
    </div>
  );
}
