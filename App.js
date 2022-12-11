// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';
import BottomTabs from './src/navigation/BottomTabs';
import {store} from './src/reduxToolKit/store';
import Login from './src/screens/Auth/Login';
import Signup from './src/screens/Auth/Signup';
import ProductDetail from './src/screens/Home/ProductDetail';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({navigation}) => {
              return {
                animation: 'fade_from_bottom',
                headerLeft: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.goBack();
                      }}>
                      <Text>Back</Text>
                    </TouchableOpacity>
                  );
                },
              };
            }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Main"
              component={BottomTabs}
              options={{headerShown: false}}
            />

            <Stack.Screen
              options={({route, navigation}) => {
                return {
                  headerTitleAlign: 'center',
                  // title: route?.params?.headerTitle,
                  title: 'Product 1',
                };
              }}
              name={'ProductDetail'}
              component={ProductDetail}
            />

            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
