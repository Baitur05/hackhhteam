import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import "./Register.scss";

const Register = () => {
  const auth = useAuth();
  const [last_name, setFirstName] = useState("");
  const [first_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_сonfirm, setPasswordConfirm] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [successMessage, setSuccessMessage] = useState(false);

  const { handleRegister, error, loading, setError } = auth ?? {};
  // console.log(handleRegister);
  function handleSave(e) {
    e.preventDefault();
    if (
      !last_name.trim() ||
      !first_name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !password_сonfirm.trim()
    ) {
      alert("заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("last_name", last_name);
      formData.append("first_name", first_name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", password_сonfirm);
      handleRegister(formData);
    }
  }

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {error ? <h2>{error}</h2> : null}
      <form onSubmit={handleSave}>
        <h1 style={{ margin: "0 0 30px 0" }}>Register</h1>
        <label>
          Имя:
          <input
            style={{
              padding: "10px",
              border: "none",
              background: "lightgray",
              width: "500px",
              margin: "0 0 15px 0",
              display: "flex",
            }}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="first name"
          />
        </label>
        <label>
          Фамилия:
          <input
            style={{
              padding: "10px",
              border: "none",
              background: "lightgray",
              width: "500px",
              margin: "0 0 15px 0",
              display: "flex",
            }}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="last name"
          />
        </label>
        <label>
          Email:
          <input
            style={{
              padding: "10px",
              border: "none",
              background: "lightgray",
              width: "500px",
              margin: "0 0 15px 0",
              display: "flex",
            }}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
        </label>
        <label>
          Пароль:
          <input
            style={{
              padding: "10px",
              border: "none",
              background: "lightgray",
              width: "500px",
              margin: "0 0 15px 0",
              display: "flex",
            }}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
        </label>
        <label>
          Подтверждение пароля:
          <input
            style={{
              padding: "10px",
              border: "none",
              background: "lightgray",
              width: "500px",
              margin: "0 0 15px 0",
              display: "flex",
            }}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type="password"
            placeholder="confirm password"
          />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
