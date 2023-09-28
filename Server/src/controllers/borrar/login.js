const users = require("../../utils/users");


const login = (req, res) => {
  const { email, password } = req.query;
 let access = false;
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
       access = true
    }
  });
    return res.json({ access });
};

module.exports = login;

// const users = require("../utils/users");

// const login = (req, res) => {
//   const { email, password } = req.query;
//   let access = false;

//   // const user = users.find(us => us.email === email && us.password === password)
//   // user? res.json({access: true}) : res.status(401).json({access: false})

//   users.forEach((user) => {
//     if (user.email === email && user.password === password) {
//       access = true;
//     }
//   });
//   res.json({ access });
// };
// // ? Donde vemos el error en Front? Punto a corregir

module.exports = login;
