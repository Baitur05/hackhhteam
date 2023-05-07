import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_RESUMES } from "../api/Api";

export const resumeContext = createContext();

export const useResume = () => useContext(resumeContext);

const INIT_STATE = {
  resumes: [],
  //   pages: 0,
  oneResume: {},
  //   categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_RESUMES":
      return {
        ...state,
        resumes: action.payload.results,
        //   pages: Math.ceil(action.payload.count / 6),
      };
    //  case "GET_CATEGORIES":
    //    return { ...state, categories: action.payload };
    case "GET_ONE_RESUME":
      return { ...state, oneResume: action.payload };
    default:
      return state;
  }
}

const ResumeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  async function getResumes() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `${API_RESUMES}${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_RESUMES",
        payload: res.data,
      });
    } catch (error) {}
  }

  async function getOneResume(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API_RESUMES}${id}/`, config);
      dispatch({
        type: "GET_ONE_RESUME",
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  //   async function editProduct(id, product) {
  //     try {
  //       const token = JSON.parse(localStorage.getItem("token"));
  //       const Authorization = `Bearer ${token.access}`;
  //       const config = {
  //         headers: {
  //           Authorization,
  //         },
  //       };
  //       const res = await axios.patch(`${API_RESUMES}${id}/`, product, config);
  //       getResumes();
  //       navigate("/products");
  //     } catch (e) {
  //       console.log(e);
  //       setError(e);
  //     }
  //   }

  async function deleteResume(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API_RESUMES}${id}/`, config);
      getResumes();
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  async function addResume(product) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API_RESUMES}`, product, config);
      console.log(res.data);
      // navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  const token = JSON.parse(localStorage.getItem("token"));

  const value = {
    resumes: state.resumes,
    oneResume: state.oneResume,
    getResumes,
    deleteResume,
    getOneResume,
    addResume,
    token,
  };

  return (
    <resumeContext.Provider value={value}>{children}</resumeContext.Provider>
  );
};

export default ResumeContextProvider;
