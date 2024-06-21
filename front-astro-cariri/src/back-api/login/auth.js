// import axios from 'axios';
// import { API_URL } from '../api';
import { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState("");

  const signin = (id ,username, password, email) => {
    setUser({id, username, password, email});

    return;
  };

  const sigout = () => {
    setUser("");
  };

  return <AuthContext.Provider value={{user, signed: !!user, signin, sigout}}>{children}</AuthContext.Provider>;
};
