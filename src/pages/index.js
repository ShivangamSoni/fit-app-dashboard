import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default Routing;
