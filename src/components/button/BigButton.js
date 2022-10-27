import React from "react";
import { View, StyleSheet, Button } from "react-native";

const BigButton = (props) => {
    return (
        <View style={styles.button}>
            <Button
                onPress={props.onPress}
                title={props.title}
                color="black"
                accessibilityLabel="Learn more about this purple button"

            />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
    },
});
export default BigButton;