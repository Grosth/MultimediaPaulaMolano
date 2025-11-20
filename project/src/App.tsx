import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fundamentos from './pages/Fundamentos';
import Tipologias from './pages/Tipologias';
import Campos from './pages/Campos';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'fundamentos':
        return <Fundamentos />;
      case 'tipologias':
        return <Tipologias />;
      case 'campos':
        return <Campos />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
