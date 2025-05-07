'use client';

interface NavButtonProps {
  type: "submit" | "reset" | "button";
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function NavButton({ type = "button", text, onClick, disabled = true }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="
        h-12 w-70 justify-center inline-flex items-center py-2.5 px-4
        text-sm font-bold text-white text-center
        border border-gray-600 rounded-lg
        hover:bg-black/80 bg-black/60
        transition-colors duration-200 dark:hover:border-blue-500
        cursor-pointer
      "
    >
      {text}
    </button>
  );
}
