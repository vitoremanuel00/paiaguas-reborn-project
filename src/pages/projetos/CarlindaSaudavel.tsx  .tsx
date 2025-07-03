import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const images = [
  'https://images.unsplash.com/photo-1588776814546-ec7aa270d2fd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1622253692010-333f2f722264?auto=format&fit=crop&w=800&q=80',
];

const CarlindaSaudavel = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl font-bold text-paiaguas mb-6">Projeto Carlinda Saudável</h1>

          <p className="text-gray-700 mb-4">
            Projeto de promoção da saúde com foco em atendimentos médicos, exames, campanhas de prevenção, assistência em saúde mental e capacitação de profissionais no município de Carlinda-MT.
          </p>

          {/* Galeria de imagens */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {images.map((src, index) => (
              <div key={index} className="rounded overflow-hidden border">
                <img src={src} alt={`Imagem ${index + 1}`} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>

          {/* Conteúdo extraído das páginas 17 a 19 */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold text-paiaguas mb-2">Campanhas de Saúde</h2>
              <p>
                Através de ações contínuas em parceria com a Secretaria Municipal de Saúde, o projeto Carlinda Saudável desenvolveu campanhas de prevenção e promoção da saúde pública, alcançando a população com serviços essenciais.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-paiaguas mb-2">Atendimentos Realizados</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Enfermagem PSF:</strong> 1.947 atendimentos</li>
                <li><strong>Técnico de Enfermagem:</strong> 4.383 atendimentos</li>
                <li><strong>Técnico de Laboratório:</strong> 1.841 atendimentos</li>
                <li><strong>Exames realizados:</strong> 10.744</li>
                <li><strong>Plantões médicos:</strong> 7.408 atendimentos</li>
                <li><strong>Consultas com especialistas:</strong> 708</li>
                <li><strong>Outros exames:</strong> 60</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-paiaguas mb-2">Apoio Administrativo</h2>
              <p>Foram registrados atendimentos administrativos que beneficiaram diretamente <strong>11.883 pessoas</strong> durante o período do projeto.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-paiaguas mb-2">Secretarias Envolvidas</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Secretaria Municipal de Saúde</li>
                <li>Secretaria Municipal de Educação</li>
                <li>Secretaria Municipal de Assistência Social</li>
                <li>Secretaria Municipal de Obras e Serviços Urbanos</li>
              </ul>
            </div>

            <p className="text-sm italic text-gray-500 mt-6">
              * Os números acima são parciais, com base nas informações prestadas no relatório de execução do projeto.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CarlindaSaudavel;
