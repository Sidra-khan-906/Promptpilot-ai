type TutorResponseProps = {
  answer: string;
};

export default function TutorResponse({
  answer,
}: TutorResponseProps) {

  return (
    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-6">

      <h2 className="text-xl-semibold text-white">
        AI Explanation
      </h2>


      <p className="mt-5 leading-8 text-gray-300">
        {answer || "Ask a question and AI Tutor will explain it here."}
      </p>


    </div>
  );
}