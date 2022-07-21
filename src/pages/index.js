import { Routes, Route } from "react-router-dom";
import ValidateUserId from "../features/validate-user-id/validate-user-id";
import Dashboard from "./dashboard/dashboard";
import Nutrition from "./nutrition/nutrition";
import Workout from "./workout/workout";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/:userId/nutrition"
        element={
          <ValidateUserId>
            <Nutrition />
          </ValidateUserId>
        }
      />
      <Route
        path="/:userId/workout"
        element={
          <ValidateUserId>
            <Workout />
          </ValidateUserId>
        }
      />
    </Routes>
  );
};

export default Routing;
