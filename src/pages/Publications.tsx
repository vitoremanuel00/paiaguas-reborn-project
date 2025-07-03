import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Publications = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-paiaguas mb-6">Publicações</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Em breve você poderá acompanhar aqui as publicações do Instituto Paiaguás, incluindo relatórios, boletins informativos, artigos, projetos e muito mais.
          </p>
          <div className="text-paiaguas font-medium bg-paiaguas/10 border border-paiaguas px-6 py-4 rounded-lg inline-block">
            Nenhuma publicação disponível no momento.
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Publications;
