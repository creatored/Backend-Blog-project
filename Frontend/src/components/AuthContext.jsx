import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedLoggedIn = sessionStorage.getItem('loggedIn');
    const storedUsername = sessionStorage.getItem('username');
    if (storedLoggedIn === 'true') {
      setLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const login = () => {
    setLoggedIn(true);
    setUsername(user.username);
    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('username', );
  };
  const logout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem('loggedIn');
  };


  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
