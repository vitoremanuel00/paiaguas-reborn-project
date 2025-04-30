
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Book, Leaf } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-paiaguas" />,
      title: 'Conservação',
      description: 'Trabalhamos pela proteção e preservação dos recursos naturais do Pantanal.'
    },
    {
      icon: <Users className="h-10 w-10 text-paiaguas" />,
      title: 'Comunidades',
      description: 'Promovemos o desenvolvimento das comunidades tradicionais pantaneiras.'
    },
    {
      icon: <Book className="h-10 w-10 text-paiaguas" />,
      title: 'Educação',
      description: 'Desenvolvemos programas educacionais sobre ecologia e sustentabilidade.'
    },
    {
      icon: <Leaf className="h-10 w-10 text-paiaguas" />,
      title: 'Sustentabilidade',
      description: 'Incentivamos práticas que harmonizam desenvolvimento e preservação.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-paiaguas mb-4">O Instituto Paiaguás</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Somos uma organização sem fins lucrativos dedicada à conservação e ao desenvolvimento sustentável do bioma Pantanal, trabalhando em parceria com comunidades locais e instituições de pesquisa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => (
            <Card key={index} className="border-t-4 border-t-paiaguas hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mb-4 inline-block p-3 bg-paiaguas-50 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
