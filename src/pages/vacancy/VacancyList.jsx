import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useVacancy } from "../../context/VacancyContextProvider";
import Vacancy from "./Vacancy";

const VacancyList = () => {
  const { getVacancies, vacancies } = useVacancy();
  // const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getVacancies();
  }, []);

  // useEffect(() => {
  //   getResumes();
  // }, [searchParams]);
  console.log(vacancies);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Вакансии</h2>
        <Link to="/addvacancy">add vacancy</Link>
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          // flexDirection: "column",
        }}
      >
        {vacancies.map((item) => (
          <Vacancy key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default VacancyList;
