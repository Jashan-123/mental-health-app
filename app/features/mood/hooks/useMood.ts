"use client";
import { useEffect, useState } from "react";
import { Mood } from "../types";

export default function useMood() {
  const [moods, setMoods] = useState<Mood[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
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

  const addMood = (mood: string, note: string) => {
    if (!mood.trim()) return;
    const newMood: Mood = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      mood,
      note,
    };
    setMoods((prev) => [newMood, ...prev]);
  };

  const deleteMood = (id: number) => {
    setMoods((prev) => prev.filter((m) => m.id !== id));
  };

  return { moods, addMood, deleteMood };
}
