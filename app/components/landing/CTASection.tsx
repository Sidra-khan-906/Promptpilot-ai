import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-6xl">

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#151C34] px-8 py-16 text-center">

          {/* Glow */}
          <div className="absolute left-1/2 top-0 -z-0 h-60 w-60 -translate-x-1/2 rounded-full bg-[#7C5CFF]/30 blur-[100px]" />

          <div className="relative z-10">

            <p className="text-sm uppercase tracking-widest text-[#4DEAFF]">
              Start Creating
            </p>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Build smarter prompts
              <br />
              with AI assistance
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Analyze, optimize, and manage your AI prompts in one powerful
              workspace built for modern AI users.
            </p>

            <Link
              href="/login"
              className="mt-8 inline-block rounded-2xl bg-[#7C5CFF] px-10 py-4 font-medium text-white shadow-lg shadow-[#7C5CFF]/30 transition hover:scale-105"
            >
              Get Started Free
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}