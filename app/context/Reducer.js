import React from 'react';

const ACTION_TYPE = {
  SET_USER: 'SET_USER',
  REMOVE_USER: 'REMOVE_USER',
  SET_THEME: 'SET_THEME',
  SET_ERROR: 'SET_ERROR',
  REMOVE_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING',
};

const createAction = (type, payload) => {
  type, payload;
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        user: {...action.payload},
        isLoading: false,
      };
    case ACTION_TYPE.REMOVE_USER:
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    case ACTION_TYPE.SET_THEME:
      return {
        ...state,
        isDark: {...action.payload},
        isLoading: false,
      };
    case ACTION_TYPE.SET_ERROR:
      return {
        ...state,
        error: {...action.payload},
        isLoading: false,
      };
    case ACTION_TYPE.REMOVE_ERROR:
      return {
        ...state,
        error: null,
        isLoading: false,
      };

    default:
      state;
  }
};

export {ACTION_TYPE, createAction, reducerFunction};
