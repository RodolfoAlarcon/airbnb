import { Route, Routes } from "react-router-dom";
import { Home } from "../Views/Screens/Home";
import { Login } from "../Views/Auth/Login";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
