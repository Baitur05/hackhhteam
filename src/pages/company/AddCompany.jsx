import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCompany } from "../../context/CompanyContextProvider";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import jwt_decode from "jwt-decode";

const AddCompany = () => {
  const { addCompany, getCompanies, companies, token, userEmail } =
    useCompany();
  //   const { userId } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [profilePage, setProfilePage] = useState(false);
  const Authorization = `Bearer ${token.access}`;
  const config = {
    headers: {
      Authorization,
    },
  };
  const decoded = jwt_decode(Authorization);
  const userId = decoded.user_id;
  // console.log(userId);
  const userE = userEmail;
  // console.log(userE);

  const [company, setCompany] = useState({
    name: "",
    description: "",
    company: "",
    city: "",
    location: "",
    user: userId,
    specialization: "",
  });
  console.log(company);

  useEffect(() => {
    getCompanies();
  }, []);
  useEffect(() => {
    getCompanies();
  }, [searchParams]);

  const handleChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    let formData = new FormData();
    formData.append("name", company.name);
    formData.append("description", company.description);
    formData.append("city", company.city);
    formData.append("location", company.location);
    formData.append("user", company.user);
    formData.append("specialization", company.specialization);
    addCompany(formData);
  }
  return (
    <div>
      {/* <TextField
        name="message"
        value={message.message}
        onChange={handleChange}
      /> */}
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="name"
        variant="outlined"
        fullWidth
        name="name"
        value={company.name}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="description"
        variant="outlined"
        fullWidth
        name="description"
        value={company.description}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="city"
        variant="outlined"
        fullWidth
        name="city"
        value={company.city}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="location"
        variant="outlined"
        fullWidth
        name="location"
        value={company.location}
        onChange={handleChange}
      />
      {/* <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="specialization"
        variant="outlined"
        fullWidth
        name="specialization"
        value={company.specialization}
        onChange={handleChange}
      /> */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">specialization</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={company.specialization}
          name="specialization"
          label="specialization"
          onChange={handleChange}
        >
          <MenuItem value={1}>React</MenuItem>
        </Select>
      </FormControl>
      {/* //////////////////////// */}
      <Button
        sx={{
          color: "black",
          background: "#ae3559",
          borderRadius: "60px",
          color: "#ffffff",
          cursor: "pointer",
          border: "none",
        }}
        variant="solid"
        type="submit"
        onClick={handleSave}
      >
        send
      </Button>
    </div>
  );
};

export default AddCompany;
