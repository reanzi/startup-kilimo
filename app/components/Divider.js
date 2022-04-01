import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const Divider = ({margin = 0}) => {
  const theme = useTheme();
  const colors = theme.colors;
  return (
    <View style={{height: 40, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          height: 2,
          width: '50%',
          backgroundColor: colors.primary,
          marginRight: margin,
        }}
      />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({});
