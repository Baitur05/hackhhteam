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
import AddCompany from "./pages/company/AddCompany";
import AddResumes from "./pages/Resumes/AddResumes";
import ResumesList from "./pages/Resumes/ResumesList";
import CompanyList from "./pages/company/CompanyList";
import VacancyList from "./pages/vacancy/VacancyList";
import AddVacancy from "./pages/vacancy/AddVacancy";
import CurrResume from "./pages/Resumes/CurrResume";
import CurrCompany from "./pages/company/CurrCompany";
import CurrVacancy from "./pages/vacancy/CurrVacancy";
import FavouritesList from "./pages/Favourites/FavouritesList";

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
              {/* <Route path="/products" element={<Products />} /> */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="profile" element={<Profiles />} />
              <Route path="/editprofile/:id" element={<EditProfile />} />
              <Route path="addcompany" element={<AddCompany />} />
              <Route path="resume" element={<ResumesList />} />
              <Route path="oneresume/:id" element={<CurrResume />} />
              <Route path="onecompany/:id" element={<CurrCompany />} />
              <Route path="onevacancy/:id" element={<CurrVacancy />} />

              <Route path="addresume" element={<AddResumes />} />
              <Route path="companies" element={<CompanyList />} />
              <Route path="vacancy" element={<VacancyList />} />
              <Route path="addvacancy" element={<AddVacancy />} />
              <Route path="favourites" element={<FavouritesList />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
};
