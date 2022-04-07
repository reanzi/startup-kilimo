import {StyleSheet, Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import Tabed from '../Tabed';
import ScrollNav from '../../components/ScrollNav';
import {tabs} from '../../Data/data';
import colors from '../../constants/Colors';

const menus = ['Activity', 'Farmer', 'Farm', 'Crop', 'Crop Health'];
const Create = () => {
  const [selectedTab, setSelectedTab] = React.useState(menus[0]);
  console.log('Active: ', selectedTab);
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Button title="Show modal" onPress={toggleModal} />
      <View>
        <ScrollNav data={menus} active={selectedTab} onPress={setSelectedTab} />
      </View>
      <View style={styles.forms}>
        <Text style={{fontSize: 32}}> Form for - {selectedTab}</Text>
      </View>
      <View style={styles.save_button}>
        <Text style={styles.save_text}>Save</Text>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
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
