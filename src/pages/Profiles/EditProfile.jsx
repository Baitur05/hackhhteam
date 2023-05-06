import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useProfile } from "../../context/ProfileContextProvider";

const EditProfile = () => {
  const { editProfile, oneProfile, getOneProfile } = useProfile();

  const [profile, setProfile] = useState(oneProfile);

  const params = useParams();

  useEffect(() => {
    function fetchOneProfile() {
      getOneProfile(params.id);
    }
    if (!params) {
      fetchOneProfile();
    }
  }, []);

  useEffect(() => {
    setProfile(oneProfile);
  }, [oneProfile]);

  console.log(oneProfile);
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  console.log(profile);
  function handleSave() {
    let formData = new FormData();
    formData.append("last_name", profile.last_name);
    formData.append("first_name", profile.first_name);
    formData.append("email", profile.email);
    formData.append("education", profile.education);
    editProfile(params.id, formData);
  }

  const style = {
    position: "absolute",
    top: "80%",
    left: "50%",
    bottom: "0%",
    transform: "translate(-50%, -50%)",
    //  heigth: 500,
    width: 500,
    bgcolor: "background.paper",
    //  border: "2px solid #000",
    boxShadow: 24,
    p: 0,
    borderRadius: "30px",
  };
  return (
    <div>
      <Box style={style}>
        <TextField
          sx={{ m: 0, width: "400px" }}
          id="standart-basic"
          label="last_name"
          variant="standard"
          fullWidth
          name="last_name"
          value={profile.last_name}
          onChange={handleChange}
        />
        <TextField
          sx={{ m: 3, width: "400px" }}
          id="standart-basic"
          label="first_name"
          variant="standard"
          fullWidth
          name="first_name"
          value={profile.first_name}
          onChange={handleChange}
        />
        <TextField
          sx={{ m: 3, width: "400px" }}
          id="standart-basic"
          label="email"
          variant="standard"
          fullWidth
          name="email"
          value={profile.email}
          onChange={handleChange}
        />
        <TextField
          sx={{ m: 3, width: "400px" }}
          id="standart-basic"
          label="education"
          variant="standard"
          fullWidth
          name="education"
          value={profile.education}
          onChange={handleChange}
        />
        <Button
          sx={{
            color: "black",
            background: "#ae3559",
            borderRadius: "60px",
            color: "#ffffff",
            cursor: "pointer",
            border: "none",
            margin: "20px",
          }}
          type="submit"
          onClick={handleSave}
        >
          Edit Message
        </Button>
      </Box>
    </div>
  );
};

export default EditProfile;
