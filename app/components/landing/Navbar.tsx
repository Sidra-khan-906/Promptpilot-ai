import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7C5CFF] font-bold text-white">
            P
          </div>


          <div>
            <h1 className="text-lg font-bold text-white">
              PromptPilot
            </h1>

            <p className="text-xs text-gray-400">
              AI COPILOT
            </p>
          </div>

        </Link>



        {/* Links */}
        <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">

          <a
            href="#features"
            className="transition hover:text-white"
          >
            Features
          </a>


          <Link
            href="/promptdoctor"
            className="transition hover:text-white"
          >
            Prompt Doctor
          </Link>


          <Link
            href="/tutor"
            className="transition hover:text-white"
          >
            AI Tutor
          </Link>


          <Link
            href="/dashboard"
            className="transition hover:text-white"
          >
            Dashboard
          </Link>

        </div>



        {/* Buttons */}
        <div className="flex items-center gap-3">


          <Link
            href="/login"
            className="hidden text-sm text-gray-300 transition hover:text-white sm:block"
          >
            Sign In
          </Link>


          <Link
            href="/login"
            className="rounded-xl bg-[#7C5CFF] px-5 py-2.5 text-sm font-medium text-white transition hover:scale-105"
          >
            Get Started
          </Link>


        </div>


      </div>

    </nav>
  );
}