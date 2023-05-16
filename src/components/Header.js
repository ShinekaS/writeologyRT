import React from 'react';

const Header = () => {
  const styles = {
    header: {
      display: "flex",
      backgroundColor: "lightblue",
      justifyContent: "space-around",
      alignItems: "center"
    }
  };

  return (
    <header style={styles.header}>
      <section>📝 Writeology</section>
      <section>Cart</section>
      
    </header>
  );
};

export default Header;

























