// const express = require("express");
// const router = express.Router();

const router = require("express").Router();
const { getCharById, postFav, deleteFav, login } = require("../controllers/index");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
