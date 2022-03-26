import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';

const Tab = ({icon, label, size = 24, accessibilityState, onPress}) => {
  const theme = useTheme();

  const focused = accessibilityState.selected;
  const color = !focused ? 'gray' : theme.colors.white;
  const tabBg = !focused ? theme.colors.white : theme.colors.darkBlue;
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${tabBg}`,
        margin: 4,
        borderRadius: 10,
      }}>
      <Feather name={icon} size={size} color={color} style={{marginRight: 5}} />
      {focused && (
        <Text style={{color: color, fontWeight: '400'}}>
          {label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()}
        </Text>
      )}
    </Pressable>
  );
};

export default Tab;

const styles = StyleSheet.create({});
