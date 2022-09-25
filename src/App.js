import React, { useState } from 'react';
import Navigation from './components/Navigation';
import './App.css';
import About from './components/pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'About',
      description: 'insert text here',
    },
    { name: 'Contact', description: 'insert text here' },
    { name: 'Portfolio', description: 'insert text here' },
    { name: 'Resume', description: 'insert text here' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Navigation>
      <main>
        <div>
          {/* <Header></Header> */}
          <About></About>
          {/* <Footer></Footer> */}
        </div>
      </main>
    </div>
  );
}

export default App;
