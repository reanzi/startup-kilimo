import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import colors from '../constants/Colors';

import Feather from 'react-native-vector-icons/Feather';

const Card = () => {
  const styles = StyleSheet.create({
    container: {
      width: 180,
      height: 150,
      backgroundColor: colors.white,
      borderWidth: 2,
      borderColor: '#e6e6e6',
      paddingLeft: 20,
      margin: 10,
      marginLeft: 0,
      borderRadius: 20,
      alignContent: 'space-between',
    },
    topBar: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      overflow: 'hidden',
      paddingVertical: 5,
    },
    label: {
      height: 8,
      width: 50,
      backgroundColor: colors.purple,
      marginRight: -20,
      borderRadius: 10,
    },
    content: {
      flex: 2,
    },
    bottomBar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 5,
    },
    lastAccessed: {},
    status: {
      marginRight: 10,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.time}>11:42 PM</Text>
        <View style={styles.label} />
      </View>
      <View style={styles.content}>
        <Text style={{fontSize: 18}}>Text content</Text>
        <Text style={{fontSize: 14}}>subtitle</Text>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.lastAccessed}>
          <Text>in 3 hrs 46 mins</Text>
        </View>
        <View style={styles.status}>
          <Feather name="shield" size={18} />
        </View>
      </View>
    </View>
  );
};

export default Card;
