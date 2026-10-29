import {createContext} from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const user = {
    name: "Nagham Muhammad",
    email: "nagham@gmail.com",
    age: 19,
    role: "React Frontend Developer",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
