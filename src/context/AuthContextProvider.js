import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://35.203.22.39";
export const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    setLoading(true);

    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      //   console.log(res);
      navigate("/register-success");
    } catch (error) {
      setError(Object.values(error.response.data).flat(2));
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (formData, email) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/login/`, formData);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setUser(email);
      console.log(email);
      navigate("/");
    } catch (error) {
      setError(error.response.data.detail);
    } finally {
      setLoading(false);
    }
  };

  const checkAuth = async () => {
    setLoading(true);

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}/account/refresh/`, {
        refresh: token.refresh,
        config,
      });
      localStorage.setItem(
        "token",
        JSON.stringify({
          access: res.data.access,
          refresh: res.data.refresh,
        })
      );
      const email = localStorage.getItem("email");
      setUser(email);
    } catch (error) {
      console.log(error);
      handleLogout();
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUser(false);
    navigate("/login");
  };
  const values = {
    handleRegister,
    handleLogin,
    error,
    user,
    checkAuth,
    setError,
    loading,
    handleLogout,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
