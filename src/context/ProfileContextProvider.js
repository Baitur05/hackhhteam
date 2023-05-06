import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PROFILE } from "../api/Api";

export const profileContext = createContext();

export const useProfile = () => useContext(profileContext);

const INIT_STATE = {
  ProfilesArray: [],
  oneProfile: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PROFILES":
      return {
        ...state,
        ProfilesArray: action.payload,
      };
    case "GET_ONE_PROFILE":
      return { ...state, oneProfile: action.payload };
    default:
      return state;
  }
}

const ProfileContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  async function getProfiles() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `${API_PROFILE}${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_PROFILES",
        payload: res.data,
      });
    } catch (error) {}
  }

  async function getOneProfile(id) {
    // console.log(state.);

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API_PROFILE}${id}/`, config);
      dispatch({
        type: "GET_ONE_PROFILE",
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  async function editProfile(id, profile) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(`${API_PROFILE}${id}/`, profile, config);
      getProfiles();
      navigate("/profile");
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  const value = {
    profiles: state.ProfilesArray,
    oneProfile: state.oneProfile,
    getProfiles,
    getOneProfile,
    editProfile,
  };
  return (
    <profileContext.Provider value={value}>{children}</profileContext.Provider>
  );
};

export default ProfileContextProvider;
