export default function AppearanceCard() {

  return (
    <div className="rounded-3xl bg-[#151C34] p-6">


      <h2 className="mb-6 text-xl font-semibold text-white">
        Appearance
      </h2>



      <div className="flex items-center justify-between rounded-xl bg-[#0B1020] p-4">


        <div>

          <p className="text-white">
            Dark Mode
          </p>


          <p className="mt-1 text-sm text-gray-400">
            Your interface theme
          </p>

        </div>



        <div className="rounded-lg bg-[#7C5CFF]/20 px-4 py-2 text-sm font-medium text-[#C4B5FD]">
          Enabled
        </div>


      </div>


    </div>
  );
}