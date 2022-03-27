import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Navigator from './Navigator';
import colors from '../../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../Card';

const Content = () => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: colors.gray,
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
        // alignContent: 'stretch',
      }}>
      <Navigator />
      <ScrollView>
        <View
          style={{
            paddingTop: 20,
            borderBottomWidth: 2,
            borderColor: colors.purple,
            // backgroundColor: colors.white,
            width: 100,
            // flex: 1,
            // justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '900',
              color: colors.purple,
            }}>
            Top Priority
          </Text>
        </View>
        <SectionContent data={3} />
      </ScrollView>
    </View>
  );
};

const SectionContent = ({data}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        width: 380,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollView>
  );
};

export default Content;

const styles = StyleSheet.create({});
