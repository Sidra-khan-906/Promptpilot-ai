export default function LandingHero() {
  return (
    <section className="min-h-screen bg-[#0B1020] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold text-violet-400">
          PromptPilot AI
        </h1>

        <div className="hidden gap-10 text-gray-300 md:flex">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
        </div>

        <button className="rounded-xl bg-violet-600 px-5 py-3 font-semibold hover:bg-violet-500 transition">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <div className="mx-auto flex max-w-7xl flex-col items-center px-8 pt-24 text-center">

        <p className="rounded-full border border-violet-500 px-5 py-2 text-sm text-violet-300">
          AI Prompt Engineering Platform
        </p>

        <h2 className="mt-8 max-w-4xl text-6xl font-extrabold leading-tight">
          Build Better AI Prompts
          <span className="block text-violet-400">
            in Seconds
          </span>
        </h2>

        <p className="mt-8 max-w-2xl text-xl text-gray-400">
          Diagnose weak prompts, improve clarity,
          learn prompt engineering, and generate
          professional prompts with AI.
        </p>

        <div className="mt-12 flex gap-6">
          <button className="rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold hover:bg-violet-500 transition">
            Start Free
          </button>

          <button className="rounded-xl border border-gray-600 px-8 py-4 text-lg hover:border-violet-500 transition">
            Watch Demo
          </button>
        </div>

      </div>
    </section>
  );
}