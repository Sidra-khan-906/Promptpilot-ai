type ScoreCardProps = {
  score: number;
};

export default function ScoreCard({ score }: ScoreCardProps) {

  let level = "Needs Improvement";

  if (score >= 80) {
    level = "Excellent";
  } else if (score >= 60) {
    level = "Good";
  } else if (score >= 40) {
    level = "Average";
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-400">
            Prompt Health Score
          </p>

          <h2 className="mt-3 text-5xl font-bold text-[#4DEAFF]">
            {score}%
          </h2>

        </div>

        <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#7C5CFF] text-2xl font-bold text-white">
          AI
        </div>

      </div>

      <div className="mt-6">

        <p className="text-sm text-gray-400">
          Quality Level
        </p>

        <p className="mt-2 text-lg font-semibold text-white">
          {level}
        </p>

      </div>

    </div>
  );
}