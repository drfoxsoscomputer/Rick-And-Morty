const express = require("express");
const server = require("../src/app");
const session = require("supertest");
const agent = session(server);
// require("dotenv").config();
// const { PASSWORD } = process.env;

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con un status: 201", async () => {
      const response = await agent.get("/rickandmorty/character/1").expect(201);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      let response = (await agent.get("/rickandmorty/character/1")).body;

      expect(response).toHaveProperty("id");
      expect(response).toHaveProperty("name");
      expect(response).toHaveProperty("species");
      expect(response).toHaveProperty("gender");
      expect(response).toHaveProperty("status");
      expect(response).toHaveProperty("origin");
      expect(response).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      const response = (await agent.get("/rickandmorty/character/1000")).status;
      expect(response).toBe(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Las credenciales son correctas", async () => {
      const response = (await agent.get("/rickandmorty/login?email=daprthefox@gmail.com&password=asd123")).body;
      expect(response.access).toBeTruthy();
    });
    it("Las credenciales son incorrectas", async () => {
      const response = (await agent.get("/rickandmorty/login?email=mtr@rajen.com&password=sereje")).body;
      expect(response.access).toBeFalsy();
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const character1 = { id: "1", name: "Rick Sanchez" };
    const character2 = { id: "2", name: "Morty Smith" };
    it("Devuelve el personaje enviado por body", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(character1)).body;
      expect(response).toContainEqual(character1);
    });
    it("Debe devolver el o los personajes previos y el actual", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(character2)).body;
      expect(response).toContainEqual(character1);
      expect(response).toContainEqual(character2);
    });
  });
  describe("Delete /rickandmorty/fav/:id", () => {
    const character1 = { id: "1", name: "Rick Sanchez" };
    const character2 = { id: "2", name: "Morty Smith" };
    it("Devuelve el arreglo completo si no se eliminan personajes", async () => {
      const response = (await agent.delete("/rickandmorty/fav/50")).body;
      expect(response).toContainEqual(character1);
      expect(response).toContainEqual(character2);
    });
    it("Elimina correctamente el personaje", async () => {
      const response = (await agent.delete("/rickandmorty/fav/1")).body;
      expect(response).not.toContainEqual(character1);
      expect(response).toContainEqual(character2);
    });
  });
});
