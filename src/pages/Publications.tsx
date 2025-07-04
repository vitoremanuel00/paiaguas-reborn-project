
// import { useState } from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';
// import { Link } from 'react-router-dom';
// import { Search, Book, FileText } from 'lucide-react';

// const Publications = () => {
//   const [searchTerm, setSearchTerm] = useState('');
  
//   const publications = [
//     {
//       id: 1,
//       title: 'Estado de conservação das populações de onça-pintada no Pantanal Norte',
//       type: 'article',
//       authors: 'Santos, J.; Mendes, C.; Silva, A.',
//       date: '2023',
//       journal: 'Revista Brasileira de Zoologia',
//       tags: ['conservação', 'onça-pintada', 'monitoramento'],
//       abstract: 'Este estudo avalia o estado de conservação das populações de onça-pintada (Panthera onca) no norte do Pantanal brasileiro, com base em dados coletados entre 2018 e 2022.'
//     },
//     {
//       id: 2,
//       title: 'Impactos dos incêndios florestais de 2020 na vegetação do Pantanal',
//       type: 'article',
//       authors: 'Oliveira, F.; Costa, R.; Almeida, P.',
//       date: '2022',
//       journal: 'Biodiversidade Brasileira',
//       tags: ['incêndios', 'vegetação', 'recuperação'],
//       abstract: 'Análise dos impactos dos grandes incêndios de 2020 na vegetação do Pantanal e avaliação da capacidade de regeneração dos diferentes ecossistemas afetados.'
//     },
//     {
//       id: 3,
//       title: 'Manual de boas práticas para o turismo sustentável no Pantanal',
//       type: 'book',
//       authors: 'Instituto Paiaguás',
//       date: '2021',
//       publisher: 'Editora Paiaguás',
//       tags: ['turismo', 'sustentabilidade', 'guia'],
//       abstract: 'Um guia completo para operadoras de turismo, guias e visitantes sobre práticas que minimizam o impacto ambiental e maximizam os benefícios sociais do turismo no Pantanal.'
//     },
//     {
//       id: 4,
//       title: 'Variações nos ciclos hidrológicos do Pantanal e suas implicações para a biodiversidade',
//       type: 'article',
//       authors: 'Gonçalves, R.; Lima, M.; Santos, J.',
//       date: '2022',
//       journal: 'Hydrological Sciences Journal',
//       tags: ['hidrologia', 'ciclos', 'biodiversidade'],
//       abstract: 'Estudo das alterações nos ciclos de inundação do Pantanal nas últimas duas décadas e análise de como essas mudanças afetam diferentes grupos de fauna e flora.'
//     },
//     {
//       id: 5,
//       title: 'Pantanal: Um Patrimônio Natural a ser Preservado',
//       type: 'book',
//       authors: 'Mendes, C.; Silveira, A.',
//       date: '2020',
//       publisher: 'Editora UFMT',
//       tags: ['conservação', 'ecossistema', 'biodiversidade'],
//       abstract: 'Uma obra abrangente sobre a importância ecológica, social e econômica do Pantanal, com foco nos desafios para sua conservação em um contexto de mudanças globais.'
//     },
//     {
//       id: 6,
//       title: 'Conhecimentos tradicionais das comunidades ribeirinhas do Pantanal sobre plantas medicinais',
//       type: 'article',
//       authors: 'Costa, M.; Fernandes, L.; Santos, A.',
//       date: '2021',
//       journal: 'Etnobiologia Brasileira',
//       tags: ['conhecimento tradicional', 'plantas medicinais', 'comunidades'],
//       abstract: 'Levantamento etnobotânico do uso de plantas medicinais por comunidades ribeirinhas do Pantanal, destacando a importância desse conhecimento para a conservação e o desenvolvimento de novos medicamentos.'
//     },
//   ];

//   const filteredPublications = publications.filter(pub => 
//     pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     pub.authors.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section className="bg-paiaguas py-20">
//           <div className="container mx-auto px-4 text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Publicações</h1>
//             <p className="text-xl text-white/90 max-w-3xl mx-auto">
//               Conheça nossos estudos, artigos científicos e materiais educativos sobre o Pantanal
//             </p>
//           </div>
//         </section>

