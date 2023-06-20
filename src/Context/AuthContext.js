import React, { createContext, useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};
