import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBone } from "@fortawesome/free-solid-svg-icons";
import "./home.scss";
import { ALPHABET } from "../../constants";
import { Link } from "react-router-dom";

export function PageHome() {
  return (
    <React.Fragment>
      <h1>Buscar Raza por Letra</h1>
      <div className="list alphabet">
        {ALPHABET.map((letter, k) => (
          <Link to={"/breeds/" + letter} key={k}>
            <div className="list__card alphabet__letter">
              {letter.toUpperCase()}
            </div>
            <FontAwesomeIcon icon={faBone} className="icon" />
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}
