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

const AddResumes = () => {
  const { addResume, getResumes, resumes, token } = useResume();
  const [searchParams, setSearchParams] = useSearchParams();
  const [profilePage, setProfilePage] = useState(false);
  const Authorization = `Bearer ${token.access}`;
  const decoded = jwt_decode(Authorization);
  // console.log(decoded);
  const userId = decoded.user_id;
  // console.log(userId);
  const [resume, setResume] = useState({
    user: userId,
    first_name: "",
    last_name: "",
    title: "",
    specialization: "",
    city: "",
    location: "",
    birthday: "",
    phone: "",
    summary: "",
    place_of_work: "",
    employment: "",
    schedule: "",
    work_experience: "",
    native_language: "",
    about_me: "",
  });
  console.log(resume);

  useEffect(() => {
    getResumes();
  }, []);
  useEffect(() => {
    getResumes();
  }, [searchParams]);

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    let formData = new FormData();
    formData.append("user", resume.user);
    formData.append("first_name", resume.first_name);
    formData.append("last_name", resume.last_name);
    formData.append("title", resume.title);
    formData.append("specialization", resume.specialization);
    formData.append("city", resume.city);
    formData.append("location", resume.location);
    formData.append("birthday", resume.birthday);
    formData.append("phone", resume.phone);
    formData.append("summary", resume.summary);
    formData.append("place_of_work", resume.place_of_work);
    formData.append("employment", resume.employment);
    formData.append("schedule", resume.schedule);
    formData.append("work_experience", resume.work_experience);
    formData.append("native_language", resume.native_language);
    formData.append("about_me", resume.about_me);

    addResume(formData);
  }
  return (
    <div>
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="first_name"
        variant="outlined"
        fullWidth
        name="first_name"
        value={resume.first_name}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="last_name"
        variant="outlined"
        fullWidth
        name="last_name"
        value={resume.last_name}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="title"
        variant="outlined"
        fullWidth
        name="title"
        value={resume.title}
        onChange={handleChange}
      />
      {/* <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="specialization"
        variant="outlined"
        fullWidth
        name="specialization"
        value={resume.specialization}
        onChange={handleChange}
      /> */}
      {/* //////////// */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">specialization</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={resume.specialization}
          name="specialization"
          label="specialization"
          onChange={handleChange}
        >
          <MenuItem value={1}>react</MenuItem>
        </Select>
      </FormControl>
      {/* ////////////////////////// */}
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="city"
        variant="outlined"
        fullWidth
        name="city"
        value={resume.city}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="location"
        variant="outlined"
        fullWidth
        name="location"
        value={resume.location}
        onChange={handleChange}
      />
      <input
        type="date"
        name="birthday"
        value={resume.birthday}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="phone"
        variant="outlined"
        fullWidth
        name="phone"
        value={resume.phone}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="summary"
        variant="outlined"
        fullWidth
        name="summary"
        value={resume.summary}
        onChange={handleChange}
      />
      {/* <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="place_of_work"
        variant="outlined"
        fullWidth
        name="place_of_work"
        value={resume.place_of_work}
        onChange={handleChange}
      /> */}
      {/* //////////////// */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">place_of_work</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={resume.place_of_work}
          name="place_of_work"
          label="place_of_work"
          onChange={handleChange}
        >
          <MenuItem value={1}>react: react (react)</MenuItem>
        </Select>
      </FormControl>
      {/* ////////////////// */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">employment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={resume.employment}
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">schedule</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={resume.schedule}
          name="schedule"
          label="schedule"
          onChange={handleChange}
        >
          <MenuItem value={"full-day"}>full-day</MenuItem>
          <MenuItem value={"part-day"}>part-day</MenuItem>
          <MenuItem value={"shift-work"}>shift-work</MenuItem>
          <MenuItem value={"flexible-schedule"}>flexible-schedule</MenuItem>
          <MenuItem value={"remote-work"}> remote-work</MenuItem>
          <MenuItem value={"night-shift"}>night-shift</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="work_experience"
        variant="outlined"
        fullWidth
        name="work_experience"
        value={resume.work_experience}
        onChange={handleChange}
      />
      {/* <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="native_language"
        variant="outlined"
        fullWidth
        name="native_language"
        value={resume.native_language}
        onChange={handleChange}
      /> */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">native_language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={resume.native_language}
          name="native_language"
          label="native_language"
          onChange={handleChange}
        >
          <MenuItem value={1}>русский</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="about_me"
        variant="outlined"
        fullWidth
        name="about_me"
        value={resume.about_me}
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

export default AddResumes;
