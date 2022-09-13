import React from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";

function NavbarItem() {
    return (
        <View style={{ marginVertical: 2, paddingVertical: 10 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.container2}>
                    <View style={styles.box1}>
                        <Text style={styles.text_item}>Shops</Text>
                    </View>

                    <View style={styles.box1}>
                        <Text style={styles.text_item}>Video</Text>
                    </View>

                    <View style={styles.box1}>
                        <Text style={styles.text_item}>Pilihan Editor</Text>
                    </View>

                    <View style={styles.box1}>
                        <Text style={styles.text_item}>Koleksi</Text>
                    </View>


                    <View style={styles.box1}>
                        <Text style={styles.text_item}>Panduan</Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container2: {
        flexDirection: 'row',
    },
    box1: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#cccccc',
        marginHorizontal: 5,
        borderRadius: 5,
        opacity: 0.9
    },
    text_item: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    }

})


export default NavbarItem;