import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import ProjectScreen from '../ProjectScreen';
import FarmersScreen from '../FarmersScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Projects" component={ProjectScreen} />
      <Stack.Screen name="Farmers" component={FarmersScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
