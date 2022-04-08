import {View, Text} from 'react-native';
import React from 'react';
import localStore from './utils/Store';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreens from './navigation/Stacks';
import RealmInit from './context/RealmInit';

export default AppInit = () => {
  const initialState = {
    isLoading: true,
    user: {
      name: 'Ray Mica',
      customData: {designation: 'magomen'},
    },
  };
  const [state, setState] = React.useState(initialState);
  React.useEffect(() => {
    setTimeout(() => {
      setState({...state, isLoading: false});
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <RealmInit user={state.user}>
        <RootStackScreens state={state} />
      </RealmInit>
    </NavigationContainer>
  );
};
