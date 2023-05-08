import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCompany } from "../../context/CompanyContextProvider";
import { useVacancy } from "../../context/VacancyContextProvider";
import Favourite from "./Favourite";

const FavouritesList = () => {
  const { getFavourites, favourites } = useVacancy();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getFavourites();
  }, []);

  useEffect(() => {
    getFavourites();
  }, [searchParams]);
  console.log(favourites);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {favourites?.map((item) => (
          <Favourite key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default FavouritesList;
