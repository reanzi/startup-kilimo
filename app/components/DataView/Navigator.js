import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../constants/Colors';
// import colors from '../../constants/Colors';

const {width} = Dimensions.get('screen');
const Navigator = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        paddingHorizontal: 5,
        width: width,
        height: 50,
        // justifyContent: 'flex-start',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.active,
      }}>
      <Text
        style={{
          marginRight: 30,
          fontWeight: '800',
          fontSize: 18,
          color: colors.darkBlue,
        }}>
        Today's Task
      </Text>
      <Text
        style={{
          marginRight: 20,
          fontWeight: '500',
          fontSize: 14,
          color: colors.gray,
        }}>
        Notes
      </Text>
      <Text
        style={{
          marginRight: 20,
          fontWeight: '500',
          fontSize: 14,
          color: colors.gray,
        }}>
        Visits
      </Text>
      <Text
        style={{
          marginRight: 10,
          fontWeight: '500',
          fontSize: 14,
          color: colors.gray,
        }}>
        Reports
      </Text>
    </ScrollView>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
