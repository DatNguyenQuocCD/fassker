import React from "react";
import { View, StyleSheet, Image } from "react-native";

const Profile = (props) => {
    return (
        <View>
            <Image
                style={styles.avata}
                source={{
                uri: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/285208640_111016871626407_465232664505094497_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KuQBORBeU8MAX_ss5Xr&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAkJgpATWXMCwQuS0W9hVkx0i6WOVZIKCbCdltgAuYe2A&oe=635FB9C4'
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    avata: {
        width: 100,
        height:100
    },
});
export default Profile;