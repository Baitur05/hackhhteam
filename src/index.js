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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Router>
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProfileContextProvider>
          <CompanyContextProvider>
            <ResumeContextProvider>
              <Provider store={store}>
                <App />
              </Provider>
            </ResumeContextProvider>
          </CompanyContextProvider>
        </ProfileContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
  // </Router>
);
