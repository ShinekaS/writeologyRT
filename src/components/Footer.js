import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      display: "flex",
      backgroundColor: "gray",
      justifyContent: "space-around",
      alignItems: "center"
    }
  };

  return (
    <footer style={styles.footer}>
      <section>I am the footer</section>
      <section>Social media icons</section>
    </footer>
  );
}

export default Footer;
