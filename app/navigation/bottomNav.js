import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProjectScreen, FarmersScreen} from '../pages';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';
import Tab from '../components/Tab';
import Profile from '../pages/ProfileScreen';
import FarmerStack from './Stacks/FarmerStack';
import DataPages from '../pages/DataPages';
import BottomSheet from '../components/BottomSheet';

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
        name="Resources"
        component={FarmerStack}
        options={{
          tabBarButton: props => <Tab icon="layers" label="Data" {...props} />,
        }}
      />
      <TabNav.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarButton: props => <Tab icon="user" label="ACCOUNT" {...props} />,
        }}
      />
      <TabNav.Screen
        name="Add"
        component={DataPages.Create}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarButton: props => (
            <Tab icon="chevron-up" label="Data" {...props} />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            // navigation.navigate('Create');
          },
        })}
      />
    </TabNav.Navigator>
  );
};

export default BottomNav;
