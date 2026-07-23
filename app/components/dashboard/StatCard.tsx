import Link from "next/link";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: string;
  link?: string;
}

export default function StatCard({
  title,
  value,
  description,
  icon,
  link = "#",
}: StatCardProps) {

  return (

    <Link href={link}>

      <div className="cursor-pointer rounded-2xl bg-[#151C34] p-6 transition hover:-translate-y-1 hover:bg-[#1B2442]">


        <div className="flex items-center justify-between">


          <div>

            <p className="text-sm text-gray-400">
              {title}
            </p>


            <h3 className="mt-3 text-3xl font-bold text-white">
              {value}
            </h3>


          </div>



          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7C5CFF]/20 text-2xl">

            {icon}

          </div>


        </div>



        <p className="mt-4 text-sm text-gray-400">
          {description}
        </p>


      </div>


    </Link>

  );
}