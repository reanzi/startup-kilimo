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
        height: 60,
        // justifyContent: 'flex-start',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.active,
        // paddingVertical: 20,
      }}>
      <Text style={styles.activeLink}>Today's Task</Text>
      <Text style={styles.link}>Notes</Text>
      <Text style={styles.link}>Visits</Text>
      <Text style={styles.link}>Reports</Text>
    </ScrollView>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  link: {
    marginRight: 20,
    fontWeight: '500',
    fontSize: 14,
    color: colors.gray,
  },
  activeLink: {
    marginRight: 30,
    fontWeight: '800',
    fontSize: 18,
    color: colors.darkBlue,
  },
});
