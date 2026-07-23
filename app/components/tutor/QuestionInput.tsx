"use client";

import { useState } from "react";

export default function QuestionInput({
  question,
  setQuestion,
  setAnswer,
}: {
  question: string;
  setQuestion: (value: string) => void;
  setAnswer: (answer: string) => void;
}) {

  const [loading, setLoading] = useState(false);

  async function askTutor() {

    if (!question.trim()) return;

    setLoading(true);

    try {

      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setAnswer(data.answer);

    } catch (error) {

      console.error(error);
      setAnswer("Something went wrong.");

    }

    setLoading(false);

  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-6">

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything about Prompt Engineering..."
        className="h-36 w-full resize-none rounded-2xl border border-white/10 bg-[#0B1020] p-4 text-white outline-none placeholder:text-gray-500 focus:border-[#7C5CFF]"
      />

      <button
        onClick={askTutor}
        disabled={loading}
        className="mt-5 rounded-xl bg-[#7C5CFF] px-6 py-3 font-medium text-white transition hover:scale-105 disabled:opacity-50"
      >
        {loading ? "Thinking..." : "Ask AI Tutor →"}
      </button>

    </div>
  );
}