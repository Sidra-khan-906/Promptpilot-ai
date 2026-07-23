"use client";

import { useEffect, useState } from "react";


type Activity = {
  title: string;
  score: number;
  date: string;
};


export default function ActivityTable() {


  const [history, setHistory] = useState<Activity[]>([]);



  useEffect(() => {


    const data = JSON.parse(
      localStorage.getItem("promptHistory") || "[]"
    );


    setHistory(data.reverse());


  }, []);





  return (

    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-6">


      <h2 className="mb-6 text-xl font-semibold text-white">
        Recent Activity
      </h2>




      <div className="space-y-4">



        {history.length === 0 ? (


          <p className="text-gray-400">
            No activity yet.
          </p>



        ) : (



          history.slice(0, 5).map((item, index) => (


            <div
              key={index}
              className="flex items-center justify-between rounded-xl bg-[#0B1020] p-4"
            >



              <div>


                <p className="font-medium text-white">
                  {item.title || "Prompt Analysis"}
                </p>



                <p className="text-sm text-gray-500">
                  {new Date(item.date).toLocaleString()}
                </p>



              </div>




              <span className="rounded-full bg-[#4DEAFF]/10 px-3 py-1 text-sm text-[#4DEAFF]">
                {item.score}%
              </span>



            </div>



          ))



        )}



      </div>



    </div>

  );
}