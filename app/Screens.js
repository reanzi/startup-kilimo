import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {AuthContext} from './context/AuthContect';

const alert = msg => Alert.alert(msg);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

const ScreenContainer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
export const Home = props => {
  return (
    <ScreenContainer>
      <Text>Master List Screen</Text>
      <Button
        title="React By Example"
        onPress={() => alert('Clicked Example')}
      />
      <Button
        title="React School"
        onPress={() => props.navigation.push('Details')}
      />
      <Button
        title="Drawer"
        onPress={() => props.navigation.navigate('Modal')}
      />
    </ScreenContainer>
  );
};

export const Details = ({navigation}) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
  </ScreenContainer>
);
export const Search = ({navigation}) => (
  <ScreenContainer>
    <Text>Search </Text>
    <Button title="Search Two" onPress={() => navigation.push('Search2')} />
  </ScreenContainer>
);
export const Search2 = ({navigation}) => {
  const auth = React.useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>Search 2 </Text>
      <Button title="Sign Out" onPress={() => auth.signOut()} />
    </ScreenContainer>
  );
};
export const Profile = () => (
  <ScreenContainer>
    <Text>Profile Screen</Text>
    <Button title="Drawer" onPress={() => alert('Clicked Drawer')} />
    <Button title="SignOut" onPress={() => alert('Clicked SignOUT')} />
  </ScreenContainer>
);
export const Splash = () => (
  <ScreenContainer>
    <ActivityIndicator size="large" />
    <Text>Loading</Text>
  </ScreenContainer>
);
export const SignIn = ({navigation}) => {
  const auth = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => auth.signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push('SignUp')}
      />
    </ScreenContainer>
  );
};
export const SignUp = ({navigation}) => (
  <ScreenContainer>
    <Text>SignUp Screen</Text>
    <Button title="Create Account" onPress={() => alert('Clicked SignUp')} />
    <Button title="Sign In" onPress={() => navigation.pop()} />
  </ScreenContainer>
);
export const Modal = ({navigation}) => (
  // <View style={[{flex: 1, backgroundColor: 'transparent'}]}>
  <View
    style={{
      width: '100%',
      backgroundColor: '#fff',
      opacity: 1,
      height: 300,
      position: 'absolute',
      right: 0,
      bottom: 0,
    }}>
    <Text>Modal Screen</Text>
    <Button title="Back to Home" onPress={() => navigation.pop()} />
  </View>
  // </View>
);

export const CreateNewPlaceholder = () => {
  return <View style={{flex: 1, backgroundColor: 'teal'}} />;
};
export const NewModal = () => {
  return <View style={{width: '100%', backgroundColor: 'red', height: 234}} />;
};
