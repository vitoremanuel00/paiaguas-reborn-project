
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Instituto Paiaguás lança programa de voluntariado ambiental',
      summary: 'Nova iniciativa permite que interessados participem diretamente das ações de conservação no Pantanal.',
      date: '2025-04-15',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
    },
    {
      id: 2,
      title: 'Pesquisa revela aumento na população de ariranhas no Pantanal',
      summary: 'Estudo conduzido pelo Instituto Paiaguás mostra resultados positivos para a conservação da espécie.',
      date: '2025-03-22',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    },
    {
      id: 3,
      title: 'Workshop sobre manejo sustentável reúne produtores rurais',
      summary: 'Evento promovido pelo instituto discutiu práticas de produção compatíveis com a preservação ambiental.',
      date: '2025-02-18',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-paiaguas mb-2">Notícias e Publicações</h2>
            <p className="text-lg text-gray-700">Acompanhe as novidades e descobertas do Instituto Paiaguás.</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-paiaguas text-paiaguas hover:bg-paiaguas hover:text-white">
            <Link to="/publicacoes">
              Ver todas as publicações
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map(item => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{new Date(item.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.summary}</p>
                <Button asChild variant="link" className="p-0 text-paiaguas hover:text-paiaguas-dark">
                  <Link to={`/publicacoes/${item.id}`}>
                    Leia mais
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

export default NewsSection;
