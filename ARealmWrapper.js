import {View, Text, ActivityIndicator, Dimensions} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from './app/context/Authentication';
import {darkTheme, lightTheme} from './app/themes';
import {PrivateData, PublicData} from './app/context/RealmConfig';
import {Login} from './app/pages/authentication';
import AppStack from './app/pages/stacks/AppStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, ProjectScreen} from './app/pages';
import FarmersScreen from './app/pages/FarmersScreen';
import AuthStack from './app/pages/stacks/AuthStack';
import BottomNav from './app/navigation/bottomNav';
import {LightSpeedInLeft} from 'react-native-reanimated';

const {RealmProvider} = PrivateData;
const {RealmProvider: Public} = PublicData;

const Stack = createNativeStackNavigator();
const {width, height} = Dimensions.get('window');

const ARealmWrapper = () => {
  const {
    state: {user, loading},
  } = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,,0.6)',
          padding: 40,
        }}>
        <View
          style={{
            width: width / 2,
            height: height / 2,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 40,
          }}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    );
  }
  return (
    <NavigationContainer theme={lightTheme}>
      {user ? (
        <RealmProvider sync={{user, partitionValue: user.id}}>
          <Public sync={{user, partitionValue: 'PUBLIC'}}>
            {/* <AppStack /> */}
            <BottomNav />
          </Public>
        </RealmProvider>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default ARealmWrapper;
