import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tabed from '../Tabed';
import ScrollNav from '../../components/ScrollNav';
import {tabs} from '../../Data/data';
import colors from '../../constants/Colors';

const menus = ['Activity', 'Farmer', 'Farm', 'Crop', 'Crop Health'];
const Create = () => {
  const [selectedTab, setSelectedTab] = React.useState(menus[0]);
  console.log('Active: ', selectedTab);

  return (
    <View style={styles.container}>
      <View>
        <ScrollNav data={menus} active={selectedTab} onPress={setSelectedTab} />
      </View>
      <View style={styles.forms}>
        <Text style={{fontSize: 32}}> Form for - {selectedTab}</Text>
      </View>
      <View style={styles.save_button}>
        <Text style={styles.save_text}>Save</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // justifyContent: 'space-between',
  },
  forms: {},
  save_button: {
    backgroundColor: 'teal',
    paddingVertical: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 5,
  },
  save_text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Create;
