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
const Dammy = () => {
  return <BottomSheet />;
};

const CreateNewPlaceholder = () => (
  <View style={{flex: 1, backgroundColor: 'blue'}} />
);
const BottomNav = () => {
  const theme = useTheme();
  const [isOpen, setIsOPen] = React.useState(false);

  const HandleModal = () => {
    if (isOpen) {
      console.log('Opening Modal');
      return (
        <BottomSheet />
        // <View
        //   style={{
        //     flex: 1,
        //     backgroundColor: 'blue',
        //     width: '100%',
        //     height: 500,
        //     position: 'absolute',
        //     bottom: 0,
        //   }}>
        //   <Text>Modal</Text>
        // </View>
      );
    } else {
      return null;
    }
  };
  React.useEffect(() => {
    HandleModal();
  }, [isOpen]);
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
            console.log('Open Modal');
            setIsOPen(true);
            // navigation.navigate('Create');
          },
        })}
      />
    </TabNav.Navigator>
    // <View
    //   style={{flexDirection: 'row', position: 'absolute', right: 0, bottom: 0}}>
    //   <View style={{width: 30, height: 46, backgroundColor: 'teal'}} />
    // </View>
  );
};

export default BottomNav;
