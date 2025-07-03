
// import { Link } from 'react-router-dom';
// import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white pt-12 pb-6">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4 border-b border-paiaguas pb-2">Instituto Paiaguás</h3>
//             <p className="text-gray-300 mb-4">
//               Promovendo o desenvolvimento sustentável e a valorização do ecossistema do Pantanal brasileiro.
//             </p>
//             <div className="flex space-x-4">
//               <a href="https://facebook.com" className="hover:text-paiaguas-light transition-colors">
//                 <Facebook size={20} />
//               </a>
//               <a href="https://instagram.com" className="hover:text-paiaguas-light transition-colors">
//                 <Instagram size={20} />
//               </a>
//               <a href="https://twitter.com" className="hover:text-paiaguas-light transition-colors">
//                 <Twitter size={20} />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4 border-b border-paiaguas pb-2">Links Rápidos</h3>
//             <ul className="space-y-2">
//               <FooterLink to="/">Início</FooterLink>
//               <FooterLink to="/quem-somos">Quem Somos</FooterLink>
//               <FooterLink to="/projetos">Projetos</FooterLink>
//               <FooterLink to="/publicacoes">Publicações</FooterLink>
//               <FooterLink to="/contato">Contato</FooterLink>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4 border-b border-paiaguas pb-2">Projetos</h3>
//             <ul className="space-y-2">
//               <FooterLink to="/projetos/conservacao">Conservação</FooterLink>
//               <FooterLink to="/projetos/educacao-ambiental">Educação Ambiental</FooterLink>
//               <FooterLink to="/projetos/pesquisa">Pesquisa</FooterLink>
//               <FooterLink to="/projetos/desenvolvimento-sustentavel">Desenvolvimento Sustentável</FooterLink>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4 border-b border-paiaguas pb-2">Contato</h3>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <MapPin className="mr-2 text-paiaguas-light flex-shrink-0 mt-1" size={18} />
//                 <p className="text-gray-300">Av. Historiador Rubens de Mendonça, 123<br />Cuiabá, MT, 78050-000</p>
//               </div>
//               <div className="flex items-center">
//                 <Phone className="mr-2 text-paiaguas-light flex-shrink-0" size={18} />
//                 <p className="text-gray-300">(65) 3321-4567</p>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="mr-2 text-paiaguas-light flex-shrink-0" size={18} />
//                 <p className="text-gray-300">contato@institutopaiaguas.org.br</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm">
//               © {new Date().getFullYear()} Instituto Paiaguás. Todos os direitos reservados.
//             </p>
//             <div className="flex space-x-4 mt-4 md:mt-0">
//               <Link to="/politica-de-privacidade" className="text-gray-400 text-sm hover:text-paiaguas-light">
//                 Política de Privacidade
//               </Link>
//               <Link to="/termos-de-uso" className="text-gray-400 text-sm hover:text-paiaguas-light">
//                 Termos de Uso
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
//   return (
//     <li>
//       <Link to={to} className="text-gray-300 hover:text-paiaguas-light transition-colors">
//         {children}
//       </Link>
//     </li>
//   );
// };

// export default Footer;


import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institucional */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-paiaguas pb-2">Instituto Paiaguás</h3>
            <p className="text-gray-300 mb-4">
              Promovendo o desenvolvimento humano e ambiental por meio de parcerias, projetos sociais e ações de cidadania desde 2008.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/institutopaiaguas/?locale=pt_BR&_rdc=1&_rdr#" className="hover:text-paiaguas-light transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/oinstitutopaiaguas/" className="hover:text-paiaguas-light transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-paiaguas pb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Início</FooterLink>
              <FooterLink to="/quem-somos">Quem Somos</FooterLink>
              <FooterLink to="/projetos">Projetos</FooterLink>
              <FooterLink to="/publicacoes">Publicações</FooterLink>
              <FooterLink to="/contato">Contato</FooterLink>
            </ul>
          </div>

          {/* Projetos reais */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-paiaguas pb-2">Projetos</h3>
            <ul className="space-y-2">
              <FooterLink to="/projetos/carlinda-saudavel">Carlinda Saudável</FooterLink>
              <FooterLink to="/projetos/construindo-nosso-futuro">Construindo Nosso Futuro</FooterLink>
              <FooterLink to="/projetos/transformar-vida">Transformar Vida</FooterLink>
              <FooterLink to="/projetos/produzir-e-conservar">Produzir e Conservar</FooterLink>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-paiaguas pb-2">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 text-paiaguas-light flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-300">Rua Carrara, 28 - Jardim Itália<br />Cuiabá, MT</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-paiaguas-light flex-shrink-0" size={18} />
                <p className="text-gray-300">(65) 3644-1685</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-paiaguas-light flex-shrink-0" size={18} />
                <p className="text-gray-300">contato@institutopaiaguas.org.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* Direitos e links legais */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Instituto Paiaguás. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/politica-de-privacidade" className="text-gray-400 text-sm hover:text-paiaguas-light">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-uso" className="text-gray-400 text-sm hover:text-paiaguas-light">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link to={to} className="text-gray-300 hover:text-paiaguas-light transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default Footer;
