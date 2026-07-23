"use client";

import { useEffect, useState } from "react";

type ScoreData = {
  score: number;
  date: string;
};

export default function ChartPlaceholder() {

  const [scores, setScores] = useState<ScoreData[]>([]);

  useEffect(() => {

    const history = JSON.parse(
      localStorage.getItem("promptHistory") || "[]"
    );

    const lastSeven = history
      .slice(-7)
      .map((item: any) => ({
        score: Number(item.score || 0),
        date: item.date,
      }));

    setScores(lastSeven);

  }, []);

  return (

    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-8">

      <h2 className="mb-2 text-xl font-semibold text-white">
        Prompt Performance
      </h2>

      <p className="mb-8 text-sm text-gray-400">
        Last 7 prompt analysis scores
      </p>

      {scores.length === 0 ? (

        <p className="text-gray-400">
          No performance data available.
        </p>

      ) : (

        <div className="flex h-72 items-end justify-around">

          {scores.map((item, index) => (

            <div
              key={index}
              className="flex flex-col items-center"
            >

              <span className="mb-2 text-xs text-[#4DEAFF]">
                {item.score}%
              </span>

              <div
                className="w-10 rounded-t-xl bg-[#7C5CFF] hover:bg-[#4DEAFF] transition"
                style={{
  height: `${Math.max(item.score * 2.5, 30)}px`,
}}
              />

              <span className="mt-2 text-xs text-gray-500">
                {index + 1}
              </span>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}