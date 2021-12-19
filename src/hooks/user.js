import { useEffect, useState } from "react";

import auth_api from "api/auth";
import users_api from "api/users";

export const useUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => setUser(await auth_api.getCurrentUser()))();
  }, []);

  return user;
};

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => setUsers(await users_api.getUsers()))();
  }, []);

  return users;
};
