import React, { useState } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > window.innerHeight / 2) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className="App">
      <section className={`white-section ${scrolled ? 'scrolled' : ''}`}>
        <h1>White Section</h1>
      </section>
      <section className="black-section">
        <h1>Black Section</h1>
      </section>
    </div>
  );
}

export default App;
