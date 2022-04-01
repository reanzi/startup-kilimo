import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const SectionHeader = ({title}) => {
  //   const {colors} = useTheme().theme;

  return (
    <View style={{paddingTop: 20, paddingBottom: 10, justifyContent: 'center'}}>
      <Text style={{color: '#777', fontSize: 18, fontWeight: '400'}}>
        {title.toUpperCase()}
      </Text>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({});
