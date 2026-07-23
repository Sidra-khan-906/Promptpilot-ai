"use client";

import { useState } from "react";

export default function PromptInput({
  setResult,
}: {
  setResult: (data: any) => void;
}) {

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  async function analyzePrompt() {

    if (!prompt.trim()) {
      setError("Please enter a prompt first.");
      return;
    }


    setError("");
    setLoading(true);


    try {

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });


      const data = await res.json();


     if (!res.ok) {

  if (res.status === 429) {
    throw new Error(
      "AI request limit reached. Please wait a minute and try again."
    );
  }

  throw new Error(
    data.error || "Something went wrong."
  );
}

      console.log("Gemini Response:", data);


      setResult(data);



      // Save analytics history

      const history = JSON.parse(
        localStorage.getItem("promptHistory") || "[]"
      );


     history.push({
 title: prompt.slice(0, 30) + "...",
  score: data.score,
  date: new Date().toISOString(),
});

      localStorage.setItem(
        "promptHistory",
        JSON.stringify(history)
      );


    } catch (err: any) {

  console.error(err);

  if (
    err.message?.includes("RESOURCE_EXHAUSTED") ||
    err.message?.includes("429")
  ) {
    setError(
      "AI request limit reached. Please wait a minute and try again."
    );
  } else {
    setError(
      err.message || "Failed to analyze prompt."
    );
  }

}


    setLoading(false);

  }


  return (
    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-6">


      <h2 className="text-xl font-semibold text-white">
        Enter Your Prompt
      </h2>


      <p className="mt-2 text-sm text-gray-400">
        Paste your prompt and let AI analyze its quality.
      </p>



      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: Create a marketing strategy for my product..."
        className="mt-6 h-40 w-full resize-none rounded-2xl border border-white/10 bg-[#0B1020] p-4 text-white outline-none placeholder:text-gray-500 focus:border-[#7C5CFF]"
      />



      {error && (
        <p className="mt-3 text-sm text-[#FF5DB1]">
          {error}
        </p>
      )}



      <button
        onClick={analyzePrompt}
        disabled={loading}
        className="mt-5 rounded-xl bg-[#7C5CFF] px-6 py-3 text-sm font-medium text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze Prompt →"}
      </button>


    </div>
  );
}