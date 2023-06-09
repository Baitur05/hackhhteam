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
    is_looking_for_job: "",
    gender: "",
    salary: "",

    about_me: "",
    education: "",
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
    formData.append("is_looking_for_job", resume.is_looking_for_job);
    formData.append("gender", resume.gender);
    formData.append("salary", resume.salary);

    formData.append("about_me", resume.about_me);
    formData.append("education", resume.education);

    addResume(formData);
  }
  return (
    <div>
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="Имя"
        variant="outlined"
        fullWidth
        name="first_name"
        value={resume.first_name}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="Фамилия"
        variant="outlined"
        fullWidth
        name="last_name"
        value={resume.last_name}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="Заголовок"
        variant="outlined"
        fullWidth
        name="title"
        value={resume.title}
        onChange={handleChange}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Специализация</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={resume.specialization}
          name="specialization"
          label="specialization"
          onChange={handleChange}
        >
          <MenuItem value={1}>react</MenuItem>
          <MenuItem value={2}>Автомобильный бизнес</MenuItem>
          <MenuItem value={3}>Административный персонал</MenuItem>
          <MenuItem value={4}>Безопасность</MenuItem>
          <MenuItem value={5}>Информационные технологии</MenuItem>
          <MenuItem value={6}>Высший и средний менеджмент</MenuItem>
        </Select>
      </FormControl>
      {/* ////////////////////////// */}
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="Город"
        variant="outlined"
        fullWidth
        name="city"
        value={resume.city}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="Местоположение"
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
        label="Номер телефона"
        variant="outlined"
        fullWidth
        name="phone"
        value={resume.phone}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="краткое описание"
        variant="outlined"
        fullWidth
        name="summary"
        value={resume.summary}
        onChange={handleChange}
      />
      {/* //////////////// */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Место работы</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={resume.place_of_work}
          name="place_of_work"
          label="place_of_work"
          onChange={handleChange}
        >
          <MenuItem value={1}>react</MenuItem>
          <MenuItem value={2}>Автомойщик(Автомобильный бизнес)</MenuItem>
          <MenuItem value={4}>
            Автослесарь, автомеханик(Автомобильный бизнес)
          </MenuItem>
          <MenuItem value={5}>Мастер-приемщик(Автомобильный бизнес</MenuItem>
          <MenuItem value={6}>
            Менеджер по продажам, менеджер по работе с клиентами(Автомобильный
            бизнес)
          </MenuItem>
          <MenuItem value={7}>
            Администратор(Административный персонал)
          </MenuItem>
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
          <MenuItem value={2}>кыргызский</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          is_looking_for_job
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={resume.is_looking_for_job}
          name="is_looking_for_job"
          label="is_looking_for_job"
          onChange={handleChange}
        >
          <MenuItem value={"yes"}>yes</MenuItem>
          <MenuItem value={"no"}>no</MenuItem>
          <MenuItem value={"considering"}>considering</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={resume.gender}
          name="gender"
          label="gender"
          onChange={handleChange}
        >
          <MenuItem value={"male"}>male</MenuItem>
          <MenuItem value={"female"}>female</MenuItem>
        </Select>
      </FormControl>

      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="salary"
        variant="outlined"
        fullWidth
        name="salary"
        value={resume.salary}
        onChange={handleChange}
      />
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">education</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={resume.education}
          name="education"
          label="education"
          onChange={handleChange}
        >
          <MenuItem value={1}>bachelor</MenuItem>
        </Select>
      </FormControl>
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
