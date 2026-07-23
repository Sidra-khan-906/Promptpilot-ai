const stats = [
  {
    value: "10K+",
    label: "Prompts Improved",
  },
  {
    value: "95%",
    label: "AI Accuracy Score",
  },
  {
    value: "24/7",
    label: "AI Assistance",
  },
  {
    value: "4.9/5",
    label: "User Experience",
  },
];

export default function StatsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="rounded-3xl border border-white/10 bg-[#151C34] p-10">

          <div className="grid gap-8 md:grid-cols-4">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-white">
                  {stat.value}
                </h3>

                <p className="mt-2 text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}