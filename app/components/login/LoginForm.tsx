"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import GoogleButton from "./GoogleButton";


export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  function handleLogin() {

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
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#151C34] p-8">


      <h2 className="text-3xl font-bold text-white">
        Welcome Back
      </h2>


      <p className="mt-2 text-gray-400">
        Sign in to continue.
      </p>




      <div className="mt-8 space-y-5">


        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full rounded-xl border border-white/10 bg-[#0B1020] p-4 text-white outline-none"
        />



        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-xl border border-white/10 bg-[#0B1020] p-4 text-white outline-none"
        />


      </div>




      <button
        onClick={handleLogin}
        className="mt-6 w-full rounded-xl bg-[#7C5CFF] py-4 font-semibold text-white transition hover:scale-[1.02]"
      >
        Sign In
      </button>




      <div className="my-6 border-t border-white/10"></div>



      <GoogleButton />




      <p className="mt-6 text-center text-sm text-gray-400">

        Don't have an account?

        <Link
          href="/signup"
          className="ml-2 text-[#4DEAFF] hover:underline"
        >
          Create one
        </Link>

      </p>



    </div>
  );
}