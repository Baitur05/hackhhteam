import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCompany } from "../../context/CompanyContextProvider";
import Company from "./Company";

const CompanyList = () => {
  const { getCompanies, companyArray, pages } = useCompany();
  // const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(currentPage);
  useEffect(() => {
    getCompanies();
  }, []);

  useEffect(() => {
    getCompanies();
  }, [searchParams]);
  const companiess = companyArray;
  console.log(companiess);

  // useEffect(() => {
  //   setSearchParams({
  //     page: currentPage,
  //   });
  // }, [currentPage]);

  return (
    <Box
      sx={{
        display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Компании</h2>
        <Link to="/addcompany">add company</Link>
      </div>

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
