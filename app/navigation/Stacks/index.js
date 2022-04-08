import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import {NewModal, Splash} from '../../Screens';
import {AppScreens, AuthStackScreens} from './Stacks';
import RealmInit from '../../context/RealmInit';

const RootStack = createNativeStackNavigator();

const RootStackScreens = ({state: {isLoading, user}}) => {
  return (
    <RootStack.Navigator
      mode="modal"
      screenOptions={{headerShown: false, animation: 'none'}}>
      {isLoading ? (
        <RootStack.Screen name="Loading" component={Splash} />
      ) : user ? (
        <RootStack.Screen name="App" component={AppScreens} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthStackScreens} />
      )}
      <RootStack.Screen
        name="CreateNew"
        component={NewModal}
        options={{animation: 'slide_from_bottom'}}
      />
    </RootStack.Navigator>
  );
};
export default RootStackScreens;
