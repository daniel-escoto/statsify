import { memo } from "react";

interface RankProps {
  rank: number;
}

function Rank({ rank }: RankProps) {
  const rankColors: Record<number, string> = {
    1: "text-yellow-400",
    2: "text-gray-300",
    3: "text-orange-500",
  };

  const rankSizes: Record<number, string> = {
    1: "text-xl",
    2: "text-lg",
    3: "text-md",
  };

  const rankColor = rankColors[rank] || "text-white";
  const rankSize = rankSizes[rank] || "text-sm";

  return (
    <span className={`font-semibold ${rankColor} ${rankSize}`}>#{rank}</span>
  );
}

export default memo(Rank);
