export default function SettingsHeader() {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div>

        <p className="text-sm text-[#4DEAFF]">
          Account Preferences
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-3 max-w-xl text-gray-400">
          Manage your account, AI preferences and application settings.
        </p>

      </div>

    </div>
  );
}