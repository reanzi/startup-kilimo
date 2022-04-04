import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import React from 'react';
import colors from '../constants/Colors';

const ScrollNav = ({data, active: selectedTab, onPress: setSelectedTab}) => {
  // const [selectedTab, setSelectedTab] = React.useState(data[0]);
  // console.log('Active: ', selectedTab);

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
  return (
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
};

export default ScrollNav;

const styles = StyleSheet.create({});
