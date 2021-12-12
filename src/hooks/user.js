import { useEffect, useState } from "react";

import auth_api from "api/auth";

export const useUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => setUser(await auth_api.getCurrentUser()))();
  }, []);

  return user;
};
