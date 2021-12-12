import { useUser } from "hooks/user";

export const Me = () => {
  const user = useUser();

  return (
    <div>
      <h2>me</h2>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
};
