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
import { useVacancy } from "../../context/VacancyContextProvider";
import AddFavorite from "../Favourites/AddFavourite";

const CurrVacancy = () => {
  const { getOneVacancy, oneVacancy } = useVacancy();
  const [vacancy, setVacancy] = useState();
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
    function fetchOneVacancy() {
      if (params.id) {
        getOneVacancy(params.id);
        console.log(params.id);
      }
    }
    fetchOneVacancy();
  }, [params.id]);

  useEffect(() => {
    if (oneVacancy) {
      setVacancy(oneVacancy);
    }
  }, [oneVacancy]);
  console.log(vacancy);
  console.log(param);

  useEffect((userId, item) => {
    getOneVacancy();
  }, []);
  //   const spec = company && JSON.parse(company.specialization.name);
  //   console.log(company.specialization.name);

  //   console.log(spec);

  function addToFav() {}
  return (
    <Box>
      {vacancy && (
        <Card sx={{ width: 945, margin: "3%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Заголовок: {vacancy.company}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Город: {vacancy.city}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Контакты: {vacancy.contact_information}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Мы находимся: {vacancy.location}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              специализация: {vacancy.specialization}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Заголовок: {vacancy.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Опыт Работы: {vacancy.required_experience}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Что мы предлогаем: {vacancy.what_do_we_offer}
            </Typography>
          </CardContent>
          {/* <AddFavorite vacancy={vacancy.id} /> */}
        </Card>
      )}
    </Box>
  );
};

export default CurrVacancy;
