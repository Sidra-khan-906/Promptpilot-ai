type DiagnosisProps = {
  diagnosis: string[];
};

export default function Diagnosis({ diagnosis }: DiagnosisProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-6">

      <h2 className="text-xl font-semibold text-white">
        AI Diagnosis
      </h2>

      <p className="mt-2 text-sm text-gray-400">
        Problems detected in your prompt.
      </p>


      <div className="mt-6 space-y-4">

        {diagnosis.map((issue, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B1020] p-4"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF5DB1]/20 text-[#FF5DB1]">
              !
            </span>


            <p className="text-sm text-gray-300">
              {issue}
            </p>


          </div>
        ))}

      </div>


    </div>
  );
}