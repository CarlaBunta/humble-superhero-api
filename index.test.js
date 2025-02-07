const request = require("supertest");
const express = require("express");
const app = require("./index");

describe("Superhero API", () => {
  it("should add a superhero and return it", async () => {
    const response = await request(app)
      .post("/superheroes")
      .send({
        name: "Lockjaw",
        superpower: "Teleportation",
        humilityScore: 7,
      });

    expect(response.status).toBe(201);
    expect(response.body.superhero.name).toBe("Lockjaw");
  });
});
