import { useState } from "react";
import validation from "./validation.js";
import styles from "./Form.module.css";

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

  const handleShowPassword = (event) => {
    setShowPassword(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(userData);
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Rick and Morty</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className={errors.email && styles.warning}
          type="email"
          name="email"
          placeholder="Email..."
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <input
          className={errors.password && styles.warning}
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password..."
          value={userData.password}
          onChange={handleChange}
        />

        {/* checkbox mostrar ocultar contraseña */}
        <input
          type="checkbox"
          name="show-password"
          id="show-password"
          onChange={handleShowPassword}
        />
        <span>Show Password</span>
        <br />
        <button
          disabled={!userData.email || !userData.password}
          type="submit">
          Submit
        </button>
        <p className={styles.danger}>{errors.email}</p>
        <p className={styles.danger}>{errors.password}</p>
      </form>
    </div>
  );
};

export default Form;
