const http = require("http");
const PORT = 3001;
const data = require("../src/utils/data.js");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    // console.log(`llegó la request de ${url}`);

    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end("Good ✅");
    }

    if (url.includes("/rickandmorty/character")) {
      // Obtiene el último segmento de la URL como el id
      // const id = Number(url.slice(-1));
      const id = Number(url.split("/").pop());
      // console.log(id)
      //   Busca el personaje por id
      const character = data.find((char) => char.id === id);

      //   Si existe, devuelve el personaje en formato JSON
      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(character));
      } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Character not found" }));
      }
    }
  })
  .listen(PORT, "localhost", () => {
    console.log(`Server is running on port: ${PORT}...`);
  });

//! https://www.students.soyhenry.com/classes/24?cohortId=110&videoOrdinal=3

//! 1:00:00
