import React from "react";
import "./css/Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="container-footer">
        <div className="text-center text- firstContainer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 pt-1 pb-1 d-flex justify-content-start align-items-center centerDivFooter">
                <button
                  type="button"
                  className="btn btn-info btn-circle btn-lg circle-blue"
                ></button>
              </div>
              <div className="col-md-6 d-flex justify-content-end align-items-center centerDivFooter">
                <span className="p-2">Redes Sociales:</span>
                <button
                  type="button"
                  className="btn btn-info btn-circle circle-blueW"
                ></button>
                <button
                  type="button"
                  className="btn btn-info btn-circle circle-blueW"
                ></button>
                <button
                  type="button"
                  className="btn btn-info btn-circle circle-blueW"
                ></button>
                <button
                  type="button"
                  className="btn btn-info btn-circle circle-blueW"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-1 text-white secondContainer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-start align-items-center centerDivFooter">
                <p className="text-muted">
                  &copy; 2024 Alucinamkt. All rights reserved
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-end align-items-center centerDivFooter">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="/" className="text-muted text-decoration-none">
                      Terminos y Servicios
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="text-muted text-decoration-none">
                      Política y Privacidad
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="text-muted text-decoration-none">
                      Politica de Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
