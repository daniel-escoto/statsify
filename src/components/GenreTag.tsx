export default function GenreTag({ genre }: { genre: string }) {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 dark:bg-gray-700 dark:text-gray-200">
      {genre}
    </span>
  );
}