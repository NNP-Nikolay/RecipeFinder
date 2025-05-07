import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import SearchInputDropdown from "@/components/inputs/SearchInputDropdown";

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow px-5">
        <SearchInputDropdown />
      </div>
      <Footer />
    </div>
  );
}
