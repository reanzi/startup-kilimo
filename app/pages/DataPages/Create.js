import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Create = () => {
  return (
    <View style={stles.container}>
      <Text>Create</Text>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
