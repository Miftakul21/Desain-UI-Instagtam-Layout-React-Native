import React from "react";
import { View, Image, StyleSheet } from "react-native";

function ContentSearch() {
    let acak = Math.ceil(Math.random() * 200);
    let img = 'https://picsum.photos/200/300?random= ';
    return (
        <View>
            <View style={style.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={style.box1}>
                        <Image source={{ uri: img + acak * 2 }} style={{ width: 140, height: 150, resizeMode: 'cover' }} />
                    </View>
                    <View style={style.box1}>
                        <Image source={{ uri: img + acak * 7 }} style={{ width: 140, height: 150, resizeMode: 'cover', marginHorizontal: -5 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <View style={style.box1}>
                        <Image source={{ uri: img + acak * 9 }} style={{ width: 140, height: 150, resizeMode: 'cover' }} />
                    </View>
                    <View style={style.box1}>
                        <Image source={{ uri: img + acak * 5 }} style={{ width: 140, height: 150, resizeMode: 'cover', marginHorizontal: -5 }} />
                    </View>
                </View>
                <Image source={{ uri: img + acak * 50 }} style={{ width: 140, height: 305, position: 'absolute', right: 0 }} />
            </View>
            <View style={style.container2}>
                <Image source={{ uri: img + acak * 50 }} style={{ width: 140, height: 305, }} />
                <View style={{ position: 'absolute', flexDirection: 'row', right: 0 }}>
                    <Image source={{ uri: img + acak * 9 }} style={{ width: 140, height: 150, marginHorizontal: 6 }} />
                    <Image source={{ uri: img + acak * 40 }} style={{ width: 140, height: 150 }} />
                </View>
                <View style={{ marginTop: 1 }}>
                    <View style={{ position: 'absolute', flexDirection: 'row', right: 0, bottom: 0, }}>
                        <Image source={{ uri: img + acak * 20 }} style={{ width: 140, height: 150, marginHorizontal: 6 }} />
                        <Image source={{ uri: img + acak * 30 }} style={{ width: 140, height: 150 }} />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ContentSearch;

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: 300,
        position: 'relative',
        marginVertical: 10
    },
    box1: {
        width: 150,
        height: 150,
    },
    container2: {
        flex: 1,
        height: 300,
    }

})