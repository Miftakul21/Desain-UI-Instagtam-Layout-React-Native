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
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    input: {
        width: '100%',
        paddingLeft: 50,
        paddingHorizontal: 40,
        backgroundColor: '#cccccc',
        color: '#000',
        fontSize: 20,
        borderRadius: 10,
        opacity: 0.9
    },

    icon: {
        position: 'absolute',
        zIndex: 1,
        left: 30,
    }

})