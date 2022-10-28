import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import HeaderApp from "../../components/headerApp/HeaderApp";
import Post from "../../components/post/Post";

const posts = [
  {
    avata: "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.18169-9/29104201_572183806482242_671037080754566223_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7J75bxeCctwAX9wVCTR&tn=ENFg0tTkvaluBB0I&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAnmTGOeUwrP8bzPT8C4MfszsMfSwEIPW6f7zsoxRCqmw&oe=6380538C",
    name: "D e e p L o v e",
    time: "2 ngày trước",
    content: '"Họ chạy đi tìm hạnh phúc mới, tôi đi gom nhặt nỗi buồn."',
    image: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/313325817_1912905962410013_7776090863444256557_n.jpg?stp=dst-jpg_s600x600&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0S3neM7U9lMAX_6W3Uq&_nc_ht=scontent.fdad1-2.fna&oh=00_AfACuonR3He07QeGAlob8_K2cpJkJ0_LTaYPigIIBb7vYg&oe=63601D89",
    like: "5.775"
    
  },
  {
    avata: "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/158629020_120250990108391_4374816865493046665_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VGV_ntChIAAAX-hnYpA&tn=ENFg0tTkvaluBB0I&_nc_ht=scontent.fdad1-2.fna&oh=00_AfDcoof4agGi2RHNlS5sg3SxpvkwifUAe29EzP89lwIG1A&oe=637FF114",
    name: "Bản Nhạc Này Chill Phết",
    time: "13 giờ trước",
    content: 'Không có sự việc hôm ấy,Sao có thái độ hôm nay.',
    image: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/313338963_536798378264548_7581578148480685158_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=o7NYpMEw3cIAX9oYh4A&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAAeaTY4Y_qfS269V1jdi-Cwn3pNoKw3H3ek8b79lRw_A&oe=63605634",
    like: "12k"

  },
  {
    avata: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/258764413_4760274277398678_110849868828710369_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zWyTW2Wr8fUAX94Dz3v&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBa2eRMJsRf4ElgJ5SsDVRVPbdxjeC5isAmwOyhE70APw&oe=63612D23",
    name: "Đà Nằng Page",
    time: "2 ngày trước",
    content: "Enjoy great profits on global product sourcing and choose from world's largest supplier base.",
    image: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/311778610_5033262763440199_7551520384969413389_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=BW8OEItc7kwAX8Q726R&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAtrECOuu2N44zX5qzUCg8edKqF7uHqNYbsirM5AX_e0w&oe=635F7339",
    like: "157"

  },
]


const Home = ({ navigation }) => {

  const listPost = posts.map((post) =>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetail', { headerTitle: 'Product 1' });
      }}
    >
      <Post
        avata={post.avata}
        name={post.name}
        time={post.time}
        content={post.content}
        image={post.image}
        like={post.like}
      />
    </TouchableOpacity>
  )
  return (
    <View>
      <HeaderApp/>
      <SafeAreaView>
        <ScrollView style={{ backgroundColor: "#DDDDDD", }} showsVerticalScrollIndicator={false}>
          {listPost}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default Home;
