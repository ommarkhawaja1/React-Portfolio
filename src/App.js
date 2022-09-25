import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/pages/About';
import ContactForm from './components/ContactForm'
import Contact from './components/pages/Contact'


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

  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Contact></Contact>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
