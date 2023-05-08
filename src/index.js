import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";

import { App } from "./App";
import { store } from "./redux/store";
import AuthContextProvider from "./context/AuthContextProvider";
import ProfileContextProvider from "./context/ProfileContextProvider";
import CompanyContextProvider from "./context/CompanyContextProvider";
import ResumeContextProvider from "./context/ResumeContextProvider";
import VacancyContextProvider from "./context/VacancyContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Router>
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProfileContextProvider>
          <CompanyContextProvider>
            <ResumeContextProvider>
              <VacancyContextProvider>
                <Provider store={store}>
                  <App />
                </Provider>
              </VacancyContextProvider>
            </ResumeContextProvider>
          </CompanyContextProvider>
        </ProfileContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
  // </Router>
);
