import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useResume } from "../../context/ResumeContextProvider";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CurrResume = () => {
  const { getOneResume, oneResume, getResumeById } = useResume();
  const [resume, setResume] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  // useEffect(() => {
  //   function fetchOneResume() {
  //     getOneResume(params.id);
  //     console.log(params.id);
  //   }
  //   if (!params) {
  //     fetchOneResume();
  //     console.log("errror");
  //   }
  // }, []);

  let param = params.id;
  useEffect(() => {
    function fetchOneResume() {
      if (params.id) {
        getOneResume(params.id);
        console.log(params.id);
      }
    }
    fetchOneResume();
  }, [params.id]);

  useEffect(() => {
    if (oneResume) {
      setResume(oneResume);
    }
  }, [oneResume]);
  console.log(resume);
  console.log(param);

  useEffect(() => {
    getOneResume();
  }, []);
  // useEffect(() => {
  //   getResumeById(params.id)
  //     .then((data) => {
  //       setResume(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setIsLoading(false);
  //     });
  // }, [params.id]);
  return (
    <Box>
      {resume && (
        <Card sx={{ width: 745, margin: "3%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Заголовок: {resume.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Город: {resume.city}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Пол: {resume.gender}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              График: {resume.schedule}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              специализация: {resume.specialization}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Опыт Работы: {resume.work_experience}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default CurrResume;
