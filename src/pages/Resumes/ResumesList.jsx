import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useResume } from "../../context/ResumeContextProvider";
import Resume from "./Resume";

const ResumesList = () => {
  const { getResumes, resumes } = useResume();
  // const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getResumes();
  }, []);

  // useEffect(() => {
  //   getResumes();
  // }, [searchParams]);

  console.log(resumes);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Link to="/addresume">add resume</Link>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {resumes.map((item, index) => (
          <Resume key={index} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default ResumesList;
