import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

function ContentSearch() {
    let acak = Math.ceil(Math.random() * 200);
    let img = 'https://picsum.photos/200/300?random= ';

    return (
        <View>
            <View style={style.container}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={style.box1}>
                        <Image source={{ uri: img + acak * 29 }} style={{ width: 140, height: 150, resizeMode: 'cover' }} />
                    </View>
                    <View style={style.box2}>
                        <Image source={{ uri: img + acak * 24 }} style={{ width: 140, height: 150, resizeMode: 'cover' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginHorizontal: 5 }}>
                    <View style={style.box1}>
                        <Image source={{ uri: img + acak * 22 }} style={{ width: 140, height: 150, resizeMode: 'cover' }} />
                    </View>
                    <View style={style.box2}>
                        <Image source={{ uri: img + acak * 12 }} style={{ width: 140, height: 150, resizeMode: 'cover' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <View style={style.box3}>
                        <Icon name="video" size={20} color="white" style={{ position: 'absolute', top: 5, left: 10, zIndex: 1 }}></Icon>
                        <Image source={{ uri: img + acak * 20 }} style={{ width: 140, height: 305, resizeMode: 'cover' }} />
                    </View>
                </View>
            </View>

            <View style={style.container2}>
                <View style={{ flexDirection: 'column', marginRight: 5 }}>
                    <View style={style.box3}>
                        <Icon name="video" size={20} color="white" style={{ position: 'absolute', top: 5, left: 10, zIndex: 1 }}></Icon>
                        <Image source={{ uri: img + acak * 2 }} style={{ width: 140, height: 305, resizeMode: 'cover' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <View style={style.box1}>
                        <Image source={{ uri: img + acak * 20 }} style={{ width: 140, height: 150, resizeMode: 'cover' }} />
                    </View>
                    <View style={style.box2}>
                        <Image source={{ uri: img + acak * 45 }} style={{ width: 140, height: 150, resizeMode: 'cover' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginHorizontal: 5 }}>
                    <View style={style.box1}>
                        <Image source={{ uri: img + acak * 30 }} style={{ width: 140, height: 150, resizeMode: 'cover' }} />
                    </View>
                    <View style={style.box2}>
                        <Image source={{ uri: img + acak * 65 }} style={{ width: 140, height: 150, resizeMode: 'cover' }} />
                    </View>
                </View>
            </View>
        </View >
    );
}

export default ContentSearch;

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: 300,
        marginVertical: 5,
        flexDirection: "row",
    },
    box1: {
        width: 140,
        height: 150,
    },
    box2: {
        width: 140,
        height: 150,
        marginTop: 5
    },
    box3: {
        width: 140,
        height: 305,
        position: 'relative'
    },

    container2: {
        flex: 1,
        height: 300,
        marginVertical: 5,
        flexDirection: "row",
    },
})