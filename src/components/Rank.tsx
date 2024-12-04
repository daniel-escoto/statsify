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

  const rankColor = rankColors[rank] || "text-white";

  return <span className={`font-semibold ${rankColor} text-lg`}>#{rank}</span>;
}

export default memo(Rank);
