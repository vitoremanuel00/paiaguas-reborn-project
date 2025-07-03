import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1597764692502-82f6d7293b4d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Atuação social no interior de MT',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=1600&q=80',
    alt: 'Educação e desenvolvimento humano',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1616596871866-fb49ad4d085b?auto=format&fit=crop&w=1600&q=80',
    alt: 'Ações comunitárias em saúde',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Carrossel de imagens */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Overlay escuro e conteúdo */}
      <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Instituto Paiaguás
        </h1>
        <p className="text-white text-lg md:text-xl mb-6 max-w-2xl drop-shadow-md">
          Desenvolvimento humano e ambiental em prol da cidadania no Mato Grosso.
        </p>
        <div className="flex space-x-4">
          <Link to="/projetos">
            <Button className="bg-white text-paiaguas hover:bg-paiaguas hover:text-white transition">
              Conheça nossos projetos
            </Button>
          </Link>
          <Link to="/quem-somos">
            <Button className="bg-white/20 text-white border border-white hover:bg-white/30">
              Saiba mais sobre nós
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
