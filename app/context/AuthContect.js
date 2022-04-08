import React from 'react';

export const AuthContext = React.createContext();

/**
import React from 'react';
import {Realm} from '@realm/react';

// ?instance of Realm app
const appId = 'kazi-application-zpzdw';
const appConfig = {id: appId, timeout: 10000};

const app = new Realm.App(appConfig);

const AuthContext = React.createContext(null);

const AuthProvider = props => {
const initialState = {
  isLoading: true,
  darkEnabled: false,
  error: null,
  user: app.currentUser
}
  const [state, setState] = React.useState(initilState)
  const [user, setUser] = React.useState(app.currentUser);
  const [loading, setLoading] = React.useState(false);

  // React.useEffect(() => {
  //   if (!user) {
  //     console.log('No user found, Please Login');
  //     return;
  //   }

  //   const config = {
  //     sync: {
  //       user,
  //       partitionValue: `user=${user.id}`,
  //     },
  //   };

  //   Realm.open(config)
  //     .then(userRealm => {
  //       realmRef.current = userRealm;
  //     })
  //     .catch(error => console.log('Realm Error: ', error.message));

  //   return () => {
  //     const userRealm = realmRef.current;
  //     if (userRealm) {
  //       userRealm.close();
  //       realmRef.current = null;
  //     }
  //   };
  // }, [user]);

  //   Functions
  const signIn = (email, password) => {
    setLoading(true);
    const credentials = Realm.Credentials.emailPassword(email, password);
    app
      .logIn(credentials)
      .then(newUser => setUser(newUser))
      .catch(err => console.error('Errored: ', err))
      .finally(() => setLoading(false));
  };
  const signUp = async (email, password) => {
    try {
      await app.emailPasswordAuth.registerUser({email, password});
    } catch (error) {
      console.warn('Failed to signup: ', error.message);
    }
  };

  const signOut = async () => {
    setLoading(true);
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      setLoading(false);
      return;
    }
    try {
      await user.logOut();
      setUser(null);
      setLoading(false);
    } catch (error) {
      console.log('SignOut Error: ', error.message);
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{signIn, signUp, signOut, state}}>
      {props.children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  const auth = React.useContext(AuthContext);
  if (auth == null) {
    throw new Error('useAuth() was called outside of AuthProvider');
  }
  return auth;
};

export {AuthProvider, useAuth};

 */
