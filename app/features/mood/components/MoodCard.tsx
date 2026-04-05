import { moodColors, moodToEmoji } from "@/lib/utilities";

interface MoodCardProps {
  date: string;
  mood: string;
  note: string;
}

function MoodCard({ date, mood, note }: MoodCardProps) {
  const emoji = moodToEmoji(mood);
  const moodClass = moodColors[mood] ?? "bg-gray-50 border-gray-200";

  return (
    <div
      className={`rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow flex flex-col justify-between h-40 ${moodClass}`}
    >
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {emoji} {mood}
        </h3>
        <p className="text-gray-700">{note}</p>
      </div>
      <p className="text-sm text-gray-500 self-end mt-4">{date}</p>
    </div>
  );
}

export default MoodCard;
