import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getPostsApi } from '../../api/posts';

const MyBooking = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await getPostsApi({ limit: 10, page: 1 });
      setData(res?.data);
      console.log('💩: getData -> res', res);
    } catch (error) {
      console.log('💩: getData -> error', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const listPost = data.map((post) => {
    return (
      <Text>{post.name}</Text>
    )
  })

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{ fontSize: 24 }}>MyBooking</Text>
      {listPost}
    </View>
  );
};

export default MyBooking;

const styles = StyleSheet.create({});
