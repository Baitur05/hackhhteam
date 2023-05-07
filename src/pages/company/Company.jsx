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

const Company = ({ item }) => {
  return (
    <Card sx={{ width: 345, margin: "3%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Company;
