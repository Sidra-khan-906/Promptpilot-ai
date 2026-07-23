import Link from "next/link";

export default function LibraryHeader() {
  return (
    <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">

      <div>

        <p className="text-sm text-[#4DEAFF]">
          Prompt Management
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          Prompt Library
        </h1>

        <p className="mt-3 max-w-xl text-gray-400">
          Organize, search, and reuse your best AI prompts from one place.
        </p>

      </div>

      <Link
        href="/promptdoctor"
        className="rounded-xl bg-[#7C5CFF] px-6 py-3 font-medium text-white transition hover:scale-105"
      >
        + New Prompt
      </Link>

    </div>
  );
}