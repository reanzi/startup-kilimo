import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const BottomSheet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.drag_handle} />
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SCREEN_HEIGHT,
    backgroundColor: 'red',
    position: 'absolute',
    top: SCREEN_HEIGHT / 1.2,
    borderRadius: 25,
  },
  drag_handle: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
  },
});
