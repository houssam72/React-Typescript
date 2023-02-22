import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  //It allows us use AuthUser type and the null type becuse the user can be null
  //    or auth User
  const handleLogin = () => {
    setUser({
      name: "Vishwas",
      email: "vishwas@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* intteligence helps us tu use ? Automaticaly in our object */}
      <div>User name is {user?.name}</div>
      <div>User name is {user?.email}</div>
    </div>
  );
};
