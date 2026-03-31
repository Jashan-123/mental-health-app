"use client";
import { useEffect, useState } from "react";
import MoodCard from "./../../components/MoodCard";

type Mood = {
  id: number;
  date: string;
  mood: string;
  note: string;
};

const initialMoods: Mood[] = [
  { id: 1, date: "2025-03-28", mood: "Happy", note: "Good day" },
  { id: 2, date: "2025-03-29", mood: "Anxious", note: "Deadline pressure" },
  { id: 3, date: "2025-03-30", mood: "Calm", note: "Meditated" },
];
function Dashboard() {
  const [moods, setMoods] = useState<Mood[]>(initialMoods);
  const [hydrated, setHydrated] = useState(false);
  const [moodInput, setMoodInput] = useState("");
  const [noteInput, setNoteInput] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    setName(savedName ? savedName : "Buddy");

    const savedMoods = localStorage.getItem("moods");
    if (savedMoods) {
      try {
        setMoods(JSON.parse(savedMoods));
      } catch (error) {
        console.error("Failed to parse moods from localStorage", error);
      }
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("moods", JSON.stringify(moods));
    }
  }, [hydrated, moods]);

  const handleSubmit = () => {
    if (!moodInput.trim()) return;

    const newMood: Mood = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      mood: moodInput,
      note: noteInput,
    };

    setMoods([newMood, ...moods]); // newest first
    setMoodInput("");
    setNoteInput("");
  };
  return (
    <div className="max-w-5xl mx-auto p-6 text-slate-800">
      {/* 1. Header: Minimal vertical spacing */}
      <header className="mb-10">
        <h1 className="text-2xl font-bold text-white">Daily Check-in</h1>
      </header>
      <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          How are you feeling today? {name}
        </h2>

        <div className="flex gap-3 flex-wrap">
          {["Happy", "Calm", "Anxious", "Sad", "Grateful"].map((m) => (
            <button
              key={m}
              onClick={() => setMoodInput(m)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                moodInput === m
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-600 border-gray-300 hover:border-indigo-400"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Add a note (optional)"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          className="mt-4 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-400"
        />

        <button
          onClick={handleSubmit}
          className="mt-3 bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm hover:bg-indigo-700 transition-colors"
        >
          Save mood
        </button>
      </div>

      {/* 2. Stats Grid: Responsive 1 to 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {moods.map((mood) => (
          <MoodCard
            key={mood.id}
            date={mood.date}
            mood={mood.mood}
            note={mood.note}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
