"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Stethoscope,
  Library,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";


const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Prompt Doctor", href: "/promptdoctor", icon: Stethoscope },
  { name: "Prompt Library", href: "/library", icon: Library },
  { name: "AI Tutor", href: "/tutor", icon: Bot },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];


export default function Sidebar() {

  const pathname = usePathname();


  return (

    <aside className="hidden min-h-screen w-72 bg-[#0B1020] p-6 md:block">


      {/* Logo */}

      <div className="mb-10">

        <Link href="/">

          <h1 className="cursor-pointer text-2xl font-bold text-white">
            PromptPilot
          </h1>

        </Link>


        <p className="mt-1 text-xs tracking-widest text-[#4DEAFF]">
          AI COPILOT
        </p>

      </div>





      {/* Navigation */}

      <nav className="space-y-2">


        {menuItems.map((item) => (

          <Link

            key={item.name}

            href={item.href}

            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
              pathname === item.href
                ? "bg-[#7C5CFF] text-white shadow-lg shadow-[#7C5CFF]/20"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}

          >

            <item.icon size={20} />

            {item.name}

          </Link>

        ))}


      </nav>







      {/* Upgrade */}

      <div className="mt-10 rounded-2xl bg-[#151C34] p-5">


        <p className="font-semibold text-white">
          Upgrade Plan
        </p>


        <p className="mt-2 text-sm text-gray-400">
          Unlock advanced AI features.
        </p>




        <Link

          href="/pricing"

          className="mt-4 block w-full rounded-xl bg-[#7C5CFF] py-2 text-center text-sm font-medium text-white transition hover:scale-[1.02]"

        >

          Upgrade

        </Link>


      </div>



    </aside>

  );
}