import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DataPages from '../../pages/DataPages';
import BottomSheet from '../../components/BottomSheet';

const Stack = createNativeStackNavigator();

const FarmerStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={DataPages.Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Create" component={DataPages.Create} />
      <Stack.Screen name="Detail" component={DataPages.Detail} />
      <Stack.Screen name="Search" component={DataPages.Search} />
      <Stack.Screen name="Main Menu" component={BottomSheet} />
    </Stack.Navigator>
  );
};

export default FarmerStack;

const styles = StyleSheet.create({});
