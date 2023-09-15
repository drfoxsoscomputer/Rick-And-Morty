const getCharById = require("./getCharById");
const { postFav, deleteFav } = require("./handleFavorites");
const login = require("./login");

module.exports = { getCharById, postFav, deleteFav, login };
