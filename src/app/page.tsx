import Footer from "@/components/footer/Footer";
import RecipesForm from "@/components/form/RecipesForm";
import Header from "@/components/header/Header";

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/bg-recipes.jpg')] bg-cover bg-center">
      <Header />
      <main className="flex-grow flex justify-center px-5">
        <div className="bg-black/60 backdrop-blur-sm p-10 w-5xl rounded-2xl">
          <RecipesForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
