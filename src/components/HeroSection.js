import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <h3 className="headline">Breaking News</h3>
      <div className="featured-image">
        <img src="https://cdn.pixabay.com/photo/2015/11/20/12/44/stonehenge-1053030_1280.jpg" alt="Featured News" 
        style={{ width: '100%px', height: '300px' }}/>
        
      </div>
      <p className="summary">Stay updated with the latest news from around the world.</p>
      <a href="#" className="cta-button">Read More</a>
    </section>
  );
}

export default HeroSection;
