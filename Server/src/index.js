const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");
//LIbreria Dotenv .env
// const morgan = require("morgan");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});

//! Código WebServer
// const http = require("http");
// const PORT = 3001;
// const getCharById = require("./controllers/getCharById");
// const data = require("../src/utils/data.js");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;
//     // console.log(`Llega la request de: ${url}`);

//     if (url.includes("/rickandmorty/character")) {
//       const id = Number(url.split("/").pop());
//       getCharById(res, id);

// if (url === "/") {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   return res.end("Esta funcionando ✅");
// }

// if (url.includes("/rickandmorty/character")) {
// Obtiene el último segmento de la URL como el id

//   const id = Number(url.split("/").pop());

//   Busca el personaje por id
//   const character = data.find((char) => char.id === id);

//   Si existe, devuelve el personaje en formato JSON
//   if (character) {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(character));
// } else {
//   res.writeHead(404, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ error: "Character not found" }));
// }
//   }
// })

// .listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

// .listen(PORT, "localhost");
// .listen(PORT, "localhost", () => {
//   console.log(`Server is running on port: ${PORT}`);
