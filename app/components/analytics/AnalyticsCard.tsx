type Props = {
  title: string;
  value: string;
};

export default function AnalyticsCard({ title, value }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#151C34] p-6">

      <p className="text-sm text-gray-400">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h2>

    </div>
  );
}