import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Vacancy = ({ item }) => {
  return (
    <Card sx={{ width: 545, margin: "3%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Заголовок: {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Компания: {item.company}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Город: {item.city}
        </Typography>
      </CardContent>
      <Link to={`/onevacancy/${item.id}`}>
        <Button sx={{ m: "0 0 10px 10px" }}>Подробнее</Button>
      </Link>
    </Card>
  );
};

export default Vacancy;
