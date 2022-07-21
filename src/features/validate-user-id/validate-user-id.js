import { useParams, Navigate } from "react-router-dom";

import { useUsersCtx } from "../../context/UsersContext";

import userExistInUsers from "../../utils/userExistInUsers";

const ValidateUserId = ({ children }) => {
  const { users } = useUsersCtx();
  const { userId } = useParams();

  if (!userExistInUsers(users, userId)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ValidateUserId;
