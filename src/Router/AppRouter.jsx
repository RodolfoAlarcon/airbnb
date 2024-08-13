import { Route, Routes } from "react-router-dom";
import { Home } from "../Views/Screens/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
