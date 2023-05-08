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
import { useResume } from "../../context/ResumeContextProvider";
import jwt_decode from "jwt-decode";
import { useVacancy } from "../../context/VacancyContextProvider";

const AddVacancy = () => {
  const { addVacancy, getVacancies, vacancies, token } = useVacancy();
  const [searchParams, setSearchParams] = useSearchParams();
  const [profilePage, setProfilePage] = useState(false);
  const Authorization = `Bearer ${token.access}`;
  const decoded = jwt_decode(Authorization);
  // console.log(decoded);
  const userId = decoded.user_id;
  // console.log(userId);
  const [vacancy, setVacancy] = useState({
    user: "",
    title: "",
    required_experience: "",
    contact_information: "",
    city: "",
    location: "",
    employment: "",
    what_do_we_offer: "",
    company: "",
    specialization: "",
  });
  console.log(vacancy);

  useEffect(() => {
    getVacancies();
  }, []);
  useEffect(() => {
    getVacancies();
  }, [searchParams]);

  const handleChange = (e) => {
    setVacancy({
      ...vacancy,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    let formData = new FormData();
    formData.append("user", vacancy.user);
    formData.append("title", vacancy.title);
    formData.append("required_experience", vacancy.required_experience);
    formData.append("contact_information", vacancy.contact_information);
    formData.append("city", vacancy.city);
    formData.append("location", vacancy.location);
    formData.append("employment", vacancy.employment);
    formData.append("what_do_we_offer", vacancy.what_do_we_offer);
    formData.append("company", vacancy.company);
    formData.append("specialization", vacancy.specialization);

    addVacancy(formData);
  }
  return (
    <div>
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="user"
        variant="outlined"
        fullWidth
        name="user"
        value={vacancy.user}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="title"
        variant="outlined"
        fullWidth
        name="title"
        value={vacancy.title}
        onChange={handleChange}
      />
      {/* ////////////////////////// */}

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          required_experience
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={vacancy.required_experience}
          name="required_experience"
          label="required_experience"
          onChange={handleChange}
        >
          <MenuItem value={"no_experience"}>no_experience</MenuItem>
          <MenuItem value={"less_than_1_year"}>less_than_1_year</MenuItem>
          <MenuItem value={"1_3_years"}>1_3_years</MenuItem>
          <MenuItem value={"3_6_years"}>3_6_years</MenuItem>
          <MenuItem value={"more_than_6_years "}>more_than_6_years </MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="contact_information"
        variant="outlined"
        fullWidth
        name="contact_information"
        value={vacancy.contact_information}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="city"
        variant="outlined"
        fullWidth
        name="city"
        value={vacancy.city}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="location"
        variant="outlined"
        fullWidth
        name="location"
        value={vacancy.location}
        onChange={handleChange}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">employment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={vacancy.employment}
          name="employment"
          label="employment"
          onChange={handleChange}
        >
          <MenuItem value={"full-time"}>full-time</MenuItem>
          <MenuItem value={"part-time"}>part-time</MenuItem>
          <MenuItem value={"temporary"}>temporary</MenuItem>
          <MenuItem value={"volunteer"}>volunteer</MenuItem>
          <MenuItem value={"internship"}>internship</MenuItem>
          <MenuItem value={"freelance"}>freelance</MenuItem>
          <MenuItem value={"entrepreneurship"}>entrepreneurship </MenuItem>
        </Select>
      </FormControl>

      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="what_do_we_offer"
        variant="outlined"
        fullWidth
        name="what_do_we_offer"
        value={vacancy.what_do_we_offer}
        onChange={handleChange}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">company</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={vacancy.company}
          name="company"
          label="company"
          onChange={handleChange}
        >
          <MenuItem value={3}>Positive Technologies</MenuItem>
          <MenuItem value={4}>Infosecurity</MenuItem>
          <MenuItem value={5}>Jet Infosystems</MenuItem>
          <MenuItem value={6}>Wargaming.net</MenuItem>
          <MenuItem value={7}>Ubisoft</MenuItem>
          <MenuItem value={8}>Naughty Dog</MenuItem>
          <MenuItem value={9}>Google</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">specialization</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={vacancy.specialization}
          name="specialization"
          label="specialization"
          onChange={handleChange}
        >
          <MenuItem value={1}>react</MenuItem>
        </Select>
      </FormControl>
      {/* //////////////// */}
      {/* ////////////////// */}

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

export default AddVacancy;
