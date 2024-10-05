import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="white-section">
        <h1>White Section</h1>
      </section>
      <section className="black-section">
        <h1>Black Section</h1>
      </section>
    </div>
  );
}




import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > window.innerHeight / 2) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App ${scrolled ? 'transition' : ''}`}>
      <section className="white-section">
        <h1>White Section</h1>
      </section>
      <section className="black-section">
        <h1>Black Section</h1>
      </section>
    </div>
  );
}

export default App;

