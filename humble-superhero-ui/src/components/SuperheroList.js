import React from "react";
import "./../styles/SuperheroList.css";

const SuperheroList = ({ superheroes }) => {
  return (
    <div className="list-container">
      <h2>Superhero List</h2>
      <ul>
        {superheroes.map((hero, index) => (
          <li key={index}>
            <strong>{hero.name}</strong> - {hero.superpower} (Humility: {hero.humilityScore})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperheroList;
