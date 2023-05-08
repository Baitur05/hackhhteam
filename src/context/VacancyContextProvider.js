import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_FAVORITES, API_VACANCY } from "../api/Api";
import jwt_decode from "jwt-decode";

export const vacancyContext = createContext();

export const useVacancy = () => useContext(vacancyContext);

const INIT_STATE = {
  vacancies: [],
  favorites: [],
  //   pages: 0,
  oneVacancy: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_VACANCIES":
      return {
        ...state,
        vacancies: action.payload.results,
        //   pages: Math.ceil(action.payload.count / 6),
      };
    case "GET_FAVOURITES":
      return {
        ...state,
        favorites: action.payload.results,
        //   pages: Math.ceil(action.payload.count / 6),
      };
    case "GET_ONE_VACANCY":
      return { ...state, oneVacancy: action.payload };
    default:
      return state;
  }
}

const VacancyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  async function getVacancies() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `http://35.203.22.39/vacancies/${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_VACANCIES",
        payload: res.data,
      });
    } catch (error) {}
  }

  async function getFavourites() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `${API_FAVORITES}favourite/${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_FAVOURITES",
        payload: res.data,
      });
    } catch (error) {}
  }

  async function getOneVacancy(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API_VACANCY}${id}/`, config);
      dispatch({
        type: "GET_ONE_VACANCY",
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

  async function deleteVacancy(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API_VACANCY}${id}/`, config);
      getVacancies();
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  async function addVacancy(vacancy) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API_VACANCY}create/`, vacancy, config);
      console.log(res.data);
      navigate("/vacancy");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  async function addFavourite(favourite, id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(
        `${API_FAVORITES}favourite/${id}/post/`,
        favourite,
        config
      );
      console.log(res.data);
      navigate("/favourites");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  const token = JSON.parse(localStorage.getItem("token"));
  const Authorization = `Bearer ${token.access}`;
  const decoded = jwt_decode(Authorization);
  const userId = decoded.user_id;
  const value = {
    vacancies: state.vacancies,
    oneVacancy: state.oneVacancy,
    getVacancies,
    deleteVacancy,
    getOneVacancy,
    addVacancy,
    addFavourite,
    getFavourites,
    token,
    userId,
  };

  return (
    <vacancyContext.Provider value={value}>{children}</vacancyContext.Provider>
  );
};

export default VacancyContextProvider;
