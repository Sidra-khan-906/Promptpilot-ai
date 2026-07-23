"use client";

import { useEffect, useState } from "react";

import AnalyticsHeader from "../components/analytics/AnalyticsHeader";
import AnalyticsCard from "../components/analytics/AnalyticsCard";
import ChartPlaceholder from "../components/analytics/ChartPlaceholder";
import ActivityTable from "../components/analytics/ActivityTable";


export default function AnalyticsPage() {


  const [stats, setStats] = useState({
    prompts: 0,
    average: 0,
    requests: 0,
    success: 0,
  });




  useEffect(() => {


    const history = JSON.parse(
      localStorage.getItem("promptHistory") || "[]"
    );



    let average = 0;



    if (history.length > 0) {

      average =
        history.reduce(
          (sum: number, item: any) =>
            sum + Number(item.score || 0),
          0
        ) / history.length;

    }





    setStats({

      // Total analyzed prompts
      prompts: history.length,


      // Average AI score
      average: Math.round(average),


      // Total AI requests
      requests: history.length,


      // Success percentage
      success:
        history.length > 0
          ? 100
          : 0,

    });



  }, []);






  return (

    <main className="min-h-screen bg-[#0B1020] px-6 py-10 text-white md:px-10">


      <AnalyticsHeader />




      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">


        <AnalyticsCard
          title="Prompts Created"
          value={String(stats.prompts)}
        />



        <AnalyticsCard
          title="Average Score"
          value={`${stats.average}%`}
        />



        <AnalyticsCard
          title="AI Requests"
          value={String(stats.requests)}
        />



        <AnalyticsCard
          title="Success Rate"
          value={`${stats.success}%`}
        />



      </div>





      <div className="mt-10 grid gap-8 xl:grid-cols-2">


        <ChartPlaceholder />


        <ActivityTable />


      </div>



    </main>

  );

}