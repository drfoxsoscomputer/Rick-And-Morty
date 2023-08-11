import { useState } from "react";
import validation from "./validation.js";
import "./Form.modules.css";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        className={errors.email && "warning"}
        type="email"
        name="email"
        placeholder="Email..."
        value={userData.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        className={errors.password && "warning"}
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password..."
        value={userData.password}
        onChange={handleChange}
      />
      <button
        disabled={!userData.email || !userData.password}
        type="submit">
        Submit
      </button>
      <br />
      {/* checkbox mostrar ocultar contraseña */}
      <input
        type="checkbox"
        name="show-password"
        id="show-password"
        onChange={handleShowPassword}
      />
      <span>Show Password</span>
      {errors.email && <p className="danger">{errors.email}</p>}
      {errors.password && <p className="danger">{errors.password}</p>}
    </form>
  );
};

export default Form;
