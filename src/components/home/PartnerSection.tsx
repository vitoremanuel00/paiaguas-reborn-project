import React from 'react';

const partners = [
  {
    name: 'Instituto Votorantim',
    logo: 'https://latimpacto.org/wp-content/uploads/2023/05/votorantim.png',
  },
  {
    name: 'Fundação André e Lucia Maggi',
    logo: 'https://fundacaoandreeluciamaggi.org.br/wp-content/uploads/2023/01/Logo_FALM_2022.png',
  },
  {
    name: 'Instituto Centro de Vida',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3wikUAyPG4znNEhgZsB3XBvFkwkcDUDxTQ&s',
  },
  {
    name: 'Ministério Público do MT',
    logo: 'https://lagoadojacare.com.br/wp-content/uploads/2021/07/51416311_1277602582377457_3693114027027726336_n-930x395.jpg',
  },
  {
    name: 'Prefeitura de Carlinda',
    logo: 'https://cdn.oantagonista.com/uploads/2024/02/prefeitura-municipal-de-carlinda-mt.jpg', 
  },
  {
    name: 'Prefeitura de Cláudia',
    logo: 'https://www.claudia.mt.gov.br/wp-content/uploads/2022/01/Pref_Claudia_Logo.png',
  },
];

const PartnerSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-paiaguas mb-10">Nossos Parceiros</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name} className="max-h-16 object-contain" />
              ) : (
                <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center text-sm text-gray-600">
                  Logo indisponível
                </div>
              )}
              <span className="text-sm text-center text-gray-700">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
