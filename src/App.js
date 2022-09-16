import logo from './logo.svg';
import React from 'react';
import './App.css';
import HeroSlider from './hero-slider';
import ProductSlider from './productSlider';

function App() {
  return (
    <div className="App">
      <HeroSlider />
      <ProductSlider />
    </div>
  );
}

export default App;
