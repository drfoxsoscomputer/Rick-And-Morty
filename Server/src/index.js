const server = require("./app");
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
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
