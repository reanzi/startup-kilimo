import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {data, tabs} from '../Data/data';
import Card from '../components/Card';
import colors from '../constants/Colors';

// const tabs = [
//   {
//     id: 1,
//     tab: 'One',
//   },
//   {
//     id: 2,
//     tab: 'Two',
//   },
//   {
//     id: 3,
//     tab: 'Three',
//   },
//   {
//     id: 4,
//     tab: 'Four',
//   },
//   // {
//   //   id: 5,
//   //   tab: 'Five',
//   // },
//   // {
//   //   id: 6,
//   //   tab: 'Six',
//   // },
//   // {
//   //   id: 7,
//   //   tab: 'Seven',
//   // },
// ];

const Tabed = () => {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);
  console.log('Active: ', selectedTab);

  const selectedText = {
    color: colors.gray,
    fontSize: 16,
    fontWeight: '600',
  };
  const unSelectedText = {
    color: `#b3b3b3`,
    fontSize: 13,
    fontWeight: '400',
  };
  const Render = ({item}) => {
    // console.log('Active: ', item);
    return (
      <Pressable onPress={() => setSelectedTab(item)}>
        <View
          style={[
            styles.pills,
            {
              backgroundColor: selectedTab === item ? 'white' : 'transparent',
              padding: 10,
              marginRight: 30,
              borderBottomWidth: selectedTab === item ? 3 : 0,
              borderColor: selectedTab === item ? colors.active : 'transparent',
            },
          ]}>
          <Text style={selectedTab === item ? selectedText : unSelectedText}>
            {item.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    );
  };

  const ScrollNav = data => (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${item}-${index}`}
      style={{flexGrow: 0, marginBottom: 5}}
      contentContainerStyle={{
        padding: 0,
        // backgroundColor: colors.active,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      renderItem={Render}
    />
  );
  return (
    <>
      <View style={{paddingBottom: 10}}>{ScrollNav(tabs)}</View>
      <ScrollView
        horizontal={true}
        style={{height: 300}}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={false}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${item.type}-${index}`}
          numColumns={2}
          nestedScrollEnabled={true}
          // horizontal
          key={item => item.type}
          contentContainerStyle={{
            backgroundColor: 'transparent',
          }}
          renderItem={({item}) => {
            return <Card />;
          }}
        />
      </ScrollView>
    </>
  );
};

export default Tabed;

const styles = StyleSheet.create({});
