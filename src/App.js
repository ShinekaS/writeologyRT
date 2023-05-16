
import './App.css';
import React from 'react';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import PopularArticles from './components/PopularArticles';
import HeroSection from './components/HeroSection';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <Footer /> */}
      {/* <Hero /> */}
      <FeaturedArticles />
      <HeroSection />
      
    </div>
  );
}

export default App;
