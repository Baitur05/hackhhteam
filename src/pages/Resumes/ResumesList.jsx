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
        // alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "1100px",
          display: "flex",
          justifyContent: "space-between",
          margin: "0 0 0 60px",
        }}
      >
        <h2>Резюме</h2>
        <Link to="/addresume">add resume</Link>
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          direction: "column",
        }}
      >
        {resumes.map((item) => (
          <Resume key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default ResumesList;
