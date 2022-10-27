// import {Button, StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const Home = ({navigation}) => {
//   return (
//     <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
//       <Text style={{fontSize: 24}}>Home</Text>

//       <Button
//         title="Go to detail"
//         onPress={() => {
//           navigation.navigate('ProductDetail', {headerTitle: 'Product 1'});
//         }}
//       />
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({});

// import axios from "axios";
import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';



const Home = ({ navigation }) => {


  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#DDDDDD", }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductDetail', { headerTitle: 'Product 1' });
          }}
        >
          <View style={styles.post}>
            <View style={styles.post__author}>
              <Image
                style={styles.post__avata}
                source={{ uri: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/312509831_648069623424811_2037635082607449668_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UY31WjAkPCYAX_HpPfs&_nc_ht=scontent.fdad1-4.fna&oh=00_AT98Uw8kiC7kV3RFMKxAJ_Pr8J6MmAQ1FK8LXJmLoC8MLA&oe=635E82E0' }}
              />
              <View >
                <Text style={styles.post__name}>Girl 1_9</Text>
                <View style={styles.post__author}>
                  <Text style={
                    { marginRight: 10 }
                  }>20 phút trước</Text>
                  <Icon name={"ios-time-outline"} color={"#999999"} size={20} />
                </View>
              </View>
            </View>
            <Text style={styles.post__title}>
              "Họ chạy đi tìm hạnh phúc mới, tôi đi gom nhặt nỗi buồn."
            </Text>
            <Image
              style={styles.post__img}
              source={{ uri: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/305204586_188854480295385_8627865248755297226_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=F8PFu1upkfIAX_Ao1T5&_nc_ht=scontent.fdad2-1.fna&oh=00_AT8zptx9eg8qt_iWSJERonjENNjYz4jQUwACBIAYf5m0yg&oe=635E08B2' }}
            />
            <View style={styles.post__like}>
              <Icon name={"heart-outline"} color={"black"} size={30} />
              <Text style={{ fontSize: 18, padding: 5, }}>3.4k</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.post}>
          <View style={styles.post__author}>
            <Image
              style={styles.post__avata}
              source={{ uri: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/312509831_648069623424811_2037635082607449668_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UY31WjAkPCYAX_HpPfs&_nc_ht=scontent.fdad1-4.fna&oh=00_AT98Uw8kiC7kV3RFMKxAJ_Pr8J6MmAQ1FK8LXJmLoC8MLA&oe=635E82E0' }}
            />
            <View >
              <Text style={styles.post__name}>Girl 1_9</Text>
              <View style={styles.post__author}>
                <Text style={
                  { marginRight: 10 }
                }>20 phút trước</Text>
                <Icon name={"ios-time-outline"} color={"#999999"} size={20} />
              </View>
            </View>
          </View>
          <Text style={styles.post__title}>
            "Họ chạy đi tìm hạnh phúc mới, tôi đi gom nhặt nỗi buồn."
          </Text>
          <Image
            style={styles.post__img}
            source={{ uri: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/305204586_188854480295385_8627865248755297226_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=F8PFu1upkfIAX_Ao1T5&_nc_ht=scontent.fdad2-1.fna&oh=00_AT8zptx9eg8qt_iWSJERonjENNjYz4jQUwACBIAYf5m0yg&oe=635E08B2' }}
          />
          <View style={styles.post__like}>
            <Icon name={"heart-outline"} color={"black"} size={30} />
            <Text style={{ fontSize: 18, padding: 5, }}>3.4k</Text>
          </View>
        </View>
        <View style={styles.post}>
          <View style={styles.post__author}>
            <Image
              style={styles.post__avata}
              source={{ uri: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/312509831_648069623424811_2037635082607449668_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UY31WjAkPCYAX_HpPfs&_nc_ht=scontent.fdad1-4.fna&oh=00_AT98Uw8kiC7kV3RFMKxAJ_Pr8J6MmAQ1FK8LXJmLoC8MLA&oe=635E82E0' }}
            />
            <View >
              <Text style={styles.post__name}>Girl 1_9</Text>
              <View style={styles.post__author}>
                <Text style={
                  { marginRight: 10 }
                }>20 phút trước</Text>
                <Icon name={"ios-time-outline"} color={"#999999"} size={20} />
              </View>
            </View>
          </View>
          <Text style={styles.post__title}>
            "Họ chạy đi tìm hạnh phúc mới, tôi đi gom nhặt nỗi buồn."
          </Text>
          <Image
            style={styles.post__img}
            source={{ uri: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/305204586_188854480295385_8627865248755297226_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=F8PFu1upkfIAX_Ao1T5&_nc_ht=scontent.fdad2-1.fna&oh=00_AT8zptx9eg8qt_iWSJERonjENNjYz4jQUwACBIAYf5m0yg&oe=635E08B2' }}
          />
          <View style={styles.post__like}>
            <Icon name={"heart-outline"} color={"black"} size={30} />
            <Text style={{ fontSize: 18, padding: 5, }}>3.4k</Text>
          </View>
        </View>
        <View style={styles.post}>
          <View style={styles.post__author}>
            <Image
              style={styles.post__avata}
              source={{ uri: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/312509831_648069623424811_2037635082607449668_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UY31WjAkPCYAX_HpPfs&_nc_ht=scontent.fdad1-4.fna&oh=00_AT98Uw8kiC7kV3RFMKxAJ_Pr8J6MmAQ1FK8LXJmLoC8MLA&oe=635E82E0' }}
            />
            <View >
              <Text style={styles.post__name}>Girl 1_9</Text>
              <View style={styles.post__author}>
                <Text style={
                  { marginRight: 10 }
                }>15 phút trước</Text>
                <Icon name={"ios-time-outline"} color={"#999999"} size={20} />
              </View>
            </View>
          </View>
          <Text style={styles.post__title}>
            "Họ chạy đi tìm hạnh phúc mới, tôi đi gom nhặt nỗi buồn."
          </Text>
          <Image
            style={styles.post__img}
            source={{ uri: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/305204586_188854480295385_8627865248755297226_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=F8PFu1upkfIAX_Ao1T5&_nc_ht=scontent.fdad2-1.fna&oh=00_AT8zptx9eg8qt_iWSJERonjENNjYz4jQUwACBIAYf5m0yg&oe=635E08B2' }}
          />
          <View style={styles.post__like}>
            <Icon name={"heart-outline"} color={"black"} size={30} />
            <Text style={{ fontSize: 18, padding: 5, }}>3.4k</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 30,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10
  },
  post__author: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  post__avata: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  post__name: {
    fontFamily: "Overpass",
    fontSize: 20,
    fontWeight: "700",
    color: "black",
    marginTop: 10,
  },
  post__title: {
    fontFamily: "Overpass",
    fontSize: 15,
    color: "black",
    marginTop: 10,
  },
  post__img: {
    width: 365,
    height: 400,
    marginTop: 15
  },
  post__like: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

});
export default Home;
