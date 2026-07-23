"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mb-8">

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search prompts..."
        className="w-full rounded-2xl border border-white/10 bg-[#151C34] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#7C5CFF]"
      />

    </div>
  );
}