import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RecentlyPlayedTrack, ListeningInsights } from "./Interfaces";
import RecentTrackCard from "./RecentTrackCard";
import { RECENTLY_PLAYED_ENDPOINT } from "../utilities/Config";
import Spinner from "./Spinner";
import { useSpotifyApi } from "../utilities/useSpotifyApi";
import { startOfToday, isToday, format } from "date-fns";

export default function RecentlyPlayed() {
  const [recentTracks, setRecentTracks] = useState<RecentlyPlayedTrack[]>([]);
  const [insights, setInsights] = useState<ListeningInsights | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { get } = useSpotifyApi();

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      try {
        setIsLoading(true);
        const response = await get(RECENTLY_PLAYED_ENDPOINT + "?limit=50");
        const data = await response.json();
        setRecentTracks(data.items);

        // Calculate insights
        const todayTracks = data.items.filter((item: RecentlyPlayedTrack) =>
          isToday(new Date(item.played_at))
        );

        const hourCounts = new Array(24).fill(0);
        todayTracks.forEach((item: RecentlyPlayedTrack) => {
          const playedAt = new Date(item.played_at);
          const hour = playedAt.getHours();
          hourCounts[hour]++;
        });

        const totalTime = todayTracks.reduce(
          (acc: number, item: RecentlyPlayedTrack) =>
            acc + item.track.duration_ms,
          0
        );

        const mostActiveHour = hourCounts.reduce(
          (max, count, hour) => (count > hourCounts[max] ? hour : max),
          0
        );

        // Format the hour in 12-hour format
        const formattedHour = format(
          new Date().setHours(mostActiveHour, 0, 0, 0),
          "h:00 a"
        );

        setInsights({
          mostActiveHour: formattedHour,
          tracksPlayedToday: todayTracks.length,
          totalListeningTime: totalTime,
          hourlyActivity: hourCounts.map((count, hour) => ({ hour, count })),
        });
      } catch (error) {
        console.error("Error fetching recently played tracks:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentlyPlayed();
    // Refresh data every 5 minutes
    const interval = setInterval(fetchRecentlyPlayed, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [get]);

  if (isLoading) {
    return <Spinner />;
  }

  const hasActivityToday = insights && insights.tracksPlayedToday > 0;

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-primary dark:text-white">
          Recently Played
        </h2>

        {/* Insights Section */}
        {insights && (
          <>
            {!hasActivityToday && (
              <div className="mb-8 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <p className="text-neutral-600 dark:text-gray-400 text-sm text-center">
                  No listening activity today. Your insights will appear here
                  once you start playing some tracks!
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg">
                <h3 className="text-neutral-600 dark:text-gray-400 text-sm mb-2">
                  Tracks Today
                </h3>
                <p className="text-2xl font-bold text-primary dark:text-white">
                  {insights.tracksPlayedToday}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg">
                <h3 className="text-neutral-600 dark:text-gray-400 text-sm mb-2">
                  Most Active Hour
                </h3>
                <p className="text-2xl font-bold text-primary dark:text-white">
                  {insights.mostActiveHour}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg">
                <h3 className="text-neutral-600 dark:text-gray-400 text-sm mb-2">
                  Listening Time
                </h3>
                <p className="text-2xl font-bold text-primary dark:text-white">
                  {Math.round(insights.totalListeningTime / (1000 * 60))}m
                </p>
              </div>
            </div>
          </>
        )}

        {/* Recent Tracks List */}
        <div className="space-y-4">
          {recentTracks.map((track) => (
            <RecentTrackCard
              key={track.played_at + track.track.id}
              track={track}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
