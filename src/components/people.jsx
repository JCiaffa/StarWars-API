import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function People() {
  const { id } = useParams();
  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => setPerson(response.data))
      .then(() => setError(false))
      .catch(() => setError(true));
  }, [id]);

  return (
    <div>
      {!error ? (
        <div>
          <h1>Name: {person.name}</h1>
          <h2>Height: {person.height}</h2>
          <h2>Mass: {person.mass}</h2>
          <h2>Hair Color: {person.hair_color}</h2>
          <h2>Eye Color: {person.eye_color}</h2>
          <h2>Birth Year: {person.birth_year}</h2>
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

export default People;
