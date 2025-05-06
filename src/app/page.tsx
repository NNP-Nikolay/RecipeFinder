import SearchInputDropdown from "@/components/inputs/SearchInputDropdown";

export default function SearchPage() {
  return (
    <div className="p-10 relative min-h-screen w-full bg-cover bg-center bg-[url('/background.jpeg')]">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
      <div className="relative z-10">
        <SearchInputDropdown />
      </div>
    </div>
  );
}
