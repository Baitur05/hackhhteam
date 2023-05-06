import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";

import { App } from "./App";
import { store } from "./redux/store";
import AuthContextProvider from "./context/AuthContextProvider";
import ProfileContextProvider from "./context/ProfileContextProvider";
import CompanyContextProvider from "./context/CompanyContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Router>
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProfileContextProvider>
          <CompanyContextProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </CompanyContextProvider>
        </ProfileContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
  // </Router>
);
