const { Favorite, User } = require("../DB_conection");

const postFav = async (req, res) => {
  try {
    const { id, name, image, gender } = req.body;
    if (!id || !name || !image || !gender) return res.status(401).json({ error: "Faltan datos" });

    await Favorite.findOrCreate({ where: { id }, defaults: { name, image, gender } });

    const allFavorites = await Favorite.findAll();

    // const user = await User.findByPk(userId);

    // await user.addFavorite(Favorite, {
    //   through: { favoriteId: Favorite.id },
    // });
    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;

// [19:40]Antonio Rodriguez: const { Favorite, User } = require('../database');

// const deleteFav = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const fav = await Favorite.findByPk(id);

//         if (!fav) {
//             return res.status(404).json({ error: 'Favorite not found' });
//         }

//         // Consulta si otros usuarios tienen el mismo favorito
//         const usersWithSameFavorite = await User.findAll({
//             where: {
//                 id: {
//                     [Op.ne]: req.user.id, // Excluye al usuario actual
//                 },
//             },
//             include: [
//                 {
//                     model: Favorite,
//                     where: { id: fav.id },
//                     required: true, // Solo usuarios con este favorito
//                 },
//             ],
//         });

//         if (usersWithSameFavorite.length > 0) {
//             // Otros usuarios tienen este favorito, simplemente desasócialo
//             await req.user.removeFavorite(fav);
//         } else {
//             // Nadie más tiene este favorito, puedes eliminarlo completamente
//             await fav.destroy();
//         }

//         res.status(200).json({ message: 'Favorite deleted successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// module.exports = deleteFav;
