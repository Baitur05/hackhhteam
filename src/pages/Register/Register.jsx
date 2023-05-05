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
    <div>
      <h1>Register</h1>
      {error ? <h2>{error}</h2> : null}
      <form onSubmit={handleSave}>
        <label>
          Имя:
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="first name"
          />
        </label>
        <label>
          Фамилия:
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="last name"
          />
        </label>
        <label>
          Email:
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
        </label>
        <label>
          Пароль:
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
        </label>
        <label>
          Подтверждение пароля:
          <input
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
