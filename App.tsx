
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Products } from './pages/Products';
import { Blog } from './pages/Blog';
import { BlogPostView } from './pages/BlogPostView';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';
import { AIArchitect } from './components/AIArchitect';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('HOME');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home onNavigate={setCurrentPage} />;
      case 'SERVICES':
        return <Services />;
      case 'PORTFOLIO':
        return <Portfolio />;
      case 'PRODUCTS':
        return <Products />;
      case 'TECH_LOG':
        return <Blog onNavigate={setCurrentPage} />;
      case 'BLOG_POST':
        return <BlogPostView onBack={() => setCurrentPage('TECH_LOG')} />;
      case 'CONTACT':
        return <Contact />;
      case 'ADMIN':
        return <Admin />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#00A3FF] selection:text-white">
      {currentPage !== 'ADMIN' && <Navbar activePage={currentPage} onNavigate={setCurrentPage} />}
      <main className={`flex-grow ${currentPage !== 'ADMIN' ? 'pt-16' : ''}`}>
        {renderPage()}
      </main>
      {currentPage !== 'ADMIN' && <AIArchitect />}
      {currentPage !== 'ADMIN' && <Footer onNavigate={setCurrentPage} />}
    </div>
  );
};

export default App;
