"use client";

import { useState } from "react";
import Link from "next/link";

type PromptCardProps = {
  title: string;
  category: string;
  description: string;
};

export default function PromptCard({
  title,
  category,
  description,
}: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    await navigator.clipboard.writeText(
      `${title}\n\n${description}`
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-6 transition hover:border-[#7C5CFF]">

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <span className="rounded-full bg-[#7C5CFF]/20 px-3 py-1 text-xs text-[#C4B5FD]">
          {category}
        </span>

      </div>

      <p className="mt-4 text-sm leading-6 text-gray-400">
        {description}
      </p>

      <div className="mt-6 flex gap-3">

        <Link
          href="/promptdoctor"
          className="rounded-xl bg-[#7C5CFF] px-4 py-2 text-sm text-white transition hover:scale-105"
        >
          Open
        </Link>

        <button
          onClick={copyPrompt}
          className="rounded-xl border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:text-white"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>

      </div>

    </div>
  );
}