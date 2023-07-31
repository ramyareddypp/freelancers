import { Grid } from "@mui/material";
import * as React from "react";
import { Header } from "../../header/components/Header/header";

export const ForgotPassword = ({ props }) => {
  return (
    <Grid
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      style={{ height: "100vh" }}
    >
      <Header />
      <div>Please contact your admin to reset your password</div>
    </Grid>
  );
};
