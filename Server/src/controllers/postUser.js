const { User } = require("../DB_conection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ error: "Faltan datos" });

    const user = await User.findOrCreate({ where: { email, password } });

    // newUser.addFavorites(favorites)

    return res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
    // return res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
