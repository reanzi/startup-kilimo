import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {PublicData} from '../context/RealmConfig';
import {Farmer} from '../models/Farmer';

const {useRealm, useQuery} = PublicData;
const FarmersScreen = () => {
  const realm = useRealm();
  const result = useQuery('Farmer');
  const farmers = React.useMemo(() => result.sorted('name'), [result]);
  const theme = useTheme();
  console.log(farmers);

  const addPublicData = () => {
    const data = {
      name: 'Makubi Likomba',
      crops: 'pilipili hoho',
      phone: '472930',
    };
    try {
      realm.write(() => {
        realm.create('Farmer', new Farmer(data));
      });
    } catch (error) {
      console.log('Failed to create Farmer: ', error);
    }
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.secondary,
    },
  });

  return (
    <View style={styles.container}>
      <Text>FarmersScreen : {farmers.length}</Text>

      <Pressable onPress={addPublicData} style={{marginTop: 20}}>
        <Text>Add Data</Text>
      </Pressable>
    </View>
  );
};

export default FarmersScreen;
