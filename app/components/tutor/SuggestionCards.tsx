"use client";

const suggestions = [
  "What is Zero-shot Prompting?",
  "Few-shot Prompting",
  "Chain of Thought Prompting",
  "Role Prompting",
];

export default function SuggestionCards({
  setQuestion,
}: {
  setQuestion: (question: string) => void;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">

      {suggestions.map((item) => (

        <button
          key={item}
          onClick={() => setQuestion(item)}
          className="rounded-2xl border border-white/10 bg-[#151C34] p-5 text-left transition hover:border-[#7C5CFF]"
        >

          <p className="text-white">
            {item}
          </p>

        </button>

      ))}

    </div>
  );
}