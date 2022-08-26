import React from "react";
import { Text, View, Image } from "react-native";

function Content({ imgProfile, nameUser, imgUpload }) {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={{ uri: imgProfile }} style={{ borderRadius: 50, width: 35, height: 35, marginHorizontal: 5, borderWidth: 2, borderColor: 'red' }} />
                    <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: 'bold' }}>{nameUser}</Text>
                </View>
                <Image source={require('../../assets/img/titik-3.png')} style={{ width: 15, height: 15 }} />
            </View>

            {/* gambar */}
            <Image source={{ uri: imgUpload }} style={{ resizeMode: 'cover', width: 500, height: 450 }} />
            <View style={{ flexDirection: 'column', padding: 5 }}>
                <View style={{ backgroundColor: 'white', marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/img/chat-icon.png')} style={{ width: 30, height: 30, marginHorizontal: 8 }} />
                        <Image source={require('../../assets/img/heart-icon.png')} style={{ width: 40, height: 40, marginHorizontal: 8 }} />
                        <Image source={require('../../assets/img/send-icon.png')} style={{ width: 30, height: 30, marginHorizontal: 8 }} />
                    </View>
                    <Image source={require('../../assets/img/bookmark-icon.png')} style={{ width: 30, height: 30, marginHorizontal: 8 }} />
                </View>
                <View style={{ paddingHorizontal: 5, marginTop: 3 }}>
                    <Text style={{ fontSize: 15 }}>
                        Disukai oleh <Text style={{ fontWeight: 'bold', fontSize: 15 }}>animegumi.id</Text> dan <Text style={{ fontWeight: 'bold', fontSize: 15 }}>8.274 lainnya</Text>
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                        animegumi.id
                        <Text style={{ fontSize: 15 }}> Pedagang orang dulu ini pake perahu kalo jualan...
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'grey' }}>Selengkapnya</Text>
                        </Text>
                    </Text>
                    <Text style={{ marginTop: 5 }}>1 jam yang lalu</Text>
                </View>
            </View>
        </View>
    );
}

export default Content;