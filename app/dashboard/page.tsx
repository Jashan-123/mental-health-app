// app/dashboard/page.tsx
export default function MentalHealthSkeleton() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-slate-800">
      {/* 1. Header: Minimal vertical spacing */}
      <header className="mb-10">
        <h1 className="text-2xl font-bold">Daily Check-in</h1>
        <p className="text-slate-500">How are you feeling today, Alex?</p>
      </header>

      {/* 2. Stats Grid: Responsive 1 to 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="p-4 border rounded-xl bg-white">
          <span className="text-xs uppercase text-slate-400 font-semibold">
            Mood
          </span>
          <div className="text-xl font-medium mt-1">Calm</div>
        </div>
        <div className="p-4 border rounded-xl bg-white">
          <span className="text-xs uppercase text-slate-400 font-semibold">
            Sleep
          </span>
          <div className="text-xl font-medium mt-1">7h 20m</div>
        </div>
        <div className="p-4 border rounded-xl bg-white">
          <span className="text-xs uppercase text-slate-400 font-semibold">
            Activity
          </span>
          <div className="text-xl font-medium mt-1">2/3 Done</div>
        </div>
      </div>

      {/* 3. Placeholder List: Simple vertical stack */}
      <section className="border rounded-xl p-6 bg-white">
        <h2 className="font-semibold mb-4">Recent Journal Entries</h2>
        <div className="space-y-3">
          <div className="h-10 bg-slate-50 rounded-md w-full animate-pulse" />
          <div className="h-10 bg-slate-50 rounded-md w-3/4 animate-pulse" />
          <div className="h-10 bg-slate-50 rounded-md w-1/2 animate-pulse" />
        </div>
      </section>
    </div>
  );
}
