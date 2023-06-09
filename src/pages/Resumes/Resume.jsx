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

const Resume = ({ item }) => {
  console.log(item);
  return (
    <Card sx={{ width: 545, margin: "3%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Заголовок: {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Опыт Работы: {item.work_experience}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Поиск: {item.is_looking_for_job}
        </Typography>
      </CardContent>
      <Link to={`/oneresume/${item.id}`}>
        <Button size="small" sx={{ m: "0 0 10px 10px" }}>
          Подробнее
        </Button>
      </Link>
    </Card>
  );
};

export default Resume;
