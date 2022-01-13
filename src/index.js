import React from "react";
import ReactDOM from "react-dom";
import Login from "./pages/Login/";
import Certificate from "./pages/Certificate/";
import "./styles/main.css";

import { ThemeProvider } from "@mui/system";
import { themeOptions } from "./theme/themeOptions";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Route } from "react-router-dom";
import CustomSwitch from "./utils/customSwitch";

let theme = createTheme({ ...themeOptions });

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CustomSwitch>
          <Route path="/" element={<Login />} />
          <Route path="/certificate/:catid" element={<Certificate />} />
        </CustomSwitch>
      </BrowserRouter>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
