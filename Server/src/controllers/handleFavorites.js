let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.json(myFavorites);
  // console.log(myFavorites)
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  filteredFav = myFavorites.filter((fav) => fav.id !== id);
  myFavorites = filteredFav;
  res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
