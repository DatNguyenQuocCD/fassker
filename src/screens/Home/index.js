import React, {useEffect, useState} from 'react';
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderApp from '../../components/headerApp/HeaderApp';
import Post from '../../components/post/Post';

import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {getPostsApi} from '../../api/posts';
import Stori from '../../components/stori/Stori';
import {getPostsData} from '../../reduxToolKit/Posts/thunk';
import {store} from '../../reduxToolKit/store';

const Home = ({navigation}) => {
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  const myPostsToolkit = useSelector(
    state => state.getPostsToolKitReducer.data,
  );
  const loading = useSelector(state => state.getPostsToolKitReducer.loading);

  // const getData = async () => {
  //   try {
  //     const res = await getPostsApi({limit: 10, page: 1});
  //     setPosts(res?.data);
  //   } catch (error) {
  //     console.log('💩: getData -> error', error);
  //   }
  // };

  store.getState();

  console.log('💩: Home -> store.getState()', store.getState());

  console.log('MyPost => ', myPostsToolkit);

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    dispatch(getPostsData());
  }, []);

  const listPost = posts.map(post => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetail', {headerTitle: 'Product 1'});
      }}>
      <Post
        avata={post.avata}
        name={post.name}
        time={post.time}
        content={post.content}
        image={post.image}
        like={post.like}
      />
    </TouchableOpacity>
  ));
  return (
    <View>
      <HeaderApp />
      <SafeAreaView>
        <ScrollView
          style={{backgroundColor: '#DDDDDD'}}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                getData();
              }}
            />
          }>
          <SafeAreaView>
            <ScrollView
              style={{
                backgroundColor: '#DDDDDD',
                marginBottom: 10,
                marginTop: 10,
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.myStori}>
                <Image
                  source={{
                    uri: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/285208640_111016871626407_465232664505094497_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KuQBORBeU8MAX_ss5Xr&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAkJgpATWXMCwQuS0W9hVkx0i6WOVZIKCbCdltgAuYe2A&oe=635FB9C4',
                  }}
                  style={styles.Image}
                />
                <View style={styles.icon}>
                  <Icon name={'pluscircle'} color={'black'} size={30} />
                </View>
              </View>
              <Stori
                avata={
                  'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/318454248_1583986462027141_8699679392970710311_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QBNuqzhFQVwAX-zNWI1&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAyOtnUWybH4D_D0AyRe6Y54fBv_5FZsLT1D0-JJ-ts1A&oe=639A6415'
                }
                stori={
                  'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/305648832_551344280122891_1773893444282040696_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=T-p8l_xE7J8AX--tB7X&_nc_ht=scontent.fdad3-3.fna&oh=00_AfBrHqd1xXA3HbYLbFGWGPDfR2FIo5zEiNd-K1eTMqOLyg&oe=6399B661'
                }
              />
              <Stori
                avata={
                  'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/292086988_1434981263617603_2317019468537718772_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MrySgIe7ep4AX95EqSF&_nc_oc=AQlOvK16ELNPzsQBFC-5FvTGkmKk-kOb1Xafwt_5GIUfIqkXWrUZIiwbaHeP2VW01a4&_nc_ht=scontent.fdad3-5.fna&oh=00_AfB74PdrVP9eonBRQ_BeASLIHlv4NriZf1xA2LpYLLb7aA&oe=639B4584'
                }
                stori={
                  'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/318032251_5168203146612826_4137591906253843571_n.jpg?stp=dst-jpg_p600x600&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bNCOOhfwX7UAX85fiTn&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAko9lxdPmq1ePtCN6JtNSuUO7ySuGi-weKdxMGl1gvrw&oe=6399D77D'
                }
              />
              <Stori
                avata={
                  'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/316108622_1145472192841012_3799984355278728183_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=DwLQyvKJJQAAX962DWy&_nc_ht=scontent.fdad3-3.fna&oh=00_AfAUuJO7ni-FxW84QMzLAYeEEWoP0Ndo-iYkAEppeMyjdg&oe=6399F47C'
                }
                stori={
                  'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/319113246_227812319817818_4308631666957372371_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jtzjWfL-RcIAX_sEter&_nc_ht=scontent.fdad3-5.fna&oh=00_AfD2gW01cBGX8P1iuL5KwfYE8-uW-bAriSi8VZ_xLN96Ow&oe=639B30AA'
                }
              />
              <Stori
                avata={
                  'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/269922977_628242278505990_816413266197117536_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=GBDrkKK2MvsAX--2Fih&_nc_ht=scontent.fdad3-1.fna&oh=00_AfDm03TskzYlxKCpAbGrn6yC-Tm9CkoxOstShaXqydfYUQ&oe=639B2BA1'
                }
                stori={
                  'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/277778063_688297955833755_3843137069235225175_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=ZAUjybJJH4EAX_r_p-7&tn=uCE5GsMkJeCvlL-0&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBrSttg2JrfoknHjclqB_By7deBig00MgGzWwB7psq3rA&oe=639A3BB3'
                }
              />
              <Stori
                avata={
                  'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.18169-9/20258313_1322221604572033_8871581538192420683_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0Zn3_ggpFY0AX_Nlj-L&tn=uCE5GsMkJeCvlL-0&_nc_ht=scontent.fdad3-3.fna&oh=00_AfA4agtjrcKq3PH703erK1f4Xg2ZA61-Llg6yPENV4m7ew&oe=63BD1909'
                }
                stori={
                  'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/318524034_5736296339831182_8358317548287315585_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=LgI7RXU1te4AX8xqln9&_nc_ht=scontent.fdad3-3.fna&oh=00_AfCue41a7GBJwbYJxA0pBjVofKoQRgeK-UdFH-3wvQJ1ig&oe=639AD59E'
                }
              />
            </ScrollView>
          </SafeAreaView>
          {listPost.reverse()}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  myStori: {
    width: 120,
    borderRadius: 10,
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  Image: {
    width: 120,
    height: 130,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  icon: {
    position: 'absolute',
    top: 115,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 2,
  },
});
export default Home;
