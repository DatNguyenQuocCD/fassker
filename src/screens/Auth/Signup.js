import React, { useState } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import BigButton from "../../components/button/BigButton";
import Input from "../../components/input/input";
import { getUserApi } from "../../api/users";

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [icon1, setIcon1] = useState("eye-off");
    const [icon2, setIcon2] = useState("eye-off");
    const [status1, setStatus1] = useState(true);
    const [status2, setStatus2] = useState(true);
    const [users, setUsers] = useState([]);

    const getData = async () => {
        
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                    style={styles.logo}
                    source={require('../../asset/img/Logo.png')}
                />
                <Text style={styles.title}>Signup</Text>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <Input placeholder={"Enter user email"} name={"user"} setData={setEmail} />
                    <Text style={styles.label}>Number phone</Text>
                    <Input placeholder={"Enter your phone number"} name={"phone"} setData={setPhone} />
                    <Text style={styles.label}>Password</Text>
                    <Input placeholder={"Enter user password"} name={icon1} setData={setPassword} status={status1} setSecureTextEntry={setStatus1} setIcon={setIcon1} />
                    <Text style={styles.label}>Confirm password</Text>
                    <Input placeholder={"Enter user password"} name={icon2} setData={setConfirmPassword} status={status2} setSecureTextEntry={setStatus2} setIcon={setIcon2} />
                    <BigButton title={"Signup"}
                        // onPress={() => {
                        //     navigation.reset({
                        //         index: 0,
                        //         routes: [{ name: 'Main' }],
                        //     });
                        // }}
                    />
                </View>
                <Text style={styles.note}
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }],
                        });
                    }}
                >Already have an account? Sign In</Text>
            </ScrollView>
        </SafeAreaView>
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
        marginBottom: 40,
    }
});
export default Signup;