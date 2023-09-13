import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Allroutes;
