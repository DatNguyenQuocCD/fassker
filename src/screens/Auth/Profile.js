import React from "react";
import { View, StyleSheet, Image, Text, FlatList, RefreshControl, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Post from "../../components/post/Post";

const posts = [
    {
        avata: "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.18169-9/29104201_572183806482242_671037080754566223_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7J75bxeCctwAX9wVCTR&tn=ENFg0tTkvaluBB0I&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAnmTGOeUwrP8bzPT8C4MfszsMfSwEIPW6f7zsoxRCqmw&oe=6380538C",
        name: "D e e p L o v e",
        time: "2 ngày trước",
        content: '"Họ chạy đi tìm hạnh phúc mới, tôi đi gom nhặt nỗi buồn."',
        image: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/313325817_1912905962410013_7776090863444256557_n.jpg?stp=dst-jpg_s600x600&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0S3neM7U9lMAX_6W3Uq&_nc_ht=scontent.fdad1-2.fna&oh=00_AfACuonR3He07QeGAlob8_K2cpJkJ0_LTaYPigIIBb7vYg&oe=63601D89",
        like: "5.775"

    },
    {
        avata: "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/158629020_120250990108391_4374816865493046665_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VGV_ntChIAAAX-hnYpA&tn=ENFg0tTkvaluBB0I&_nc_ht=scontent.fdad1-2.fna&oh=00_AfDcoof4agGi2RHNlS5sg3SxpvkwifUAe29EzP89lwIG1A&oe=637FF114",
        name: "Bản Nhạc Này Chill Phết",
        time: "13 giờ trước",
        content: 'Không có sự việc hôm ấy,Sao có thái độ hôm nay.',
        image: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/313338963_536798378264548_7581578148480685158_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=o7NYpMEw3cIAX9oYh4A&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAAeaTY4Y_qfS269V1jdi-Cwn3pNoKw3H3ek8b79lRw_A&oe=63605634",
        like: "12k"

    },
    {
        avata: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/258764413_4760274277398678_110849868828710369_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zWyTW2Wr8fUAX94Dz3v&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBa2eRMJsRf4ElgJ5SsDVRVPbdxjeC5isAmwOyhE70APw&oe=63612D23",
        name: "Đà Nằng Page",
        time: "2 ngày trước",
        content: "Enjoy great profits on global product sourcing and choose from world's largest supplier base.",
        image: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/311778610_5033262763440199_7551520384969413389_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=BW8OEItc7kwAX8Q726R&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAtrECOuu2N44zX5qzUCg8edKqF7uHqNYbsirM5AX_e0w&oe=635F7339",
        like: "157"

    },
]

const listPost = posts.map((post) =>
    <TouchableOpacity
        onPress={() => {
            navigation.navigate('ProductDetail', { headerTitle: 'Product 1' });
        }}
    >
        <Post
            avata={post.avata}
            name={post.name}
            time={post.time}
            content={post.content}
            image={post.image}
            like={post.like}
        />
    </TouchableOpacity>
)

const Profile = (props) => {
    return (
        <View>
            <View style={styles.background}>
                <Image
                    style={styles.avata}
                    source={{
                        uri: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/285208640_111016871626407_465232664505094497_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KuQBORBeU8MAX_ss5Xr&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAkJgpATWXMCwQuS0W9hVkx0i6WOVZIKCbCdltgAuYe2A&oe=635FB9C4'
                    }} />
                <Text style={styles.name}>Nguyen Quoc Dat</Text>
                <View style={styles.container}>
                    <View style={styles.parameter}>
                        <Text style={styles.text}>
                            Followers
                        </Text>
                        <Text style={styles.text}>
                            12545
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            Following
                        </Text>
                        <Text style={styles.text}>
                            125
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            Posts
                        </Text>
                        <Text style={styles.text}>
                            12
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.tabs}>
                <View style={styles.border__tab}>
                    <Icon name={"book"} color={"black"} size={30} style={{ alignSelf: "center", }} />
                </View>
                <View style={styles.tab}>
                    <Icon name={"heart"} color={"black"} size={30} style={{ alignSelf: "center", }} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#666666",
        height:400,
    },
    avata: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: 80,
    },
    name: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
        alignSelf:"center",
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 50,
        paddingTop:20,
    },
    text: {
        color: "white",
        fontSize: 16,
        alignSelf: "center",
    },
    tabs: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    tab: {
        width: 196.3,
        paddingTop:8,
        paddingBottom:8,
        borderBottomWidth: 1,
        borderColor: "black"
    },
    border__tab: {
        width: 196.3,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 4,
        borderColor: "black"
    }
});
export default Profile;