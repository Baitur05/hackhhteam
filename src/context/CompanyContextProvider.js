import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_COMPANIES } from "../api/Api";

export const companyContext = createContext();

export const useCompany = () => useContext(companyContext);

const INIT_STATE = {
  companyArray: [],
  oneCompany: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COMPANIES":
      console.log("get companies");
      return {
        ...state,
        companiesArray: action.payload,
      };
    case "GET_ONE_COMPANY":
      console.log("one");
      return { ...state, oneCompany: action.payload };
    default:
      console.log("default");
      return state;
  }
}

const CompanyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  async function getCompanies() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `http://35.203.22.39/companies/${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_COMPANIES",
        payload: res.data,
      });
    } catch (error) {}
  }

  async function getOneCompany(id) {
    console.log(state.messages);

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API_COMPANIES}${id}/`, config);
      dispatch({
        type: "GET_ONE_COMPANY",
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  async function addCompany(company) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API_COMPANIES}create/`, company, config);
      console.log(res.data);
      getCompanies();
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  const token = JSON.parse(localStorage.getItem("token"));

  const value = {
    messages: state.messagesArray,
    oneCompany: state.oneCompany,
    getCompanies,
    //  deleteMessage,

    getOneCompany,
    //  editMessage,
    token,
    addCompany,
  };
  return (
    <companyContext.Provider value={value}>{children}</companyContext.Provider>
  );
};

export default CompanyContextProvider;
