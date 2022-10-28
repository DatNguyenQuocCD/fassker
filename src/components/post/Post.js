import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Post = (props) => {
    return (
        <View style={styles.post}>
            <View style={styles.post__author}>
                <Image
                    style={styles.post__avata}
                    source={{ uri: props.avata }}
                />
                <View >
                    <Text style={styles.post__name}>{props.name}</Text>
                    <View style={styles.post__author}>
                        <Text style={
                            { marginRight: 10 }
                        }>{props.time}</Text>
                        <Icon name={"ios-time-outline"} color={"#999999"} size={20} />
                    </View>
                </View>
            </View>
            <Text style={styles.post__title}>
                {props.content}
            </Text>
            <Image
                style={styles.post__img}
                source={{ uri: props.image }}
            />
            <View style={styles.post__like}>
                <Icon name={"heart-outline"} color={"black"} size={30} />
                <Text style={{ fontSize: 18, padding: 5, }}>{props.like}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 30,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 10,
    },
    post__author: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    post__avata: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    post__name: {
        fontFamily: "Overpass",
        fontSize: 20,
        fontWeight: "700",
        color: "black",
        marginTop: 10,
    },
    post__title: {
        fontFamily: "Overpass",
        fontSize: 15,
        color: "black",
        marginTop: 10,
    },
    post__img: {
        width: 365,
        height: 400,
        marginTop: 15
    },
    post__like: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
    },
});

export default Post;