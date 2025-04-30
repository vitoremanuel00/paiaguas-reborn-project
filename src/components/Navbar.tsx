
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-paiaguas rounded-full flex items-center justify-center">
              <span className="text-white font-bold">IP</span>
            </div>
            <span className="text-paiaguas font-bold text-xl">Instituto Paiaguás</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" onClick={closeMenu}>Início</NavLink>
            <NavLink to="/quem-somos" onClick={closeMenu}>Quem Somos</NavLink>
            <NavLink to="/projetos" onClick={closeMenu}>Projetos</NavLink>
            <NavLink to="/publicacoes" onClick={closeMenu}>Publicações</NavLink>
            <NavLink to="/contato" onClick={closeMenu}>Contato</NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
          >
            <X size={24} />
          </Button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <NavLink to="/" onClick={closeMenu}>Início</NavLink>
          <NavLink to="/quem-somos" onClick={closeMenu}>Quem Somos</NavLink>
          <NavLink to="/projetos" onClick={closeMenu}>Projetos</NavLink>
          <NavLink to="/publicacoes" onClick={closeMenu}>Publicações</NavLink>
          <NavLink to="/contato" onClick={closeMenu}>Contato</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <Link 
      to={to} 
      className="text-gray-700 hover:text-paiaguas font-medium transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
