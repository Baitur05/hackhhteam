import { Grid, Typography } from "@mui/material";
import { bgcolor, Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import UserProfiles from "./UserProfile";
import { useProfile } from "../../context/ProfileContextProvider";

const Profiles = () => {
  const { getProfiles, profiles, editProfile } = useProfile();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  useEffect(() => {
    getProfiles();
  }, []);
  useEffect(() => {
    getProfiles();
  }, [searchParams]);
  console.log(profiles);

  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  return (
    <Box>
      <Box
        sx={{
          height: "100px",
          bgcolor: "#938888",
          display: "flex",
          //  justifyContent: "center",
          alignItems: "end",
          p: "0 0 0 200px ",
        }}
      >
        <Typography variant="h3" component="h3">
          Профиль
        </Typography>
      </Box>

      <Box sx={{ height: "1400px", p: 2, borderRadius: 5, bgcolor: "white" }}>
        {profiles
          ? profiles.map((prof) => <UserProfiles key={prof.id} prof={prof} />)
          : console.log("something wrong")}
      </Box>

      <UserProfiles />
    </Box>
  );
};

export default Profiles;
