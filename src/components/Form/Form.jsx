import { useState } from "react";
import validation from "../Validation/Validation";
import "./Form.modules.css";

const Form = ({ onLogin }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

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
        placeholder="email..."
        value={userData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        className={errors.password && "warning"}
        type="password"
        name="password"
        placeholder="password..."
        value={userData.password}
        onChange={handleChange}
      />

      <button
        disabled={!userData.email || !userData.password}
        type="submit">
        Submit
      </button>
      
      {errors.email && <p className="danger">{errors.email}</p>}
      {errors.password && <p className="danger">{errors.password}</p>}
    </form>
  );
};

export default Form;
