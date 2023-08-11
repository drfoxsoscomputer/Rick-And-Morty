const validation = (userData) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /.*\d+.*/;
  const errors = {};

  //validacion del usuario/email
  if (!regexEmail.test(userData.email)) {
    errors.email = "* El email ingresado no es válido";
  }
  if (!userData.email) {
    errors.email = "* El email es requerido";
  }
  if (userData.email.length > 35) {
    errors.email = "* El email es muy largo (max 35 caracteres)";
  }

  //validacion de la contraseña/password
  if (!regexPassword.test(userData.password)) {
    errors.password = "* Tiene que incluir al menos un número en el password";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "* El password debe tener una longitud entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
