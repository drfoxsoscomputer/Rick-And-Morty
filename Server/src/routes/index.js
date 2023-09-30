// const express = require("express");
// const router = express.Router();

const router = require("express").Router();
const { getCharById, login, postUser, postFav, deleteFav } = require("../controllers/index");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
// router.get("/fav", getFav);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
