"use client";

import { useEffect, useState } from "react";


export default function ProfileCard() {


  const [name, setName] = useState("User");
  const [email, setEmail] = useState("user@email.com");



  useEffect(() => {


    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );



    if (user.name) {
      setName(user.name);
    }



    if (user.email) {
      setEmail(user.email);
    }



  }, []);





  function logout() {


    localStorage.removeItem("user");

    window.location.href = "/login";


  }





  return (
    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-6">


      <h2 className="mb-6 text-xl font-semibold">
        Profile
      </h2>




      <div className="space-y-4">


        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#0B1020] p-3 text-white outline-none"
        />



        <input
          value={email}
          readOnly
          className="w-full rounded-xl border border-white/10 bg-[#0B1020] p-3 text-white outline-none"
        />



      </div>





      <button
        onClick={() => {
          localStorage.setItem(
            "user",
            JSON.stringify({
              name,
              email,
            })
          );

          alert("Profile updated ✅");
        }}
        className="mt-5 rounded-xl bg-[#7C5CFF] px-5 py-3 text-sm text-white"
      >
        Save Profile
      </button>





      <button
        onClick={logout}
        className="ml-3 mt-5 rounded-xl border border-white/10 bg-[#0B1020] px-5 py-3 text-sm text-gray-300 transition hover:text-white"
      >
        Logout
      </button>



    </div>
  );
}