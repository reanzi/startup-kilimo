import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EncryptedStorage from 'react-native-encrypted-storage';

// Screens
import {
  SignIn,
  SignUp,
  Profile,
  Home,
  Search,
  Search2,
  Details,
  Splash,
  Modal,
  CreateNewPlaceholder,
  NewModal,
} from './app/Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from './app/context/AuthContect';

const AuthStack = createNativeStackNavigator();
const AuthScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabScreen = () => (
  <Tabs.Navigator screenOptions={{headerShown: false}}>
    <Tabs.Screen
      name="HomeStack"
      component={HomeStackScreen}
      options={{tabBarIcon: () => <Feather name="home" size={24} />}}
    />
    <Tabs.Screen
      name="Menu"
      component={CreateNewPlaceholder}
      options={{
        tabBarIcon: () => <Feather name="chevron-up" size={24} />,
      }}
      listeners={({navigation}) => ({
        tabPress: event => {
          event.preventDefault();
          navigation.navigate('CreateNew');
        },
      })}
    />
    <Tabs.Screen
      name="SearchStack"
      component={SearchStackScreen}
      options={{
        tabBarIcon: () => <Feather name="search" size={24} />,
      }}
    />
    {/* <Tabs.Screen name="Details" component={Details} options={{}} /> */}
  </Tabs.Navigator>
);

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Details" component={Details} />
  </HomeStack.Navigator>
);
const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);
const SearchStack = createNativeStackNavigator();
const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [error, SetError] = React.useState(null);

  // Context
  const AuthFunctions = React.useMemo(() => {
    return {
      recover: async () => {
        setIsLoading(true);
        const token = await localStore.retrieve();
        setIsLoading(false);
        setUserToken(token);
      },
      signIn: async () => {
        setIsLoading(true);
        const token = 'dsjfaskqq293  sdkfsd';
        setUserToken(token);
        await localStore.store('@token', token);
        setIsLoading(false);
      },
      signUp: async () => {
        const token = 'dsjfaskqq293  sdkfsd';
        setUserToken(token);
        setIsLoading(false);
        await localStore.store('@token', token);
      },
      signOut: async () => {
        setUserToken(null);
        await localStore.emptyStore();
        setIsLoading(false);
      },
    };
  }, []);

  React.useEffect(() => {
    // const done = setTimeout(() => {
    //   setIsLoading(false);
    //   setUserToken(await localStore.retrieve())
    AuthFunctions.recover();
    // }, 2000);
    // return () => clearTimeout(done);
  }, []);

  // if (isLoading) return <Splash />;
  return (
    <AuthContext.Provider value={AuthFunctions}>
      <RootStack.Navigator
        mode="modal"
        screenOptions={{headerShown: false, animation: 'none'}}>
        {isLoading ? (
          <RootStack.Screen name="Loading" component={Splash} />
        ) : userToken ? (
          <RootStack.Screen name="App" component={TabScreen} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthScreen} />
        )}
        <RootStack.Screen
          name="Modal"
          component={Modal}
          options={{animation: 'slide_from_bottom'}}
        />
        <RootStack.Screen
          name="CreateNew"
          component={Modal}
          options={{animation: 'slide_from_bottom'}}
        />
      </RootStack.Navigator>
    </AuthContext.Provider>
  );
};

const localStore = {
  retrieve: async () => {
    try {
      const data = await EncryptedStorage.getItem('@token');
      if (data !== null) return data;
      return null;
    } catch (error) {
      console.log('Failed to Retrieve: ', error.message);
    }
  },
  store: async (key, data) => {
    try {
      await EncryptedStorage.setItem(key, data);
    } catch (error) {
      console.log('Failed to Store: ', error.message);
    }
  },
  emptyStore: async () => {
    try {
      await EncryptedStorage.clear();
    } catch (error) {
      console.log('Failed to Clear: ', error.message);
    }
  },
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
