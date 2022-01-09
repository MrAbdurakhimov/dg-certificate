import users from "../database/users.json";

const findUser = (email) => {
  const user = users.find((user) => user.email === email);
  return user;
};

export { findUser };
