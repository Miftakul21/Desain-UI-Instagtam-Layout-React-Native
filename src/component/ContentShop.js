import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

function ContentShop() {
    const random = Math.floor(Math.random() * 1000);
    const image = 'https://picsum.photos/200/300?random=';

    return (
        <View style={styles.container}>
            <View style={styles.BoxItem}>
                <View style={styles.box}>
                    <Image source={{ uri: image + random * 2 }} style={styles.img} />
                </View>
                <View style={styles.box}>
                    <Image source={{ uri: image + random * 1 }} style={styles.img} />
                </View>
            </View>
            <View style={styles.BoxItem}>
                <View style={styles.box}>
                    <Image source={{ uri: image + random * 6 }} style={styles.img} />
                </View>
                <View style={styles.box}>
                    <Image source={{ uri: image + random * 12 }} style={styles.img} />
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    BoxItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2
    },
    box: {
        width: 215,
        height: 200,
        resizeMode: 'cover'
    },
    img: {
        flex: 1
    }
})

export default ContentShop;
