import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProductDetail = ({navigation}) => {
  // useEffect(() => {
  // set lại 1 số thuộc tính của màn hình đó (vd title)
  //   navigation.setOptions({title: 'new title'});
  // }, []);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 24}}>ProductDetail</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
