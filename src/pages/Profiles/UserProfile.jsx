import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useProfile } from "../../context/ProfileContextProvider";

const UserProfiles = ({ prof }) => {
  const {} = useProfile();
  const style = {
    m: "30px",
    // border: "3px grey",
    fontSize: 26,
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography sx={style}>Личная Информация:</Typography>
          <Typography sx={style}>Имя: {prof?.first_name}</Typography>
          <Typography sx={style}>Фамилия: {prof?.last_name}</Typography>
          <Typography sx={style}>Почта: {prof?.email}</Typography>
          <Typography sx={style}>Почта: {prof?.phone_number}</Typography>

          <Typography sx={style}>образование: {prof?.education}</Typography>
          <Typography sx={style}>Почта: {prof?.experience}</Typography>
        </Box>
        <Link to={`/editprofile/${prof?.id}`}>
          <Button sx={{ color: "black" }}>Edit</Button>
        </Link>
      </Box>
    </div>
  );
};

export default UserProfiles;
