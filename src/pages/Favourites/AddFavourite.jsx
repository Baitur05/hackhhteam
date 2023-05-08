import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import jwt_decode from "jwt-decode";
import { useVacancy } from "../../context/VacancyContextProvider";

const AddFavorite = ({ vacancy }) => {
  const { addFavourite, getFavourites, favourites, token, userId } =
    useVacancy();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(userId);
  // console.log(userE);

  const [company, setCompany] = useState({
    user: userId,
    vacancy: vacancy,
    //  title: "",
  });
  console.log(company);

  useEffect(() => {
    getFavourites();
  }, []);
  useEffect(() => {
    getFavourites();
  }, [searchParams]);

  function handleSave() {
    let formData = new FormData();
    formData.append("user", company.user);
    formData.append("vacancy", company.vacancy);
    //  formData.append("title", company.title);

    addFavourite(formData);
  }
  return (
    <div>
      <Button
        sx={{
          color: "black",
          background: "#ae3559",
          borderRadius: "60px",
          color: "#ffffff",
          cursor: "pointer",
          border: "none",
        }}
        variant="solid"
        type="submit"
        onClick={handleSave}
      >
        add to fav
      </Button>
    </div>
  );
};

export default AddFavorite;
