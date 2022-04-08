import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import {
  CreateNewPlaceholder,
  Details,
  Home,
  NewModal,
  Search,
  Search2,
  SignIn,
  SignUp,
  Splash,
} from '../../Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab from '../../components/Tab';

const AuthStack = createNativeStackNavigator();
const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const AppScreens = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="Home"
        component={DashboardStackScreens}
        options={{
          tabBarButton: props => <Tab icon="home" label="Note" {...props} />,
        }}
      />
      <Tabs.Screen
        name="Report"
        component={DashboardStackScreens}
        options={{
          tabBarButton: props => (
            <Tab icon="file-text" label="Note" {...props} />
          ),
        }}
      />
      <Tabs.Screen
        name="Add"
        component={CreateNewPlaceholder}
        options={{
          tabBarButton: props => <Tab icon="plus" label="Create" {...props} />,
        }}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('CreateNew');
          },
        })}
      />
      <Tabs.Screen
        name="Data"
        component={ResourceStackScreens}
        options={{
          tabBarButton: props => (
            <Tab icon="search" label="Search" {...props} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ResourceStackScreens}
        options={{
          tabBarButton: props => <Tab icon="user" label="Profile" {...props} />,
        }}
      />
    </Tabs.Navigator>
  );
};

const DashboardStack = createNativeStackNavigator();
const DashboardStackScreens = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={Home} />
      <DashboardStack.Screen name="Details" component={Details} />
    </DashboardStack.Navigator>
  );
};

const ResourceStack = createNativeStackNavigator();
export const ResourceStackScreens = () => {
  return (
    <ResourceStack.Navigator screenOptions={{headerShown: false}}>
      <ResourceStack.Screen name="Home" component={Search2} />
      <ResourceStack.Screen name="Search" component={Search} />
      <ResourceStack.Screen name="Details" component={Details} />
    </ResourceStack.Navigator>
  );
};

export {AuthStackScreens, AppScreens};
