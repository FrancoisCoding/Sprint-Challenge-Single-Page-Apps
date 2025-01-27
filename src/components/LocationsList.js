import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function Locationslist(props) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/location/
    `
      )
      .then(response => {
        setLocations(response.data.results);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {locations.map(locations => (
        <LocationCard data={locations} />
      ))}
    </section>
  );
}
