"use client";

import { useState } from "react";
import Link from "next/link";


export default function Topbar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {


  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);



  return (

    <header className="relative flex items-center justify-between bg-[#0B1020] px-6 py-5">


      <div>

        <h2 className="text-2xl font-bold text-white">
          Welcome back 👋
        </h2>


        <p className="mt-1 text-sm text-gray-400">
          Create, improve and manage your AI prompts.
        </p>

      </div>





      <div className="flex items-center gap-4">



        {/* AI Status */}

        <div className="hidden items-center gap-2 rounded-full bg-[#151C34] px-4 py-2 text-sm text-gray-300 md:flex">

          <span className="h-2 w-2 rounded-full bg-[#4DEAFF]" />

          AI Online

        </div>





        {/* Search */}

        <input

          value={search}

          onChange={(e) => setSearch(e.target.value)}

          placeholder="Search prompts..."

          className="hidden w-64 rounded-xl bg-[#151C34] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-[#7C5CFF] md:block"

        />







        {/* Notification */}

        <div className="relative">


          <button

            onClick={() => setShowNotifications(!showNotifications)}

            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#151C34] text-gray-300 transition hover:text-white"

          >

            🔔

          </button>





          {showNotifications && (

            <div className="absolute right-0 mt-3 w-72 rounded-2xl bg-[#151C34] p-4 shadow-xl">


              <h3 className="font-semibold text-white">
                Notifications
              </h3>


              <p className="mt-3 text-sm text-gray-400">
                No new notifications.
              </p>


            </div>

          )}


        </div>







        {/* Profile */}

        <div className="relative">


          <button

            onClick={() => setShowProfile(!showProfile)}

            className="flex items-center gap-3 rounded-xl bg-[#151C34] px-3 py-2"

          >


            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#4DEAFF] font-bold text-white">

              U

            </div>



            <div className="hidden text-left sm:block">


              <p className="text-sm font-medium text-white">
                User
              </p>


              <p className="text-xs text-gray-400">
                Free Plan
              </p>


            </div>


          </button>







          {showProfile && (

            <div className="absolute right-0 mt-3 w-48 rounded-2xl bg-[#151C34] p-4 shadow-xl">


              <Link
                href="/profile"
                className="block text-sm text-white hover:text-[#4DEAFF]"
              >
                Profile
              </Link>



              <Link
                href="/settings"
                className="mt-3 block text-sm text-gray-400 hover:text-white"
              >
                Settings
              </Link>



              <Link
                href="/pricing"
                className="mt-3 block text-sm text-gray-400 hover:text-white"
              >
                Upgrade Plan
              </Link>



            </div>

          )}


        </div>



      </div>



    </header>

  );
}