//         {/* Search Section */}
//         <section className="py-10 bg-white border-b">
//           <div className="container mx-auto px-4">
//             <div className="max-w-3xl mx-auto">
//               <div className="relative">
//                 <Search className="absolute left-3 top-3 text-gray-400" size={20} />
//                 <Input
//                   type="text"
//                   placeholder="Buscar publicações por título, autor ou tema..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Publications Section */}
//         <section className="py-16 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//               {filteredPublications.length > 0 ? (
//                 filteredPublications.map((publication) => (
//                   <PublicationCard key={publication.id} publication={publication} />
//                 ))
//               ) : (
//                 <div className="col-span-1 md:col-span-2 text-center py-12">
//                   <p className="text-gray-500 text-lg">Nenhuma publicação encontrada para "{searchTerm}"</p>
//                   <Button 
//                     variant="outline" 
//                     onClick={() => setSearchTerm('')}
//                     className="mt-4"
//                   >
//                     Limpar busca
//                   </Button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-3xl mx-auto text-center">
//               <h2 className="text-3xl font-bold text-paiaguas mb-4">Colabore com Nossa Pesquisa</h2>
//               <p className="text-lg text-gray-700 mb-8">
//                 O Instituto Paiaguás está sempre aberto a colaborações com pesquisadores, estudantes e instituições
//                 que compartilham nosso interesse pelo Pantanal.
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center gap-4">
//                 <Button asChild className="bg-paiaguas hover:bg-paiaguas-dark">
//                   <Link to="/contato">
//                     Entre em contato
//                   </Link>
//                 </Button>
//                 <Button asChild variant="outline">
//                   <a href="#" target="_blank" rel="noopener noreferrer">
//                     Guia para pesquisadores
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// const PublicationCard = ({ publication }: { publication: any }) => {
//   return (
//     <Card className="hover:shadow-md transition-shadow">
//       <CardContent className="p-6">
//         <div className="flex items-start gap-4">
//           <div className="mt-1 flex-shrink-0">
//             {publication.type === 'article' ? (
//               <FileText className="text-paiaguas h-6 w-6" />
//             ) : (
//               <Book className="text-paiaguas h-6 w-6" />
//             )}
//           </div>
//           <div>
//             <Link to={`/publicacoes/${publication.id}`} className="hover:text-paiaguas transition-colors">
//               <h3 className="text-xl font-bold text-gray-800 mb-2">{publication.title}</h3>
//             </Link>
//             <p className="text-gray-700 mb-2">{publication.authors}</p>
//             <p className="text-gray-600 text-sm mb-3">
//               {publication.type === 'article' 
//                 ? `${publication.journal}, ${publication.date}` 
//                 : `${publication.publisher}, ${publication.date}`}
//             </p>
//             <p className="text-gray-600 mb-4 line-clamp-3">{publication.abstract}</p>
//             <div className="flex flex-wrap gap-2">
//               {publication.tags.map((tag: string, index: number) => (
//                 <Badge key={index} variant="outline" className="bg-gray-100">
//                   {tag}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Publications;
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const tabs = [
  { id: 'editais', label: 'Editais' },
  { id: 'processos', label: 'Processos Seletivos' },
  { id: 'transparencia', label: 'Portal da Transparência' },
];

const Publications = () => {
  const [activeTab, setActiveTab] = useState('editais');

  const renderContent = () => {
  switch (activeTab) {
    case 'editais':
      return (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-paiaguas">Edital 01/2024 – Apoio a Projetos de Educação Ambiental</h3>
            <p className="text-sm text-gray-700">
              Seleção de propostas para execução de ações educativas em comunidades rurais e indígenas no Norte de MT.
              <br />
              <span className="italic text-gray-500">Publicado em: 12/04/2024</span>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-paiaguas">Edital 02/2024 – Parcerias com Prefeituras Municipais</h3>
            <p className="text-sm text-gray-700">
              Chamada para convênios entre o Instituto Paiaguás e prefeituras interessadas em executar ações integradas de assistência social.
              <br />
              <span className="italic text-gray-500">Publicado em: 20/05/2024</span>
            </p>
          </div>
        </div>
      );
    case 'processos':
      return (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-paiaguas">Processo Seletivo 01/2024 – Educador(a) Ambiental</h3>
            <p className="text-sm text-gray-700">
              Contratação de profissional para atividades pedagógicas e oficinas em projetos na região do Alto Teles Pires.
              <br />
              <span className="italic text-gray-500">Inscrições: 10 a 25 de março de 2024</span>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-paiaguas">Processo Seletivo 02/2024 – Assistente de Projetos</h3>
            <p className="text-sm text-gray-700">
              Vaga para apoio administrativo-financeiro na execução dos projetos desenvolvidos em Cláudia e Carlinda.
              <br />
              <span className="italic text-gray-500">Inscrições: 01 a 15 de junho de 2024</span>
            </p>
          </div>
        </div>
      );
    case 'transparencia':
      return (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-paiaguas">Prestação de Contas – Projeto Carlinda Saudável (2023)</h3>
            <p className="text-sm text-gray-700">
              Relatório completo de execução física e financeira do projeto de saúde comunitária realizado em Carlinda-MT.
              <br />
              <span className="italic text-gray-500">Publicado em: 05/01/2024</span>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-paiaguas">Balanço Anual – Recursos Recebidos e Aplicações (2023)</h3>
            <p className="text-sm text-gray-700">
              Documento com receitas, despesas, origem dos recursos e investimentos por área de atuação do Instituto.
              <br />
              <span className="italic text-gray-500">Publicado em: 15/02/2024</span>
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

  return (
    <>
      <Navbar />
      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-paiaguas mb-6 text-center">Publicações</h1>

          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                  activeTab === tab.id
                    ? 'bg-paiaguas text-white border-paiaguas'
                    : 'bg-white text-paiaguas border-paiaguas hover:bg-paiaguas hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm text-gray-700">
            {renderContent()}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Publications;
