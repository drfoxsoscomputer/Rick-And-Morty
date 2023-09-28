import { useState } from "react";
import validation from "./validation.js";
import styles from "./Form.module.css";
import logo from "../../utils/img/logoRaM.png";
import EyeOpen from "../../utils/img/eye-open.svg";
import EyeClosed from "../../utils/img/eye-closed.svg";

const Form = ({ onLogin }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  // const handleShowPassword = (event) => {
  //   setShowPassword(event.target.checked);
  // };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(userData);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const errors = validation(userData);
  //   setErrors(errors);
  //   if (Object.keys(errors).length === 0) {
  //     try {
  //       await onLogin(userData);
  //       setUserData({ email: "", password: "" });
  //       setErrors({});
  //     } catch (error) {
  //       setErrors({ error: error.message });
  //     }
  //   }
  // };
  return (
    <div className={styles.loginContainer}>
      <div>
        <img
          className={styles.logo}
          src={logo}
          alt="Rick And Morty"
        />
      </div>

      <form onSubmit={handleSubmit}>
        <h1 >Login</h1>

        <input
          className={errors.email && styles.warning}
          type="email"
          name="email"
          placeholder="Email..."
          value={userData.email}
          onChange={handleChange}
        />

        <br />

        <input
          className={errors.password && styles.warning}
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password..."
          value={userData.password}
          onChange={handleChange}
        />
        <p>
          {errors.email && <p className={styles.danger}>{errors.email}</p>}
          {errors.password && <p className={styles.danger}>{errors.password}</p>}
        </p>

        {/* checkbox mostrar ocultar contraseña */}
        {/* <br /> */}
        {/* <input
          type="checkbox"
          name="show-password"
          id="show-password"
          onChange={handleShowPassword}
        />

        <br />
        <label>Show Password</label> */}
        {/* <br /> */}

        {/* <input
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
        /> */}

        {/* <input
          type="password"
          style={{ display: showPassword ? "block" : "none" }}
        /> */}

        {/* <input
          type="text"
          style={{ display: showPassword ? "none" : "block" }}
        /> */}

        <div
          className={styles.eye}
          onClick={handleShowPassword}>
          {showPassword ? (
            <img
              className={styles.eye}
              src={EyeOpen}
            />
          ) : (
            <img
              className={styles.eye}
              src={EyeClosed}
            />
          )}
        </div>

        <button
          disabled={!userData.email || !userData.password}
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
