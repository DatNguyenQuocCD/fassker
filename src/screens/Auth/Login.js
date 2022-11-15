import { useScrollToTop } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import BigButton from "../../components/button/BigButton";
import Input from "../../components/input/input";
import { getUserApi } from "../../api/users";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("Không được để trống email");
  const [errorPassword, setErrorPassword] = useState("Không được để trống password");
  const [users, setUsers] = useState([]);

  const getData = async() => {
    try {
      const res = await getUserApi({ limit: 10, page: 1 });
      setUsers(res?.data);
    }
    catch (error) {
      console.log('💩: getData -> error', error);
    }
  }

  useEffect(() => {
    getData();
  },[])

  const checkUser = () => {
    users.map((user) => {
      if (user.email == email && user.password == password) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
      }
    }
    )
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../asset/img/Logo.png')}
      />
      <Text style={styles.title}>Login</Text>
      <View>
        <Text style={styles.label}>User email</Text>
        <Input placeholder={"Enter user email"} name={"user"} data={email} setData={setEmail} error = {errorEmail} />
        <Text style={styles.label}>Password</Text>
        <Input placeholder={"Enter user password"} name={"eye-off"} status={true} data={password} setData={setPassword} error={errorPassword} />
        <BigButton title={"Login"}
          onPress={() => {
            checkUser();
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Main'}],
          // });
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
