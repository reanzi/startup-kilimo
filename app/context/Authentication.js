import React from 'react';
import {Realm} from '@realm/react';
import {ACTION_TYPE, createAction, reducerFunction} from './Reducer';
import localStore from '../utils/Store';

// ?instance of Realm app
const appId = 'kazi-application-zpzdw';
const appConfig = {id: appId, timeout: 10000};

const app = new Realm.App(appConfig);

const AuthContext = React.createContext(null);

const AuthProvider = props => {
  const initialState = {
    isLoading: true,
    isDark: false,
    error: null,
    user: app.currentUser,
  };
  // const [state, setState] = React.useState(initilState)
  // const [user, setUser] = React.useState(app.currentUser);
  // const [loading, setLoading] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducerFunction, initialState);

  //   Functions
  const retrieveUser = async () => {
    try {
      const data = await localStore.retrieve();
      if (data !== null) dispatch(createAction(ACTION_TYPE.SET_USER, data));
      return null;
    } catch (error) {
      // dispatch(createAction(ACTION_TYPE.SET_ERROR, error.message));
      console.log('Failed to Retrieve: ', error.message);
    }
  };
  const signIn = (email, password) => {
    dispatch(createAction(ACTION_TYPE.SET_LOADING));
    const credentials = Realm.Credentials.emailPassword(email, password);
    app
      .logIn(credentials)
      .then(newUser => {
        localStore.store(newUser);
        dispatch(createAction(ACTION_TYPE.SET_USER, newUser));
      })
      .catch(err => {
        dispatch(createAction(ACTION_TYPE.SET_ERROR, err.message));
        console.error('Errored: ', err);
      });
    // .finally(() => setLoading(false));
  };
  const signUp = async (email, password) => {
    try {
      await app.emailPasswordAuth.registerUser({email, password});
    } catch (error) {
      dispatch(createAction(ACTION_TYPE.SET_ERROR, err.message));
      console.warn('Failed to signup: ', error.message);
    }
  };

  const signOut = async () => {
    dispatch(createAction(ACTION_TYPE.SET_LOADING));
    if (user == null) {
      dispatch(createAction(ACTION_TYPE.SET_ERROR, 'No user to LogOut'));
      return;
    }
    try {
      await user.logOut();
      localStore.emptyStore();
      dispatch(createAction(ACTION_TYPE.REMOVE_USER));
    } catch (error) {
      dispatch(createAction(ACTION_TYPE.SET_ERROR, err.message));
    }
  };

  React.useEffect(() => {
    retrieveUser();
  }, []);
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
