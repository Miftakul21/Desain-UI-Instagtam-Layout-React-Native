import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome5';


function SearchBar() {
    return (
        <View style={style.containerInput}>
            <Icon style={style.icon} name="search" size={20} />
            <TextInput style={style.input} placeholder='Search...' />
        </View>
    );
}
export default SearchBar;


const style = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
    },
    input: {
        width: '100%',
        paddingLeft: 50,
        paddingHorizontal: 40,
        backgroundColor: '#bec3c9',
        fontSize: 20,
        borderRadius: 10
    },

    icon: {
        position: 'absolute',
        zIndex: 1,
        left: 30,
    }

})