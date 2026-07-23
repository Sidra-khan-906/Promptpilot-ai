"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function ProfilePage() {


  const [user, setUser] = useState({
    name: "User",
    email: "user@example.com",
  });



  useEffect(() => {

    const savedUser = JSON.parse(
      localStorage.getItem("user") || "{}"
    );


    if (savedUser.email) {

      setUser({
        name: savedUser.name || "User",
        email: savedUser.email,
      });

    }

  }, []);




  function logout() {

    localStorage.removeItem("user");

    window.location.href = "/login";

  }





  return (
    <main className="min-h-screen bg-[#0B1020] px-6 py-10 text-white">


      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[#151C34] p-8">


        <Link
          href="/dashboard"
          className="text-sm text-[#4DEAFF]"
        >
          ← Back to Dashboard
        </Link>




        <div className="mt-8 flex items-center gap-5">


          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#4DEAFF] text-3xl font-bold">

            U

          </div>




          <div>

            <h1 className="text-3xl font-bold">
              {user.name}
            </h1>


            <p className="mt-1 text-gray-400">
              {user.email}
            </p>

          </div>


        </div>





        <div className="mt-8 rounded-2xl border border-white/10 bg-[#0B1020] p-5">


          <p className="text-sm text-gray-400">
            Current Plan
          </p>


          <h2 className="mt-2 text-2xl font-semibold text-[#4DEAFF]">
            Free Plan
          </h2>


          <p className="mt-2 text-sm text-gray-400">
            Basic AI prompt tools access.
          </p>


        </div>





        <div className="mt-6 flex gap-4">


          <Link
            href="/settings"
            className="rounded-xl bg-[#7C5CFF] px-6 py-3 text-sm font-medium"
          >
            Settings
          </Link>



          <button
            onClick={logout}
            className="rounded-xl border border-white/10 px-6 py-3 text-sm text-gray-300 hover:border-[#FF5DB1]"
          >
            Logout
          </button>



        </div>



      </div>


    </main>
  );
}