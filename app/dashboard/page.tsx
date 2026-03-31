"use client";
import MoodForm from "@/components/MoodForm";
import MoodCard from "@/components/MoodCard";
import useMood from "@/hooks/useMood";

export default function DashboardPage() {
  const { moods, addMood } = useMood();

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-white mb-2">Daily Check-in</h1>
      <MoodForm onSubmit={addMood} />

      <div className="grid grid-cols-3 gap-4">
        {moods.map((entry) => (
          <MoodCard key={entry.id} {...entry} />
        ))}
      </div>
    </main>
  );
}
