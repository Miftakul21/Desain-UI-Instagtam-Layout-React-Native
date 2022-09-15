import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome5';

function HeaderProfile() {
    return (
        <View style={styles.container}>
            <View style={styles.container_user}>
                <Text style={styles.text_username}>hud.hudhud</Text>
                <Icon name="keyboard-arrow-down" size={25} color="#000" />
            </View>
            <View style={styles.continer_items}>
                <Icon2 name="plus-square" size={24} color="#000" />
                <Icon2 name="bars" size={22} color="#000" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container_user: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_username: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginRight: 5
    },
    continer_items: {
        width: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'

    }
});

export default HeaderProfile;
