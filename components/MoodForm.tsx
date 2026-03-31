// components/ui/MoodForm.tsx
"use client";

import { useEffect, useState } from "react";

const MOOD_OPTIONS = ["Happy", "Calm", "Anxious", "Sad", "Grateful"];

type Props = {
  onSubmit: (mood: string, note: string) => void;
};

export default function MoodForm({ onSubmit }: Props) {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    } else {
      setName("Bud");
    }
  });

  const handleSubmit = () => {
    if (!selectedMood) return;
    onSubmit(selectedMood, note);
    setSelectedMood("");
    setNote("");
  };

  return (
    <div className="bg-white rounded-2xl p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        How are you feeling? {name}!
      </h2>
      <div className="flex gap-3 flex-wrap">
        {MOOD_OPTIONS.map((m) => (
          <button
            key={m}
            onClick={() => setSelectedMood(m)}
            className={`px-4 py-2 rounded-full text-sm border transition-all ${
              selectedMood === m
                ? "bg-indigo-600 text-white border-indigo-600"
                : "border-gray-300 text-gray-600 hover:border-indigo-400"
            }`}
          >
            {m}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add a note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="mt-4 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-400"
      />
      <button
        onClick={handleSubmit}
        className="mt-3 bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm hover:bg-indigo-700"
      >
        Save mood
      </button>
    </div>
  );
}
