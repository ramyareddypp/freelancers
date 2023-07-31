import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ForgotPassword } from "../../../forgotPassword/components/forgotPassword";
import { LoginPage } from "../../../login/components/LoginPage/loginPage";
import { LOGIN_PATH, FORGOT_PASSWORD } from "../../constants";

export const ROUTER = createBrowserRouter([
  {
    path: LOGIN_PATH,
    element: <LoginPage />,
  },
  {
    path: FORGOT_PASSWORD,
    element: <ForgotPassword />
  },
]);
