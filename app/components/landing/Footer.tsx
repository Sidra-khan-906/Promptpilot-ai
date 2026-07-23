export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">

      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">

        <div>
          <h3 className="text-xl font-bold text-white">
            PromptPilot AI
          </h3>

          <p className="mt-2 max-w-sm text-sm text-gray-400">
            AI-powered prompt engineering platform to create,
            improve, and master better AI prompts.
          </p>
        </div>


        <div className="flex gap-6 text-sm text-gray-400">

          <a className="transition hover:text-white">
            Docs
          </a>

          <a className="transition hover:text-white">
            Feedback
          </a>

          <a className="transition hover:text-white">
            Changelog
          </a>

          <a className="transition hover:text-white">
            Privacy
          </a>

        </div>

      </div>


      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} PromptPilot AI. All rights reserved.
      </div>

    </footer>
  );
}