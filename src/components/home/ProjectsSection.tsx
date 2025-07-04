
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    slug: 'carlinda-saudavel',
    title: 'Carlinda Saudável',
    image: 'https://images.unsplash.com/photo-1588776814546-ec7aa270d2fd?auto=format&fit=crop&w=600&q=80',
    description: 'Atendimentos médicos, exames e ações preventivas no município de Carlinda.',
  },
  {
    id: 2,
    slug: 'construindo-nosso-futuro',
    title: 'Construindo Nosso Futuro',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
    description: 'Fortalecimento da educação pública e inclusão de jovens em Cláudia e região.',
  },
  {
    id: 3,
    slug: 'integracao-sociofamiliar',
    title: 'Integração Sociofamiliar',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80',
    description: 'Projeto de fortalecimento de vínculos e apoio social a famílias vulneráveis.',
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-paiaguas mb-8 text-center">Nossos Projetos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projetos/${project.slug}`}
              className="block bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-paiaguas mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/projetos">
            <button className="px-6 py-2 bg-paiaguas text-white rounded hover:bg-paiaguas-dark transition">
              Ver todos os projetos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;