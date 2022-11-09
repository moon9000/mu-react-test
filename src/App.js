import * as React from "react";
import { HomeUsersPage } from "./pages/home/users/HomeUsersPage";
import { LoginPage } from "./pages/login/LoginPage";

function App() {
  const currentLocation = window.location.href;
  return currentLocation.includes("/home/users") ? (
    <HomeUsersPage />
  ) : (
    <LoginPage />
  );
}

export default App;
