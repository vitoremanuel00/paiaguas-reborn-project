
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Conservação do Tuiuiú',
      description: 'Projeto de monitoramento e preservação do habitat do Tuiuiú, ave símbolo do Pantanal.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      category: 'Conservação'
    },
    {
      id: 2,
      title: 'Águas do Pantanal',
      description: 'Iniciativa de preservação dos recursos hídricos e monitoramento da qualidade da água.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      category: 'Recursos Hídricos'
    },
    {
      id: 3,
      title: 'Educação Ambiental nas Escolas',
      description: 'Programa educativo levando conhecimento sobre o Pantanal às escolas da região.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      category: 'Educação'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-paiaguas mb-2">Nossos Projetos</h2>
            <p className="text-lg text-gray-700">Conheça algumas de nossas principais iniciativas em andamento.</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-paiaguas text-paiaguas hover:bg-paiaguas hover:text-white">
            <Link to="/projetos">
              Ver todos os projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute top-0 right-0 bg-paiaguas text-white text-sm font-medium py-1 px-3">
                  {project.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button asChild variant="link" className="p-0 text-paiaguas hover:text-paiaguas-dark">
                  <Link to={`/projetos/${project.id}`}>
                    Saiba mais
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
