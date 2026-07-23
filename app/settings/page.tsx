import SettingsHeader from "../components/settings/SettingsHeader";
import ProfileCard from "../components/settings/ProfileCard";
import AppearanceCard from "../components/settings/AppearanceCard";
import AIPreferencesCard from "../components/settings/AIPreferencesCard";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#0B1020] px-6 py-10 text-white md:px-10">

      <SettingsHeader />

      <div className="grid gap-6 lg:grid-cols-2">

        <ProfileCard />

        <AppearanceCard />

        <AIPreferencesCard />

      </div>

    </main>
  );
}