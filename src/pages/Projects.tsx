// // import React, { useState } from 'react';
// // import Navbar from '@/components/Navbar';
// // import Footer from '@/components/Footer';

// // const projectCategories = [
// //   { id: 'all', name: 'Todos' },
// //   { id: 'saude', name: 'Saúde' },
// //   { id: 'educacao', name: 'Educação' },
// //   { id: 'assistencia', name: 'Assistência Social' },
// //   { id: 'meioambiente', name: 'Meio Ambiente' },
// //   { id: 'desenvolvimento', name: 'Desenvolvimento Humano' }
// // ];
// // const projects = [
// //   {
// //     id: 1,
// //     title: 'Carlinda Saudável',
// //     category: 'saude',
// //     description: 'Projeto de promoção da saúde com atendimentos médicos, exames e ações preventivas.',
// //     image: 'https://images.unsplash.com/photo-1579154204601-01588f351e8e?auto=format&fit=crop&w=600&q=80',


// //   },
// //   {
// //     id: 2,
// //     title: 'Construindo Nosso Futuro',
// //     category: 'educacao',
// //     description: 'Apoio à educação municipal com foco em estrutura, capacitação e inclusão.',
// //     image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',

// //   },
// //   {
// //     id: 3,
// //     title: 'Integração Sociofamiliar',
// //     category: 'assistencia',
// //     description: 'Assistência social e fortalecimento de vínculos em comunidades vulneráveis.',
// //     image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80',
// //   },
// //   {
// //     id: 4,
// //     title: 'Produzir e Conservar',
// //     category: 'meioambiente',
// //     description: 'Projeto ambiental que une agricultura familiar e preservação do meio ambiente.',
// //     image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
// //   },
// //   {
// //     id: 5,
// //     title: 'Transformar Vida',
// //     category: 'desenvolvimento',
// //     description: 'Capacitação e inclusão social para transformar vidas em diversos municípios.',
// //     image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
// //   },
// // ];


// // const Projects = () => {
// //   const [selectedCategory, setSelectedCategory] = useState('all');

// //   const filteredProjects = selectedCategory === 'all'
// //     ? projects
// //     : projects.filter(project => project.category === selectedCategory);

// //   return (
// //     <>
// //       <Navbar />
// //       <section className="py-16 bg-white min-h-screen">
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-3xl font-bold text-paiaguas mb-8 text-center">Nossos Projetos</h2>

// //           {/* Filtro */}
// //           <div className="flex justify-center mb-8 flex-wrap gap-4">
// //             {projectCategories.map(category => (
// //               <button
// //                 key={category.id}
// //                 onClick={() => setSelectedCategory(category.id)}
// //                 className={`px-4 py-2 rounded-full border ${
// //                   selectedCategory === category.id
// //                     ? 'bg-paiaguas text-white border-paiaguas'
// //                     : 'bg-white text-paiaguas border-paiaguas'
// //                 } hover:bg-paiaguas hover:text-white transition-colors`}
// //               >
// //                 {category.name}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Lista de Projetos */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {filteredProjects.map(project => (
// //               <div key={project.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
// //                 <img
// //                   src={project.image}
// //                   alt={project.title}
// //                   className="w-full h-48 object-cover"
// //                 />
// //                 <div className="p-4">
// //                   <h3 className="text-xl font-semibold text-paiaguas mb-2">{project.title}</h3>
// //                   <p className="text-gray-700 text-sm">{project.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Projects;

// import React, { useState } from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const projectCategories = [
//   { id: 'all', name: 'Todos' },
//   { id: 'saude', name: 'Saúde' },
//   { id: 'educacao', name: 'Educação' },
//   { id: 'assistencia', name: 'Assistência Social' },
//   { id: 'meioambiente', name: 'Meio Ambiente' },
//   { id: 'desenvolvimento', name: 'Desenvolvimento Humano' }
// ];

