"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


type Prompt = {
  title: string;
  score: string;
  date: string;
};


export default function RecentPrompts({
  search = "",
}: {
  search?: string;
}) {


  const [prompts, setPrompts] = useState<Prompt[]>([]);



  useEffect(() => {


    const history = JSON.parse(
      localStorage.getItem("promptHistory") || "[]"
    );



    const formatted = history
      .slice(-10)
      .reverse()
      .map((item: any, index: number) => ({

        title:
          item.title ||
          `AI Prompt ${index + 1}`,

        score:
          `${item.score || 0}%`,

        date:
          new Date(item.date).toLocaleDateString(),

      }));


    setPrompts(formatted);



  }, []);




  const filteredPrompts = prompts.filter((prompt) =>
    prompt.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );





  return (
    <section className="mt-10">


      <div className="mb-5 flex items-center justify-between">


        <h2 className="text-xl font-semibold text-white">
          Recent Prompts
        </h2>



        <Link
          href="/library"
          className="text-sm text-[#4DEAFF]"
        >
          View All →
        </Link>



      </div>





      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#151C34]">


        {filteredPrompts.length === 0 ? (


          <p className="p-6 text-gray-400">
            No matching prompts found.
          </p>



        ) : (



          filteredPrompts.map((prompt) => (


            <div
              key={prompt.title}
              className="flex items-center justify-between border-b border-white/10 px-6 py-5 last:border-none"
            >


              <div>

                <h3 className="font-medium text-white">
                  {prompt.title}
                </h3>


                <p className="mt-1 text-sm text-gray-400">
                  {prompt.date}
                </p>

              </div>




              <div className="rounded-full bg-[#4DEAFF]/10 px-4 py-2 text-sm font-medium text-[#4DEAFF]">

                {prompt.score}

              </div>



            </div>



          ))


        )}



      </div>



    </section>
  );
}