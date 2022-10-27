import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import BigButton from "../../components/button/BigButton";
import Input from "../../components/input/input";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../asset/img/Logo.png')}
      />
      <Text style={styles.title}>Login</Text>
      <View>
        <Text style={styles.label}>User name</Text>
        <Input placeholder={"Enter user name"} name={"user"} />
        <Text style={styles.label}>Password</Text>
        <Input placeholder={"Enter user password"} name={"eye-off"} status={true} />
        <BigButton title={"Login"}
          onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Main'}],
          });
        }}
        />
      </View>
      <Text style={styles.note}>Forgot Your Password?</Text>
      <Text style={styles.note}
        onPress={() => {
          navigation.reset({
            index: 1,
            routes: [{ name: 'Signup' }],
          });
        }}
      >Not On Pinterest Yet? Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    alignSelf: "center",
  },
  logo: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 50,
  },
  title: {
    fontFamily: "Overpass",
    fontSize: 30,
    fontWeight: "900",
    color: "black",
    alignSelf: "center",
    marginBottom: 30,
  },
  label: {
    fontFamily: "Overpass",
    fontSize: 15,
    fontWeight: "700",
    color: "#090F47",
  },
  button: {
    marginTop: 10,
  },
  note: {
    alignSelf: "center",
    marginTop: 20,
  }
});

export default Login;
