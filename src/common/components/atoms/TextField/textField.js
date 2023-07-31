import * as React from "react";
import { TextField as MUITextField } from "@mui/material";

export const TextField = ({ ...props }) => {
  const textFieldVariant = props?.variant ?? "outlined";
  return <MUITextField variant={textFieldVariant} {...props} />;
};
