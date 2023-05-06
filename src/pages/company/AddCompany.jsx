import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCompany } from "../../context/CompanyContextProvider";
import { useSearchParams } from "react-router-dom";

const AddCompany = () => {
  const { addCompany, getCompanies, companies, token } = useCompany();
  const [searchParams, setSearchParams] = useSearchParams();
  const [profilePage, setProfilePage] = useState(false);
  //   console.log(token);
  const [company, setCompany] = useState({
    name: "",
    company: "",
    city: "",
    location: "",
    user: token,
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
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="specialization"
        variant="outlined"
        fullWidth
        name="specialization"
        value={company.specialization}
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

export default AddCompany;
