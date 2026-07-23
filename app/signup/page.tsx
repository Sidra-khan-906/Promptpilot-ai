"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSignup() {

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }


    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
        loggedIn: true,
      })
    );


    router.push("/dashboard");

  }



  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B1020] px-6 text-white">


      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#151C34] p-8">


        <h1 className="text-3xl font-bold">
          Create Account
        </h1>


        <p className="mt-2 text-gray-400">
          Start building smarter AI prompts.
        </p>



        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="mt-8 w-full rounded-xl border border-white/10 bg-[#0B1020] p-4 text-white outline-none"
        />



        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="mt-4 w-full rounded-xl border border-white/10 bg-[#0B1020] p-4 text-white outline-none"
        />



        <button
          onClick={handleSignup}
          className="mt-6 w-full rounded-xl bg-[#7C5CFF] py-4 font-semibold text-white hover:scale-[1.02]"
        >
          Create Account
        </button>


      </div>


    </main>
  );
}