import { Grid } from "@mui/material";
import * as React from "react";
// import "./LoginPage.css";
import { Header } from "../../../header/components/Header/header";
import { LoginForm } from "../LoginForm/loginForm";

export const LoginPage = ({ props }) => {
  return (
    <Grid
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      style={{ height: "100vh" }}
    >
      <Header />
      <LoginForm />
    </Grid>
  );
};
