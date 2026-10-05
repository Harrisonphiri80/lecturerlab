import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Partners from './components/Partners.jsx';
import Lecturers from './components/Lecturers.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';


export default function App() {
  const [page, setPage] = useState('home');
  const [query, setQuery] = useState('');

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About />;
      case 'partners':
        return <Partners />;
      case 'lecturers':
        return <Lecturers query={query} onQueryChange={setQuery} />;
      case 'contacts':
        return <Contacts />;
      case 'home':
      default:
        return <Home onNavigate={setPage} />;
    }
  };

  return (
    <div className="app">
      <Header
        activePage={page}
        onNavigate={setPage}
        query={query}
        onQueryChange={setQuery}
      />
      <main>{renderPage()}</main>
      <Footer onNavigate={setPage} />
    </div>
  );
}
