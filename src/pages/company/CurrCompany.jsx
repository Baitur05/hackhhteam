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
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCompany } from "../../context/CompanyContextProvider";

const CurrCompany = () => {
  const { getOneCompany, oneCompany } = useCompany();
  const [company, setCompany] = useState();
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
    function fetchOneCompany() {
      if (params.id) {
        getOneCompany(params.id);
        console.log(params.id);
      }
    }
    fetchOneCompany();
  }, [params.id]);

  useEffect(() => {
    if (oneCompany) {
      setCompany(oneCompany);
    }
  }, [oneCompany]);
  console.log(company);
  console.log(param);

  useEffect(() => {
    getOneCompany();
  }, []);
  //   const spec = company && JSON.parse(company.specialization.name);
  //   console.log(company.specialization.name);

  //   console.log(spec);
  return (
    <Box>
      {company && (
        <Card sx={{ width: 945, margin: "3%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Название: {company.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Город: {company.city}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Описание: {company.description}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Местоположение: {company.location}
            </Typography>
            {/* <Typography gutterBottom variant="h5" component="div">
              специализация: {company.specialization.name}
            </Typography> */}
            {/* <Typography gutterBottom variant="h5" component="div">
              Опыт Работы: {company.work_experience}
            </Typography> */}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default CurrCompany;
