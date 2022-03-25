import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useAuth} from '../../context/Authentication';

const Login = () => {
  const [email, setEmail] = React.useState('raymond@inc.com');
  const [password, setPassword] = React.useState('12345678');
  const {signIn} = useAuth();

  const handleSubmit = async () => {
    try {
      await signIn(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('Imegoma: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Login Page</Text>
      <View
        style={{
          width: '90%',
          padding: 20,
          marginTop: 30,
          backgroundColor: '#e5e5e5',
        }}>
        <TextInput
          placeholder="Email Address"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          placeholder="Password Address"
          value={password}
          onChangeText={value => setPassword(value)}
        />

        <Pressable
          onPress={handleSubmit}
          style={{
            paddingVertical: 10,
            marginTop: 20,
            backgroundColor: 'teal',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
