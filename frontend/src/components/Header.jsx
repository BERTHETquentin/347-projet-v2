/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useEffect } from "react";

import logo from "../assets/icons/logo.png";
function Header() {
  const [TableValue, setTableValue] = useState([{}]);

  const fnInfo = async () => {
    try {
      const response = await fetch(
        "http://requets",
        {
          method: "POST",
          body: JSON.stringify({}),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setTableValue(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fnInfo();
    console.log("planning");
  }, []);
  return (
    <>
      <nav className="navbar is-black">
        <a class="navbar-item" href="https://bulma.io">
          <img src={logo} width="112" height="28" />
        </a>
        <div className="container">
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a
                    className="button is-dark"
                    href="https://github.com/BERTHETquentin/347-projet-v2"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero is-link is-fullheight-with-navbar">
      <div className="columns is-centered">
      <div className="column is-one-third">
      <table className="table">
      <tr>
        <th>
          <abbr>First name</abbr>
        </th>
        <th>
          <abbr>Last name</abbr>
        </th>
        <th>
          <abbr>Date of birth</abbr>
        </th>
        <th>
          <abbr>Is alive</abbr>
        </th>
      </tr>
      <tr>

      </tr>
      <tr className="is-selected">

      </tr>
      <tr>

      </tr>
    </table>
      </div>
    </div>
        <div className="hero-body">
          <p className="title">347 projet v2</p>
        </div>
        
      </section>
    </>
  );
}

export default Header;
