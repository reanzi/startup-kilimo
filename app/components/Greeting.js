import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../constants/Colors';

const Greeting = ({name}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    greet: {},
    greet_text: {
      fontSize: 33,
      fontWeight: '400',
      color: 'black',
    },
    avatar: {
      width: 120,
      height: 80,
      backgroundColor: '#E6E6E6',
      borderRadius: 20,
    },
    status: {
      marginTop: 10,
      paddingRight: 60,
    },
  });
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.greet}>
          <Text style={styles.greet_text}>Hello {name}</Text>
          <Text style={styles.greet_text}>Good evening,</Text>
        </View>
        <Image
          source={require('../assets/images/user-profile.jpg')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.status}>
        <Text style={{color: colors.gray, fontSize: 16, fontWeight: '400'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorum
          deleniti magnam
        </Text>
      </View>
    </View>
  );
};

export default Greeting;
