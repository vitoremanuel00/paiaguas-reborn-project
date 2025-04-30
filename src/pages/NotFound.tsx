
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-paiaguas mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">
            Página em desenvolvimento
          </p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Esta página está sendo construída e estará disponível em breve. Por favor, retorne à página inicial.
          </p>
          <Button asChild className="bg-paiaguas hover:bg-paiaguas-dark">
            <Link to="/">Voltar para o início</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
