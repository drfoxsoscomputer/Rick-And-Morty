const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const { name, status, species, gender, origin = origin.name, location = location.name, image } = data;
      const character = { id, name, status, species, gender, origin, location, image };
      //   console.log(character)
      res.writeHead(200, { "Content-Type": "Application/json" });
      res.end(JSON.stringify(character));
    })

    .catch((reason) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(reason.message);
      //   console.log(reason);
    });
};
module.exports = getCharById;
