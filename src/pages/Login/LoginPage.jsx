import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
// import Loader from "../loader/Loader";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, error, setError, loading } = useAuth();

  function handleSave(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("заполнете все поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      handleLogin(formData, email);
    }
  }

  useEffect(() => {
    setError(false);
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div>
      {error ? <h2>{error}</h2> : null}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form action="submit" onSubmit={handleSave}>
          <h1 style={{ margin: "0 0 50px 0" }}>Login</h1>
          <input
            style={{
              padding: "10px",
              border: "none",
              background: "lightgray",
              width: "300px",
              margin: "0 0 30px 0",
              display: "flex",
            }}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <input
            style={{
              padding: "10px",
              border: "none",
              background: "lightgray",
              width: "300px",
            }}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
