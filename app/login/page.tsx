import LoginHero from "../components/login/LoginHero";
import LoginForm from "../components/login/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen bg-[#0B1020]">

      <LoginHero />

      <div className="flex flex-1 items-center justify-center p-6">

        <LoginForm />

      </div>

    </main>
  );
}