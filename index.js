const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

const superheroes = [];

app.get("/", (req, res) => {
  res.send("Humble Superhero API is up and running!");
});

module.exports = app;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Recruiting process
app.post("/superheroes", (req, res) => {
  const { name, superpower, humilityScore } = req.body;

  // Validate the required fileds for joining the team
  if (!name || !superpower || humilityScore === undefined) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (typeof humilityScore !== "number" || humilityScore < 1 || humilityScore > 10) {
    return res.status(400).json({ message: "Humility score must be a number between 1 and 10." });
  }

  // Add heroes to the team
  const newHero = { name, superpower, humilityScore };
  superheroes.push(newHero);

  res.status(201).json({ message: "Superhero added to the successfully!", superhero: newHero });
});

// Calling the morning team meeting
app.get("/superheroes", (req, res) => {
  const sortedHeroes = [...superheroes].sort((a, b) => b.humilityScore - a.humilityScore);
  res.json(sortedHeroes);
});

// Error handling
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});
