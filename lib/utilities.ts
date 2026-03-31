export const moodColors: Record<string, string> = {
  Happy: "bg-yellow-50 border-yellow-200",
  Calm: "bg-green-50 border-green-200",
  Anxious: "bg-orange-50 border-orange-200",
  Sad: "bg-blue-50 border-blue-200",
  Grateful: "bg-purple-50 border-purple-200",
};

export const moodEmojiMap: Record<string, string> = {
  Happy: "😄",
  Sad: "😢",
  Anxious: "😟",
  Calm: "😌",
  Angry: "😠",
  Excited: "🤩",
  Grateful: "🙏",
};

export function moodToEmoji(mood: string): string {
  return moodEmojiMap[mood] ?? "🙂";
}
