const userExistInUsers = (users, id) => {
  const index = users.findIndex((user) => user.userId === id);
  return index !== -1;
};

export default userExistInUsers;
