import React, { useEffect, useState } from 'react';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import './App.css';

function isShoppingPage() {
  return ['#plants', '#cart'].includes(window.location.hash);
}

function App() {
  const [showProductList, setShowProductList] = useState(isShoppingPage);

  // Keep Home, Plants, Cart, and the browser's Back button in sync.
  useEffect(() => {
    const handleNavigation = () => {
      setShowProductList(isShoppingPage());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    window.location.hash = 'plants';
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    window.location.hash = 'home';
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <main className="landing landing-page">
          <div className="landing-shade background-image" />
          <div className="landing-content content">
            <a className="brand light" href="#home">✳ Paradise Nursery</a>
            <div className="hero">
              <div className="landing_content">
                <span className="eyebrow">BRING THE OUTSIDE IN</span>
                <h1>Welcome to<br />Paradise Nursery</h1>
                <p>Beautiful plants. Happier spaces.</p>
                <button className="button get-started-button" onClick={handleGetStartedClick}>
                  Get Started <span aria-hidden="true">↗</span>
                </button>
              </div>
              <div className="aboutus_container"><AboutUs /></div>
            </div>
            <div className="landing-bottom">
              A greener home begins with one plant.
              <span>EST. 2026 · GROW WITH US</span>
            </div>
          </div>
        </main>
      ) : (
        <div className="product-list-container visible">
          <ProductList onHomeClick={handleHomeClick} />
          <footer>Paradise Nursery <span>Made for greener everyday living.</span></footer>
        </div>
      )}
    </div>
  );
}

export default App;
