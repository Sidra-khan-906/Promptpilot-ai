import Link from "next/link";

const actions = [
  {
    title: "Analyze Prompt",
    description: "Check prompt quality and find issues.",
    icon: "🔍",
    link: "/promptdoctor",
  },
  {
    title: "Improve Prompt",
    description: "Optimize your prompt with AI.",
    icon: "✨",
    link: "/promptdoctor",
  },
  {
    title: "Generate Prompt",
    description: "Create professional prompts faster.",
    icon: "🤖",
    link: "/library",
  },
];

export default function QuickActions() {
  return (
    <section>

      <h2 className="mb-5 text-xl font-semibold text-white">
        Quick Actions
      </h2>


      <div className="grid gap-5 md:grid-cols-3">

        {actions.map((action) => (

          <div
            key={action.title}
            className="rounded-2xl border border-white/10 bg-[#151C34] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7C5CFF]/50"
          >

            <div className="text-3xl">
              {action.icon}
            </div>


            <h3 className="mt-4 text-lg font-semibold text-white">
              {action.title}
            </h3>


            <p className="mt-2 text-sm leading-6 text-gray-400">
              {action.description}
            </p>


            <Link
              href={action.link}
              className="mt-5 inline-block text-sm text-[#4DEAFF]"
            >
              Open →
            </Link>


          </div>

        ))}

      </div>

    </section>
  );
}