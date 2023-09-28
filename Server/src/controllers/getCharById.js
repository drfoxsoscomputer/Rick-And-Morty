const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`);
    const { name, status, species, gender, origin = origin, location = location, image } = data;
    // const { name, status, species, gender, origin = origin.name, location = location.name, image } = data;

    const character = { id, name, status, species, gender, origin, location, image };
    res.status(200).json(character);
  } catch (error) {
    // console.log({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCharById;

// const getCharById = (req, res) => {
//   const {id} = req.params
// //  console.log(id)
//   axios.get(`${URL}/${id}`)
//   .then(({data}) => {
//     // console.log(data)
//     if (data) {
//       const {name, gender, species, origin = origin.name, image, status } = data
//       const character = {name, gender, species, origin, id, image, status }
//       res.status(201).json(character)
//     } else {
//       res.status(404).json({error: "Not Found"})
//     }
//   })
//   .catch(error => {
//   //  console.log(error)
//     res.status(500).json({error:error.mesage})
//     //console.log(error)
//   })
// }

//! WebServer
// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//       const { name, status, species, gender, origin = origin.name, location = location.name, image } = data;
//       const character = { id, name, status, species, gender, origin, location, image };
// console.log(character)
//       res.writeHead(200, { "Content-Type": "Application/json" });
//       res.end(JSON.stringify(character));
//     })

//     .catch((reason) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(reason.message);
//       //   console.log(reason);
//     });
// };
// module.exports = getCharById;
