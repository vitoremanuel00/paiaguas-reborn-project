
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-pattern">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-paiaguas mb-4">
              Preservando o Pantanal para as futuras gerações
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              O Instituto Paiaguás trabalha pela conservação e valorização do maior ecossistema alagável do mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-paiaguas hover:bg-paiaguas-dark">
                <Link to="/projetos">
                  Conheça nossos projetos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/quem-somos">Saiba mais sobre nós</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Pantanal brasileiro" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-white text-sm font-medium bg-paiaguas px-3 py-1 rounded-full">
                    Pantanal Mato-grossense
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
