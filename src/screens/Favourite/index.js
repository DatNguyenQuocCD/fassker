import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Favourite = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{ fontSize: 24 }}>Favourite</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
