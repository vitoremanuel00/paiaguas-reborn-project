
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projectCategories = [
    { id: 'all', name: 'Todos' },
    { id: 'conservation', name: 'Conservação' },
    { id: 'education', name: 'Educação Ambiental' },
    { id: 'research', name: 'Pesquisa' },
    { id: 'development', name: 'Desenvolvimento' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Monitoramento de Onças-pintadas',
      category: 'conservation',
      description: 'Programa de monitoramento de populações de onças-pintadas no Pantanal através de armadilhas fotográficas e colares GPS.',
      image: 'https://images.unsplash.com/photo-1501780392773-287d506245a5',
    },
    {
      id: 2,
      title: 'Recuperação de Áreas Degradadas',
      category: 'conservation',
      description: 'Projeto de reflorestamento e recuperação de áreas degradadas pela ação humana e incêndios florestais.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
    },
    {
      id: 3,
      title: 'Escola do Pantanal',
      category: 'education',
      description: 'Programa educativo que leva conhecimento sobre ecologia e conservação do Pantanal para escolas rurais e urbanas.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
    },
    {
      id: 4,
      title: 'Capacitação de Professores',
      category: 'education',
      description: 'Treinamento para educadores sobre temas ambientais com foco na aplicação em sala de aula.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
    },
    {
      id: 5,
      title: 'Censo de Aves Aquáticas',
      category: 'research',
      description: 'Levantamento sistemático das espécies de aves aquáticas presentes no Pantanal e monitoramento populacional.',
      image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890',
    },
    {
      id: 6,
      title: 'Impactos das Mudanças Climáticas',
      category: 'research',
      description: 'Estudo dos efeitos das alterações climáticas nos ciclos de inundação do Pantanal e suas consequências para o ecossistema.',
      image: 'https://images.unsplash.com/photo-1561470508-fd4df1090e23',
    },
    {
      id: 7,
      title: 'Turismo Sustentável',
      category: 'development',
      description: 'Desenvolvimento de modelos de turismo ecológico que beneficiem as comunidades locais e minimizem impactos ambientais.',
      image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0',
    },
    {
      id: 8,
      title: 'Produtos da Sociobiodiversidade',
      category: 'development',
      description: 'Apoio à produção e comercialização de produtos tradicionais do Pantanal, valorizando o conhecimento local.',
      image: 'https://images.unsplash.com/photo-1595351298020-038700609878',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-paiaguas py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossos Projetos</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Conheça as iniciativas que estamos desenvolvendo para a conservação e o desenvolvimento sustentável do Pantanal
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                {projectCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-sm md:text-base"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {/* All Projects Tab */}
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
              
              {/* Filter by category */}
              {projectCategories.slice(1).map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects
                      .filter((project) => project.category === category.id)
                      .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-paiaguas mb-4">Interesse em Apoiar Nossos Projetos?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Estamos sempre abertos a novas parcerias e colaborações. Se você ou sua organização deseja apoiar 
                nosso trabalho, entre em contato conosco.
              </p>
              <Button asChild size="lg" className="bg-paiaguas hover:bg-paiaguas-dark">
                <Link to="/contato">
                  Entre em Contato
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Button asChild variant="outline" className="mt-2">
          <Link to={`/projetos/${project.id}`}>
            Ver detalhes
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Projects;
