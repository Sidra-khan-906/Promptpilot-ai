"use client";

import { useEffect, useState } from "react";


export default function AIPreferencesCard() {


  const [model, setModel] = useState("Gemini 3.5 Flash");
  const [style, setStyle] = useState("Detailed Responses");



  useEffect(() => {


    const savedModel =
      localStorage.getItem("aiModel");


    const savedStyle =
      localStorage.getItem("responseStyle");



    if (savedModel) {
      setModel(savedModel);
    }



    if (savedStyle) {
      setStyle(savedStyle);
    }



  }, []);






  function changeModel(value: string) {

    setModel(value);

    localStorage.setItem(
      "aiModel",
      value
    );

  }






  function changeStyle(value: string) {

    setStyle(value);

    localStorage.setItem(
      "responseStyle",
      value
    );

  }







  return (
    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-6">


      <h2 className="mb-6 text-xl font-semibold text-white">
        AI Preferences
      </h2>




      <div className="space-y-5">



        <div>

          <p className="mb-2 text-sm text-gray-400">
            AI Model
          </p>


          <select
            value={model}
            onChange={(e) =>
              changeModel(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-[#0B1020] p-3 text-white outline-none"
          >

            <option>
              Gemini 3.5 Flash
            </option>

            <option>
              Gemini Pro
            </option>


          </select>


        </div>






        <div>

          <p className="mb-2 text-sm text-gray-400">
            Response Style
          </p>


          <select
            value={style}
            onChange={(e) =>
              changeStyle(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-[#0B1020] p-3 text-white outline-none"
          >


            <option>
              Detailed Responses
            </option>


            <option>
              Balanced
            </option>


            <option>
              Short
            </option>


          </select>


        </div>



      </div>



    </div>
  );
}