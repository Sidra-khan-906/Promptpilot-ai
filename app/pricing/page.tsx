
"use client";
import Link from "next/link";


const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For beginners exploring prompt engineering.",
    features: [
      "AI Prompt Doctor",
      "Basic AI Tutor",
      "Save prompts",
    ],
  },

  {
    name: "Pro",
    price: "$9/month",
    description: "For serious AI users and creators.",
    features: [
      "Unlimited prompt analysis",
      "Advanced AI Tutor",
      "Analytics dashboard",
      "Priority AI access",
    ],
  },

  {
    name: "Enterprise",
    price: "$29/month",
    description: "For teams and professionals.",
    features: [
      "Team workspace",
      "Advanced controls",
      "Premium support",
    ],
  },
];



export default function PricingPage() {


  return (
    <main className="min-h-screen bg-[#0B1020] px-6 py-12 text-white">


      <div className="mx-auto max-w-6xl">


        <Link
          href="/dashboard"
          className="text-sm text-[#4DEAFF]"
        >
          ← Back to Dashboard
        </Link>




        <div className="mt-10 text-center">


          <p className="text-sm uppercase tracking-widest text-[#4DEAFF]">
            Upgrade Your Experience
          </p>


          <h1 className="mt-4 text-5xl font-bold">
            Choose Your Plan
          </h1>


          <p className="mt-4 text-gray-400">
            Unlock powerful AI prompt engineering features.
          </p>


        </div>





        <div className="mt-12 grid gap-6 md:grid-cols-3">



          {plans.map((plan) => (


            <div
              key={plan.name}
              className="rounded-3xl border border-white/10 bg-[#151C34] p-8"
            >


              <h2 className="text-2xl font-bold">
                {plan.name}
              </h2>


              <p className="mt-4 text-4xl font-bold text-[#4DEAFF]">
                {plan.price}
              </p>


              <p className="mt-4 text-gray-400">
                {plan.description}
              </p>




              <ul className="mt-6 space-y-3 text-sm text-gray-300">

                {plan.features.map((feature) => (

                  <li key={feature}>
                    ✓ {feature}
                  </li>

                ))}

              </ul>





             <button
  onClick={() => {

    localStorage.setItem(
      "plan",
      plan.name
    );

    alert(`${plan.name} plan activated ✅`);

  }}
  className="mt-8 w-full rounded-xl bg-[#7C5CFF] py-3 font-medium"
>
  Choose Plan
</button>


            </div>


          ))}


        </div>


      </div>


    </main>
  );
}