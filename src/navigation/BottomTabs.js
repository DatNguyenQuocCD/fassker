import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Favourite from '../screens/Favourite';
import MyBooking from '../screens/Mybooking';
import Chat from '../screens/Chat';
import Setting from '../screens/Setting';
import Icon from 'react-native-vector-icons/Entypo';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import Profile from '../screens/Auth/Profile';

const BottomTab = createBottomTabNavigator();

const iconUrl =
  'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/285208640_111016871626407_465232664505094497_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KuQBORBeU8MAX_ss5Xr&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAkJgpATWXMCwQuS0W9hVkx0i6WOVZIKCbCdltgAuYe2A&oe=635FB9C4';

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="Home Tab"
        component={Home}
        options={() => {
          return {
            // tabBarLabel: ({focused}) => {
            //   return (
            //     <Text style={{color: focused ? 'red' : 'black'}}>{''}</Text>
            //   );
            // },
            tabBarIcon: ({ focused }) => (
              <Icon name="home" color="black" size={30}/>
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="Favourite Tab"
        component={Favourite}
        options={() => {
          return {
            // tabBarLabel: ({focused}) => {
            //   return (
            //     <Text style={{color: focused ? 'red' : 'black'}}>
            //     </Text>
            //   );
            // },
            tabBarIcon: () => (
              <IconFontisto name="search" color="black" size={25}/>
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="MyBookingTab"
        component={MyBooking}
        options={() => {
          return {
            // tabBarLabel: ({focused}) => {
            //   return (
            //     <Text style={{color: focused ? 'red' : 'black'}}>
            //     </Text>
            //   );
            // },
            tabBarIcon: () => (
              <Icon name="plus" color="black" size={30} />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="ChatTab"
        component={Chat}
        options={() => {
          return {
            // tabBarLabel: ({focused}) => {
            //   return (
            //     <Text style={{color: focused ? 'red' : 'black'}}>{''}</Text>
            //   );
            // },
            tabBarIcon: () => (
              <Icon name="heart-outlined" color="black" size={30} />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="SettingTab"
        component={Profile}
        options={() => {
          return {
            // tabBarLabel: ({focused}) => {
            //   return (
            //     <Text style={{color: focused ? 'red' : 'black'}}>
            //     </Text>
            //   );
            // },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconUrl,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  
});
