"use client";

import { useState } from "react";

import PromptInput from "../components/promptdoctor/PromptInput";
import ScoreCard from "../components/promptdoctor/ScoreCard";
import Diagnosis from "../components/promptdoctor/Diagnosis";
import OptimizedPrompt from "../components/promptdoctor/OptimizedPrompt";
import Tips from "../components/promptdoctor/Tips";

export default function PromptDoctorPage() {

  const [result, setResult] = useState<any>(null);

  return (
    <main className="min-h-screen bg-[#0B1020] text-white">

      <div className="p-6 md:p-10">

        <div className="mb-10">

          <p className="text-sm text-[#4DEAFF]">
            AI Prompt Engineering
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Prompt Doctor
          </h1>

          <p className="mt-3 max-w-2xl text-gray-400">
            Diagnose weak prompts, improve quality, and create
            professional AI instructions.
          </p>

        </div>

        <PromptInput setResult={setResult} />

        {result && (
          <>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">

              <ScoreCard score={result.score} />

            <Diagnosis diagnosis={result.diagnosis} />

            </div>

            <div className="mt-10">

            <OptimizedPrompt optimizedPrompt={result.optimizedPrompt} />

            </div>

            <div className="mt-10">

              <Tips tips={result.tips} />

            </div>

          </>
        )}

      </div>

    </main>
  );
}