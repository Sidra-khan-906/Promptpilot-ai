import Link from "next/link";

export default function WelcomeBanner() {
  return (
    <div className="mb-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#151C34] to-[#0B1020] p-8">

      <div className="max-w-2xl">

        <p className="text-sm text-[#4DEAFF]">
          AI Prompt Engineering Workspace
        </p>


        <h1 className="mt-3 text-3xl font-bold text-white">
          Build smarter prompts with AI
        </h1>


        <p className="mt-3 text-gray-400">
          Diagnose weak prompts, improve quality, and create
          professional AI instructions faster.
        </p>



        <Link
          href="/promptdoctor"
          className="mt-6 inline-block rounded-xl bg-[#7C5CFF] px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
        >
          Analyze New Prompt →
        </Link>


      </div>

    </div>
  );
}