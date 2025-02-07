import React, { useState } from "react";
import "./../styles/SuperheroForm.css";

const SuperheroForm = ({ addSuperhero }) => {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert humilityScore to a number
    const heroData = {
      name,
      superpower,
      humilityScore: parseInt(humilityScore, 10)
    };

    // Validate before sending
    if (name && superpower && humilityScore) {
      addSuperhero(heroData);

      // Reset form
      setName('');
      setSuperpower('');
      setHumilityScore('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="superhero-form">
      <input
        type="text"
        placeholder="Hero Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Superpower"
        value={superpower}
        onChange={(e) => setSuperpower(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Humility Score (1-10)"
        value={humilityScore}
        onChange={(e) => setHumilityScore(e.target.value)}
        min="1"
        max="10"
        required
      />
      <button type="submit">Add Superhero</button>
    </form>
  );
}

export default SuperheroForm;