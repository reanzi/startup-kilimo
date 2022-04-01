import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import SectionHeader from '../SectionHeader';
import {tabs} from '../../Data/data';

const data = new Array(5);

const CustomFlatList = ({data}) => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        // backgroundColor: '#ddd',
        flex: 1,
        padding: 5,
        height: 350,
        // marginLeft: -10,
      }}>
      <FlatList
        data={tabs}
        keyExtractor={item => `${item}-1`}
        // numColumns={2}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        renderItem={({item}) => (
          <View
            // key={index}
            style={{
              height: 90,
              backgroundColor: '#c6c6c5',
              margin: 4,
              borderRadius: 10,
              flexDirection: 'row',
              alignContent: 'center',
              overflow: 'hidden',
            }}>
            <View
              style={{width: 100, height: 90, backgroundColor: 'teal'}}></View>
            <View style={{paddingHorizontal: 20}}>
              <Text>{item}</Text>
              <Text>{item}</Text>
              <Text>{item}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View style={styles.search}>
          <Feather name="search" size={24} />
          <TextInput
            style={styles.search_input}
            placeholder="Search..."
            autoFocus={true}
            placeholderTextColor="#d4d4d4"
            // showSoftInputOnFocus={false}
          />
        </View>
        <View style={styles.section}>
          <SectionHeader title="Recently" />
          <Pressable style={styles.sort}>
            <Text style={{marginRight: 5}}>Sort by</Text>
            <Feather name="chevron-down" size={24} style={{marginTop: 5}} />
          </Pressable>
        </View>
        <CustomFlatList data={tabs} />
        <SectionHeader title="popular" />
        <CustomFlatList data={tabs} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  search: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  search_input: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '700',
    color: '#444',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  sort: {
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
