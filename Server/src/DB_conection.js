require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const { Sequelize } = require("sequelize");

const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");

// Para ver los datos de la conexión que se encuentra en el archivo .env
// console.log({ DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME });

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, { logging: false, native: false });

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
UserModel(sequelize);
FavoriteModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

// User.belongsToMany(Favorite);

// Favorite.belongsToMany(User);

User.belongsToMany(Favorite, { through: "UserFavorite" });
Favorite.belongsToMany(User, { through: "UserFavorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
