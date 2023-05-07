import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCompany } from "../../context/CompanyContextProvider";
import Company from "./Company";

const CompanyList = () => {
  const { getCompanies, companyArray } = useCompany();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getCompanies();
  }, []);

  useEffect(() => {
    getCompanies();
  }, [searchParams]);
  const companiess = companyArray;
  console.log(companiess);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Link to="/addcompany">add company</Link>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {companyArray?.map((item) => (
          <Company key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default CompanyList;
