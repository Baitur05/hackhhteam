import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";
import Home from "./pages/home";
import Register from "./pages/Register/Register";
import LoginPage from "./pages/Login/LoginPage";
import Products from "./pages/products";
import Header from "./components/header/header";
import NotFound from "./pages/not-found";
import Profiles from "./pages/Profiles/Profile";
import EditProfile from "./pages/Profiles/EditProfile";

export const SearchContext = createContext();

export const App = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="profile" element={<Profiles />} />
              <Route path="/editprofile/:id" element={<EditProfile />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
};
