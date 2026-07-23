type TipsProps = {
  tips: string[];
};

export default function Tips({ tips }: TipsProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-6">

      <h2 className="text-xl font-semibold text-white">
        Prompt Improvement Tips
      </h2>


      <p className="mt-2 text-sm text-gray-400">
        Suggestions to make your prompts stronger.
      </p>


      <div className="mt-6 space-y-3">

        {tips.map((tip, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-xl bg-[#0B1020] p-4"
          >

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4DEAFF]/20 text-sm text-[#4DEAFF]">
              {index + 1}
            </span>


            <p className="text-sm text-gray-300">
              {tip}
            </p>

          </div>
        ))}

      </div>


    </div>
  );
}