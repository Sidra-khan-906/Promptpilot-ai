"use client";

import { useState } from "react";

type OptimizedPromptProps = {
  optimizedPrompt: string;
};

export default function OptimizedPrompt({
  optimizedPrompt,
}: OptimizedPromptProps) {

  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);


  const savePrompt = () => {
  const savedPrompts = JSON.parse(
    localStorage.getItem("savedPrompts") || "[]"
  );

  savedPrompts.push({
  title: optimizedPrompt.slice(0, 30) + "...",
  prompt: optimizedPrompt,
  date: new Date().toISOString(),
});

  localStorage.setItem(
    "savedPrompts",
    JSON.stringify(savedPrompts)
  );

  setSaved(true);

  setTimeout(() => {
    setSaved(false);
  }, 2000);
};


  const copyPrompt = async () => {
    await navigator.clipboard.writeText(optimizedPrompt);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };


  return (
    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold text-white">
          Optimized Prompt
        </h2>


        <span className="rounded-full bg-[#7C5CFF]/20 px-3 py-1 text-xs text-[#C4B5FD]">
          AI Improved
        </span>

      </div>


      <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B1020] p-5">

        <p className="leading-7 text-gray-300">
          {optimizedPrompt}
        </p>

      </div>


      <div className="mt-5 flex gap-3">

        <button
          onClick={copyPrompt}
          className="rounded-xl bg-[#7C5CFF] px-5 py-3 text-sm font-medium text-white transition hover:scale-105"
        >
          {copied ? "Copied ✓" : "Copy Prompt"}
        </button>


        <button
          onClick={savePrompt}
          className="rounded-xl border border-white/10 bg-[#0B1020] px-5 py-3 text-sm font-medium text-gray-300 transition hover:text-white"
        >
          {saved ? "Saved ✓" : "Save"}
        </button>


      </div>


    </div>
  );
}