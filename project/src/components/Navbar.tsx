import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'fundamentos', label: 'Fundamentos' },
    { id: 'tipologias', label: 'Tipologías' },
    { id: 'campos', label: 'Campos de Acción' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            IM
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