// const projects = [
//   {
//     id: 1,
//     title: 'Carlinda Saudável',
//     category: 'saude',
//     description: 'Projeto de promoção da saúde com atendimentos médicos, exames e ações preventivas.',
//     image: 'https://images.unsplash.com/photo-1588776814546-ec7aa270d2fd?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 2,
//     title: 'Construindo Nosso Futuro',
//     category: 'educacao',
//     description: 'Apoio à educação municipal com foco em estrutura, capacitação e inclusão.',
//     image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 3,
//     title: 'Integração Sociofamiliar',
//     category: 'assistencia',
//     description: 'Assistência social e fortalecimento de vínculos em comunidades vulneráveis.',
//     image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 4,
//     title: 'Produzir e Conservar',
//     category: 'meioambiente',
//     description: 'Projeto ambiental que une agricultura familiar e preservação do meio ambiente.',
//     image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 5,
//     title: 'Transformar Vida',
//     category: 'desenvolvimento',
//     description: 'Capacitação e inclusão social para transformar vidas em diversos municípios.',
//     image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
//   },
// ];

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const filteredProjects = selectedCategory === 'all'
//     ? projects
//     : projects.filter(project => project.category === selectedCategory);

//   return (
//     <>
//       <Navbar />
//       <section className="py-16 bg-white min-h-screen">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-paiaguas mb-8 text-center">Nossos Projetos</h2>

//           {/* Filtro */}
//           <div className="flex justify-center mb-8 flex-wrap gap-4">
//             {projectCategories.map(category => (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`px-4 py-2 rounded-full border ${
//                   selectedCategory === category.id
//                     ? 'bg-paiaguas text-white border-paiaguas'
//                     : 'bg-white text-paiaguas border-paiaguas'
//                 } hover:bg-paiaguas hover:text-white transition-colors`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>

//           {/* Lista de Projetos */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProjects.map(project => (
//               <div key={project.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold text-paiaguas mb-2">{project.title}</h3>
//                   <p className="text-gray-700 text-sm">{project.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Projects;
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const projectCategories = [
  { id: 'all', name: 'Todos' },
  { id: 'saude', name: 'Saúde' },
  { id: 'educacao', name: 'Educação' },
  { id: 'assistencia', name: 'Assistência Social' },
  { id: 'meioambiente', name: 'Meio Ambiente' },
  { id: 'desenvolvimento', name: 'Desenvolvimento Humano' }
];

const projects = [
  {
    id: 1,
    slug: 'carlinda-saudavel',
    title: 'Carlinda Saudável',
    category: 'saude',
    description: 'Projeto de promoção da saúde com atendimentos médicos, exames e ações preventivas.',
    image: 'https://images.unsplash.com/photo-1588776814546-ec7aa270d2fd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    slug: 'construindo-nosso-futuro',
    title: 'Construindo Nosso Futuro',
    category: 'educacao',
    description: 'Apoio à educação municipal com foco em estrutura, capacitação e inclusão.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    slug: 'integracao-sociofamiliar',
    title: 'Integração Sociofamiliar',
    category: 'assistencia',
    description: 'Assistência social e fortalecimento de vínculos em comunidades vulneráveis.',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    slug: 'produzir-e-conservar',
    title: 'Produzir e Conservar',
    category: 'meioambiente',
    description: 'Projeto ambiental que une agricultura familiar e preservação do meio ambiente.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    slug: 'transformar-vida',
    title: 'Transformar Vida',
    category: 'desenvolvimento',
    description: 'Capacitação e inclusão social para transformar vidas em diversos municípios.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Navbar />
      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-paiaguas mb-8 text-center">Nossos Projetos</h2>

          {/* Filtro por categoria */}
          <div className="flex justify-center mb-8 flex-wrap gap-4">
            {projectCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === category.id
                    ? 'bg-paiaguas text-white border-paiaguas'
                    : 'bg-white text-paiaguas border-paiaguas'
                } hover:bg-paiaguas hover:text-white transition-colors`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Lista de projetos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <Link
                key={project.id}
                to={`/projetos/${project.slug}`}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 block"
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;