import React from "react";
import { Text, View, Image, ScrollView, } from "react-native";

function Story() {
    return (
        <View style={{ marginVertical: 2, padding: 15, backgroundColor: 'white' }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <View>
                            <Image source={{ uri: 'https://picsum.photos/200/300?random=1' }} style={{ borderRadius: 50, width: 50, height: 50, marginHorizontal: 5 }} />
                            <Image source={require('../../assets/img/tambah-icon.png')} style={{ width: 19, height: 19, position: 'absolute', right: 0, bottom: 0 }} />
                        </View>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Bejo</Text>
                    </View>

                    <View>
                        <Image source={{ uri: 'https://picsum.photos/200/300?random=7' }} style={{ borderRadius: 50, width: 50, height: 50, marginHorizontal: 5, borderWidth: 2, borderColor: 'red' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Bima</Text>
                    </View>

                    <View>
                        <Image source={{ uri: 'https://picsum.photos/200/300?random=16' }} style={{ borderRadius: 50, width: 50, height: 50, marginHorizontal: 5, borderWidth: 2, borderColor: 'red' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Putri</Text>
                    </View>

                    <View>
                        <Image source={{ uri: 'https://picsum.photos/200/300?random=20' }} style={{ borderRadius: 50, width: 50, height: 50, marginHorizontal: 5, borderWidth: 2, borderColor: 'red' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Dinda</Text>
                    </View>

                    <View>
                        <Image source={{ uri: 'https://picsum.photos/200/300?random=11' }} style={{ borderRadius: 50, width: 50, height: 50, marginHorizontal: 5, borderWidth: 2, borderColor: 'red' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Rina</Text>
                    </View>

                    <View>
                        <Image source={{ uri: 'https://picsum.photos/200/300?random=6' }} style={{ borderRadius: 50, width: 50, height: 50, marginHorizontal: 5, borderWidth: 2, borderColor: 'red' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Bono</Text>
                    </View>

                    <View>
                        <Image source={{ uri: 'https://picsum.photos/200/300?random=4' }} style={{ borderRadius: 50, width: 50, height: 50, marginHorizontal: 5, borderWidth: 2, borderColor: 'red' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Paijo</Text>
                    </View>

                    <View>
                        <Image source={{ uri: 'https://picsum.photos/200/300?random=3' }} style={{ borderRadius: 50, width: 50, height: 50, marginHorizontal: 5, borderWidth: 2, borderColor: 'red' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Tomo</Text>
                    </View>

                    <View>
                        <Image source={{ uri: 'https://picsum.photos/200/300?random=2' }} style={{ borderRadius: 50, width: 50, height: 50, marginHorizontal: 5, borderWidth: 2, borderColor: 'red' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Dono</Text>
                    </View>

                    <View>
                        <Image source={{ uri: 'https://picsum.photos/200/300?random=10' }} style={{ borderRadius: 50, width: 50, height: 50, marginHorizontal: 5, borderWidth: 2, borderColor: 'red' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Retno</Text>
                    </View>

                    <View>
                        <Image source={{ uri: 'https://picsum.photos/200/300?random=2' }} style={{ borderRadius: 50, width: 50, height: 50, marginHorizontal: 5, borderWidth: 2, borderColor: 'red' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Eko</Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default Story;