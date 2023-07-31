import * as React from "react";
import './header.css';
import { Grid } from "@mui/material";
import logo from "../../../Freelancer.svg";

export const Header = () => {
  return (
    <Grid>
      <img src={logo} alt="logo" className="logo"/>
    </Grid>
  );
};
