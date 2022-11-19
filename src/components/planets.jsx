import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Planets() {
  const { id } = useParams();
  const [planet, setPlanet] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((response) => setPlanet(response.data))
      .then(() => setError(false))
      .catch(() => setError(true));
  }, [id]);

  return (
    <div>
      {!error ? (
        <div>
          <h1>Name: {planet.name}</h1>
          <h2>Rotation Period: {planet.rotation_period}</h2>
          <h2>Orbital Period: {planet.orbital_period}</h2>
          <h2>Climate: {planet.climate}</h2>
          <h2>Population: {planet.population}</h2>
        </div>
      ) : (
        <div>
          <p>These aren't the droids you're looking for</p>
          <p>Can't figure out image</p>
        </div>
      )}
    </div>
  );
}

export default Planets;
