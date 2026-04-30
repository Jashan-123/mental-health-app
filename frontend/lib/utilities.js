export const moodColors = {
  Happy: "bg-yellow-50 border-yellow-200",
  Calm: "bg-green-50 border-green-200",
  Anxious: "bg-orange-50 border-orange-200",
  Sad: "bg-blue-50 border-blue-200",
  Grateful: "bg-purple-50 border-purple-200",
};

export const moodEmojiMap = {
  Happy: "😄",
  Sad: "😢",
  Anxious: "😟",
  Calm: "😌",
  Angry: "😠",
  Excited: "🤩",
  Grateful: "🙏",
};

export function moodToEmoji(mood) {
  return moodEmojiMap[mood] ?? "🙂";
}
