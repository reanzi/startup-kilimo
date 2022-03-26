import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Navigator from './Navigator';
import colors from '../../constants/Colors';

const Content = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        // backgroundColor: colors.gray,
      }}>
      <Navigator />
      <View
        style={{
          width: 380,
          paddingTop: 10,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
};

const Card = () => {
  return (
    <View
      style={{
        width: 180,
        height: 130,
        backgroundColor: colors.darkBlue,
        padding: 10,
        margin: 10,
        marginLeft: 0,
        borderRadius: 5,
      }}>
      <Text>Cad View</Text>
    </View>
  );
};
export default Content;

const styles = StyleSheet.create({});
