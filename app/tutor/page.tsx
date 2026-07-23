"use client";

import { useState } from "react";

import TutorHeader from "../components/tutor/TutorHeader";
import QuestionInput from "../components/tutor/QuestionInput";
import TutorResponse from "../components/tutor/TutorResponse";
import SuggestionCards from "../components/tutor/SuggestionCards";

export default function TutorPage() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <main className="min-h-screen bg-[#0B1020] px-6 py-10 text-white md:px-10">

      <TutorHeader />

      <QuestionInput
        question={question}
        setQuestion={setQuestion}
        setAnswer={setAnswer}
      />

      <div className="mt-8">
        <TutorResponse answer={answer} />
      </div>

      <div className="mt-8">

        <h2 className="mb-4 text-xl font-semibold">
          Suggested Topics
        </h2>

        <SuggestionCards
          setQuestion={setQuestion}
        />

      </div>

    </main>
  );
}