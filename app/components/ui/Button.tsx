type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-violet-500"
    >
      {text}
    </button>
  );
}