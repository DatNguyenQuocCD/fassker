import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const HeaderApp = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.name__app}>Fassker</Text>
            <Icon name={"message1"} color={"black"} size={30} style={{marginTop:5}} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 15

    },
    name__app: {
        color: "black",
        fontSize: 30,
        fontWeight: "800",
    }
});
export default HeaderApp;