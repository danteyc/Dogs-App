import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faInfoCircle,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import "./breedList.scss";
import { Link } from "react-router-dom";

export function PageBreedList() {
  const { letter } = useParams();
  const [dataBreeds, setDataBreeds] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((respuesta) => {
      const breedsList = Object.keys(respuesta.data.message);
      const breedsResult = breedsList.filter((breed) => breed[0] === letter);
      setDataBreeds(breedsResult);
      setLoading(false);
    });
  }, [letter]);

  return (
    <React.Fragment>
      <h1>Razas con la letra {letter}</h1>
      {isLoading ? (
        <div className="loading">
          <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
        </div>
      ) : (
        <>
          {dataBreeds.length > 0 ? (
            <div className="list breeds">
              {dataBreeds.map((breed, k) => (
                <Link to={"/breed/" + breed} key={k}>
                  <div className="list__card">{breed}</div>
                  <FontAwesomeIcon icon={faDog} className="icon" />
                </Link>
              ))}
            </div>
          ) : (
            <p className="breed-info">
              <FontAwesomeIcon icon={faInfoCircle} /> No hay razas con la letra{" "}
              {letter}
            </p>
          )}
        </>
      )}
    </React.Fragment>
  );
}
