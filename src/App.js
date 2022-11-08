import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import theme from "./components/globalStyles/theme";
import { BrowserRouter } from "react-router-dom";
import  LoginProvider  from "./context/LoginContext";
import { useState } from "react";

function App() {
  return (
    <LoginProvider>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </LoginProvider>
  );
}

export default App;
