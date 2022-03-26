import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProjectScreen, FarmersScreen} from '../pages';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';
import Tab from '../components/Tab';

const TabNav = createBottomTabNavigator();

const BottomNav = () => {
  const theme = useTheme();

  return (
    <TabNav.Navigator
      screenOptions={{tabBarHideOnKeyboard: true, headerShown: false}}>
      <TabNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: props => <Tab icon="home" label="Home" {...props} />,
        }}
      />
      <TabNav.Screen
        name="Projects"
        component={ProjectScreen}
        options={{
          tabBarButton: props => (
            <Tab icon="file-text" label="Note" {...props} />
          ),
        }}
      />
      <TabNav.Screen
        name="Reports"
        component={FarmersScreen}
        options={{
          tabBarButton: props => (
            <Tab icon="layers" label="Reports" {...props} />
          ),
        }}
      />
      <TabNav.Screen
        name="Farmers"
        component={FarmersScreen}
        options={{
          tabBarButton: props => <Tab icon="user" label="ACCOUNT" {...props} />,
        }}
      />
    </TabNav.Navigator>
  );
};

export default BottomNav;
