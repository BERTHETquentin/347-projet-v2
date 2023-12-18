import React from "react";
import "./Footer.css";

/**
 * Footer component.
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>347 Projet v2</strong> by{" "}
          <a href="https://github.com/BERTHETquentin">Quentin Berthet</a> & <a href="https://github.com/nicolasloi">Nicolas Loison</a>. The source code is not
          licensed. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
