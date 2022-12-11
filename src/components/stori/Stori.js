import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Stori = (props) => {
    return (
      <View style={styles.stori}>
        <Image source={{uri: props.stori}} style={styles.Image}/>
        <View style={styles.avata1}>
          <Image source={{uri: props.avata}} style={styles.avata2}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  stori:{
    width:120,
    borderRadius: 10,
    height: 200,
    backgroundColor: "white",
    alignItems: "center",
    marginRight: 10,
  },
  Image:{
    width: 120,
    height: 200,
    borderRadius:10
  },
  avata1:{
    position: 'absolute',
    top: 115,
    backgroundColor:"white",
    borderRadius: 100,
    padding: 2,

  },
  avata2:{
    width:50,
    height:50,
    borderRadius: 50,
  }
});

export default Stori;