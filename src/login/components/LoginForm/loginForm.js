import * as React from "react";
import './loginForm.css';   
import Card from "@mui/material/Card";
import { TextField } from "../../../common/components/atoms/TextField/textField";
import { Button } from "../../../common/components/atoms/Button/button";

export const LoginForm = ({ props }) => {
  return <Card className="loginFomCard" bg>
    <TextField label="Username" placeholder="Username"/>
    <TextField label="Password" placeholder="password" type="password"/>
    <Button>{"Login"}</Button>
  </Card>;
};
