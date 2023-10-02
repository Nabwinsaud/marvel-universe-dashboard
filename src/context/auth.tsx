/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from "react";

//* fake auth
interface UserData {
  name: string;
}

const UserContext = createContext<{
  user: UserData | null;
  setUser: (user: UserData | null) => void;
}>({
  user: null,
  setUser: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

export default function UserProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    setUser(JSON.parse((localStorage.getItem("user") as string) ?? null));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
