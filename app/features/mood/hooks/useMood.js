"use client";
import { useLocalStorageSync } from "./useLocalStorageSync.js";

export default function useMood() {
  const {
    value: moods,
    updateValue: setMoods,
    isLoaded,
  } = useLocalStorageSync("moods", []);

  const addMood = (mood, note) => {
    if (!mood.trim()) return;
    const newMood = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      mood,
      note,
    };
    setMoods([newMood, ...moods]);
  };

  const deleteMood = (id) => {
    setMoods(moods.filter((m) => m.id !== id));
  };

  return { moods, addMood, deleteMood, isLoaded };
}
