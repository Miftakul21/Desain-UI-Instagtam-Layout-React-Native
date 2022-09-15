import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Octicons';

function UserComponent() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.container_item}>
                    <View>
                        <Image source={{ uri: 'https://picsum.photos/200/300?random=1' }} style={styles.img_profile} />
                    </View>
                    <View style={styles.container_item_profile}>
                        <View style={styles.box1}>
                            <Text style={styles.number_item}>74</Text>
                            <Text style={styles.text_item}>Postingan</Text>
                        </View>
                        <View style={styles.box1}>
                            <Text style={styles.number_item}>304</Text>
                            <Text style={styles.text_item}>Mengikuti</Text>
                        </View>
                        <View style={styles.box1}>
                            <Text style={styles.number_item}>510</Text>
                            <Text style={styles.text_item}>Mengikuti</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text_item}>Hud Hud</Text>
                <Text style={styles.text_item}>Omae Wa Mou Shindeiru</Text>
                <View style={styles.container_button}>
                    <View style={styles.button_edit}>
                        <Text style={styles.text_edit_profil}>Edit Profil</Text>
                    </View>
                    <View style={styles.button_add}>
                        <Icon name="person-add" size={20} color="black" style={{ alignItems: 'center' }} />
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    container_item: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    img_profile: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    container_item_profile: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    box1: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    number_item: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text_item: {
        fontSize: 18,
        fontWeight: '500'
    },
    container2: {
        marginHorizontal: 10,
        flexDirection: 'column',
    },
    container_button: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },
    button_edit: {
        flex: 1,
        marginRight: 5,
        padding: 10,
        backgroundColor: '#cccccc',
        borderRadius: 10,
        opacity: 0.8
    },
    text_edit_profil: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    button_add: {
        flex: 0.1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#cccccc',
        borderRadius: 10,
        opacity: 0.8
    }

});


export default UserComponent;