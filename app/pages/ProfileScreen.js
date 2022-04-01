import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useAuth} from '../context/Authentication';
import colors from '../styles/colors';

const Profile = () => {
  const {signOut} = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
      }}>
      <Pressable
        onPress={() => signOut()}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 30,
          paddingVertical: 10,
          backgroundColor: colors.darkBlue,
        }}>
        <Text style={{color: colors.white, fontSize: 22}}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
