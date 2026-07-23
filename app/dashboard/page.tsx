"use client";

import { useEffect, useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentPrompts from "../components/dashboard/RecentPrompts";
import WelcomeBanner from "../components/dashboard/Welcomebanner";


export default function DashboardPage() {


  const [search, setSearch] = useState("");


  const [stats, setStats] = useState({
    prompts: 0,
    average: 0,
    saved: 0,
    usage: 0,
  });



  useEffect(() => {

    const savedPrompts = JSON.parse(
      localStorage.getItem("savedPrompts") || "[]"
    );


    const history = JSON.parse(
      localStorage.getItem("promptHistory") || "[]"
    );


    const average =
      history.length > 0
        ? history.reduce(
            (sum: number, item: any) =>
              sum + Number(item.score || 0),
            0
          ) / history.length
        : 0;



    setStats({

      prompts: history.length,

      average: Math.round(average),

      saved: savedPrompts.length,

      usage:
        history.length > 0
          ? Math.min(history.length * 10, 100)
          : 0,

    });



  }, []);





  return (

    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">


      <div className="flex">


        <Sidebar />


        <div className="flex-1">


          <Topbar
            search={search}
            setSearch={setSearch}
          />



          <div className="p-6">


            <WelcomeBanner />



            <section className="mt-8">

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">


                <StatCard
                  title="Total Prompts"
                  value={String(stats.prompts)}
                  description="Prompts created"
                  icon="✨"
                  link="/library"
                />


                <StatCard
                  title="Average Score"
                  value={`${stats.average}%`}
                  description="Prompt quality"
                  icon="📊"
                  link="/analytics"
                />


                <StatCard
                  title="Saved Prompts"
                  value={String(stats.saved)}
                  description="Your library"
                  icon="📚"
                  link="/library"
                />


                <StatCard
                  title="AI Usage"
                  value={`${stats.usage}%`}
                  description="Monthly activity"
                  icon="🤖"
                  link="/analytics"
                />


              </div>

            </section>




            <section className="mt-10">
              <QuickActions />
            </section>




            <section className="mt-10">
              <RecentPrompts search={search} />
            </section>



          </div>


        </div>


      </div>


    </main>

  );
}