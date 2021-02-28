import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Licitar - Srce na Dar
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  O Nama
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Ponuda
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Galerija proizvoda
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Recenzije
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Kontaktirajte nas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
