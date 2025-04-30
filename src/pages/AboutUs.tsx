
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Users, Book, Leaf } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-paiaguas py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Quem Somos</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Conheça a história, missão e equipe do Instituto Paiaguás
            </p>
          </div>
        </section>

        {/* História Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-paiaguas mb-6">Nossa História</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  O Instituto Paiaguás foi fundado em 2010 por um grupo de pesquisadores e ambientalistas preocupados 
                  com a preservação do Pantanal. O nome Paiaguás é uma homenagem aos povos indígenas que habitavam a 
                  região pantaneira antes da colonização europeia.
                </p>
                <p className="mb-4">
                  Inicialmente focado apenas em pesquisas científicas, o instituto ampliou suas atividades 
                  ao longo dos anos, passando a atuar também na educação ambiental, desenvolvimento sustentável 
                  e apoio às comunidades tradicionais do Pantanal.
                </p>
                <p>
                  Hoje, somos reconhecidos como uma das principais organizações dedicadas à conservação do bioma 
                  Pantanal, com projetos que impactam positivamente tanto o meio ambiente quanto as pessoas que 
                  vivem na região.
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold text-paiaguas mb-6">Missão, Visão e Valores</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-paiaguas-dark mb-3">Missão</h3>
                  <p className="text-gray-700">
                    Promover a conservação do bioma Pantanal por meio da pesquisa científica, educação ambiental 
                    e desenvolvimento sustentável, valorizando as comunidades locais e seus saberes tradicionais.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-paiaguas-dark mb-3">Visão</h3>
                  <p className="text-gray-700">
                    Ser referência nacional e internacional em conservação e desenvolvimento sustentável do Pantanal, 
                    contribuindo para um futuro onde o bioma mantenha sua biodiversidade e as populações locais possam 
                    prosperar em harmonia com a natureza.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-paiaguas-dark mb-3">Valores</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Respeito à biodiversidade e aos ecossistemas</li>
                    <li>Valorização das comunidades tradicionais e seus saberes</li>
                    <li>Compromisso com o rigor científico e a ética na pesquisa</li>
                    <li>Transparência e responsabilidade social</li>
                    <li>Inovação e criatividade na busca por soluções sustentáveis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipe Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-paiaguas mb-8 text-center">Nossa Equipe</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'Dr. Carlos Mendes',
                  role: 'Diretor Executivo',
                  bio: 'Biólogo com mais de 20 anos de experiência em conservação ambiental. Liderou projetos de pesquisa em toda a América Latina.',
                  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
                },
                {
                  name: 'Dra. Juliana Santos',
                  role: 'Coordenadora Científica',
                  bio: 'Doutora em Ecologia com foco no ecossistema do Pantanal. Autora de dezenas de artigos científicos sobre biodiversidade.',
                  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
                },
                {
                  name: 'Prof. André Silveira',
                  role: 'Coordenador de Educação',
                  bio: 'Educador ambiental com experiência na criação de programas educativos para escolas e comunidades rurais.',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
                },
                {
                  name: 'Fernanda Oliveira',
                  role: 'Gestora de Projetos',
                  bio: 'Especialista em gestão de projetos socioambientais com foco em desenvolvimento sustentável de comunidades tradicionais.',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
                },
                {
                  name: 'Rafael Gonçalves',
                  role: 'Coordenador de Campo',
                  bio: 'Geógrafo com ampla experiência em trabalhos de campo no Pantanal. Especialista em mapeamento e geoprocessamento.',
                  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7'
                },
                {
                  name: 'Mariana Costa',
                  role: 'Analista de Comunicação',
                  bio: 'Jornalista especializada em comunicação ambiental, responsável pela divulgação científica e engajamento do público.',
                  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2'
                }
              ].map((person, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
                    <p className="text-paiaguas font-medium mb-3">{person.role}</p>
                    <p className="text-gray-600">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parceiros Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-paiaguas mb-8 text-center">Parceiros Institucionais</h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-700">
                Nosso trabalho só é possível graças às parcerias com instituições que compartilham 
                nosso compromisso com a conservação e o desenvolvimento sustentável.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {['WWF', 'SOS', 'UFMT', 'EMB', 'ICM', 'MT'].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-6 h-32 border rounded-lg hover:border-paiaguas transition-colors bg-white shadow-sm"
                >
                  <div className="text-center">
                    <div className="font-bold text-xl text-paiaguas mb-1">{logo}</div>
                    <div className="text-sm text-gray-600">Parceiro {index + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
