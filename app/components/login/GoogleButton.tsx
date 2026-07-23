"use client";

export default function GoogleButton() {
  function googleLogin() {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Demo User",
        email: "demo@gmail.com",
      })
    );

    window.location.href = "/dashboard";
  }

  return (
    <button
      onClick={googleLogin}
      className="w-full rounded-xl border border-white/10 bg-[#0B1020] py-3 text-white transition hover:border-[#7C5CFF]"
    >
      Continue with Google
    </button>
  );
}