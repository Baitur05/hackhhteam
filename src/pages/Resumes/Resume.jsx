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

const Resume = ({ item }) => {
  return (
    <Card sx={{ width: 345, margin: "3%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.work_experience}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.is_looking_for_job}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Resume;
