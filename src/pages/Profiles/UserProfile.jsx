import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useProfile } from "../../context/ProfileContextProvider";

const UserProfiles = ({ prof }) => {
  const {} = useProfile();
  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography>Имя: {prof?.first_name}</Typography>
          <Typography>Фамилия: {prof?.last_name}</Typography>
          <Typography>Почта: {prof?.email}</Typography>
          <Typography>образование: {prof?.education}</Typography>
        </Box>
        <Link to={`/editprofile/${prof?.id}`}>
          <Button sx={{ color: "#ae3559" }}>Edit</Button>
        </Link>
      </Box>
    </div>
  );
};

export default UserProfiles;
