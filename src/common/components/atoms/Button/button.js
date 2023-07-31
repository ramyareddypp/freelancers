import * as React from "react";
import { Button as MUIButton } from "@mui/material";

export const Button = ({ children, ...props }) => {
  const buttonVariant = props?.variant ?? "contained";
  return <MUIButton variant={buttonVariant} {...props}>{children}</MUIButton>;
};
