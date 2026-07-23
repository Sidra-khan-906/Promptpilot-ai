import Link from "next/link";


const features = [
  {
    title: "Prompt Doctor",
    description:
      "Analyze weak prompts, identify issues, and get AI-powered improvements instantly.",
    icon: "🩺",
    link: "/promptdoctor",
  },
  {
    title: "AI Prompt Optimization",
    description:
      "Transform simple ideas into clear, professional prompts optimized for better results.",
    icon: "✨",
    link: "/promptdoctor",
  },
  {
    title: "Prompt Library",
    description:
      "Save, organize, and reuse your best-performing AI prompts anytime.",
    icon: "📚",
    link: "/library",
  },
  {
    title: "AI Tutor",
    description:
      "Learn advanced prompt engineering concepts with an interactive AI mentor.",
    icon: "🤖",
    link: "/tutor",
  },
];


export default function FeatureSection() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-6xl">


        <div className="text-center">

          <p className="text-sm uppercase tracking-widest text-[#4DEAFF]">
            Powerful Features
          </p>


          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Everything you need to master AI prompts
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            A complete AI workspace designed to analyze, improve, and manage
            professional prompts.
          </p>

        </div>




        <div className="mt-16 grid gap-6 md:grid-cols-2">


          {features.map((feature) => (

            <Link
              key={feature.title}
              href={feature.link}
              className="group rounded-3xl border border-white/10 bg-[#151C34] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#7C5CFF]/50"
            >


              <div className="mb-5 text-3xl">
                {feature.icon}
              </div>


              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>


              <p className="mt-3 leading-7 text-gray-400">
                {feature.description}
              </p>


            </Link>

          ))}


        </div>


      </div>

    </section>
  );
}