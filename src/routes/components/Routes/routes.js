import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { LoginForm } from "../../../login/components/LoginForm/loginForm";
import { LOGIN_PATH } from "./constants";

export const ROUTER = createBrowserRouter([
  {
    path: LOGIN_PATH,
    element: <LoginForm />,
  },
  {
    path: 'test',
    element: <div>test</div>
  }
]);
