import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import Loader from "../../components/Loader/Loader";

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

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Login Page</h1>
      {error ? <h2>{error}</h2> : null}
      <form action="submit" onSubmit={handleSave}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
