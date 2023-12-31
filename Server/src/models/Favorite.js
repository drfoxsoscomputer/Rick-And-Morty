const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        // type: DataTypes.UUID,
        // defaultValue: DataTypes.UUIDV4,
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

// status: {
//   type: DataTypes.ENUM("Alive", "Dead", "unknown"),
//   allowNull: false,
// },
// species: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// origin: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// location: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
