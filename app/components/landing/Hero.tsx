import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 pt-24">

      {/* Glow Effects */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7C5CFF]/30 blur-[120px]" />
      <div className="absolute right-1/4 top-1/2 -z-10 h-60 w-60 rounded-full bg-[#4DEAFF]/20 blur-[100px]" />

      <div className="mx-auto max-w-5xl text-center animate-fade-in">

        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 transition hover:border-[#7C5CFF]/50">
          ✨ AI Prompt Engineering Platform
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
          Build Better AI Prompts
          <br />
          <span className="bg-gradient-to-r from-[#7C5CFF] via-[#4DEAFF] to-[#FF5DB1] bg-clip-text text-transparent">
            in Seconds
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Diagnose weak prompts, improve clarity, learn prompt engineering,
          and generate professional prompts with AI.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/login"
            className="rounded-2xl bg-[#7C5CFF] px-8 py-4 text-center font-medium text-white shadow-lg shadow-[#7C5CFF]/30 transition hover:scale-105"
          >
            Start Free
          </Link>

          <Link
            href="/promptdoctor"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center font-medium text-white transition hover:bg-white/10"
          >
            Try Prompt Doctor
          </Link>

        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-[#151C34]/60 p-6 backdrop-blur">

          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-6">

            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Prompt Doctor
              </h3>

              <span className="rounded-full bg-[#7C5CFF]/20 px-3 py-1 text-xs text-[#C4B5FD]">
                AI Analysis
              </span>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#151C34] p-4">

              <p className="text-sm text-gray-400">
                Your prompt:
              </p>

              <p className="mt-2 text-white">
                "Create a professional marketing strategy"
              </p>

            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-gray-400">
                  Health Score
                </p>

                <p className="mt-2 text-2xl font-bold text-[#4DEAFF]">
                  92%
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-gray-400">
                  Issues Found
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  3
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-gray-400">
                  Improved
                </p>

                <p className="mt-2 text-2xl font-bold text-[#FF5DB1]">
                  AI ✓
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}