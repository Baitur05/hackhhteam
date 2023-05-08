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

const Favourite = ({ item }) => {
  return (
    <Card sx={{ width: 345, margin: "3%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Название: {item.name}
        </Typography>
      </CardContent>
      <Link to={`/onecompany/${item.id}`}>
        <Button size="small">see</Button>
      </Link>
    </Card>
  );
};

export default Favourite;
