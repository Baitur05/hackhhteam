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

const Company = ({ item }) => {
  return (
    <Card sx={{ width: 545, margin: "3%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Название: {item.name}
        </Typography>
      </CardContent>
      <Link to={`/onecompany/${item.id}`}>
        <Button sx={{ m: "0 0 10px 10px" }} size="small">
          Подробнее
        </Button>
      </Link>
    </Card>
  );
};

export default Company;
