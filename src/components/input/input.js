import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Input = (props) => {
    const [text, setText] = useState("");
    return (
        <View>
            <View style={styles.input}>
                <TextInput
                    style={styles.textInput}
                    placeholder={props.placeholder}
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                    returnKeyType="go"
                    autoCorrect={true}
                    secureTextEntry={props.status}
                />
                <Icon name={props.name} color={"black"} size={30} />
            </View>
            <Text>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 3,
        borderBottomColor: '#d3d3d3',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    textInput: {
        width: 300,
    }
});

export default Input;