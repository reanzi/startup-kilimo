import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const Card = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: 160,
      height: 180,
      backgroundColor: theme.colors.secondary,
    },
  });
  return (
    <View style={styles.container}>
      <Text>Card</Text>
    </View>
  );
};

export default Card;
