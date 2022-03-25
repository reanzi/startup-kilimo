import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

// REALM
import {PrivateData, PublicData} from './app/context/RealmConfig';

// SCREENS
import {HomeScreen, ProjectScreen} from './app/pages';
import {AuthProvider, useAuth} from './app/context/Authentication';
import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent';
import ARealmWrapper from './ARealmWrapper';

// Intiallize Realm
const {useRealm, useQuery, RealmProvider} = PublicData;

function AppWrapper() {
  if (!RealmProvider) {
    return null;
  }
  return (
    <AuthProvider>
      <ARealmWrapper />
    </AuthProvider>
  );
}

export default AppWrapper;
