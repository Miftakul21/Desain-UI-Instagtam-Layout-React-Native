import React from "react";
import { SafeAreaView, Text, View, Image, Dimensions, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Content from "../component/Content";
import Header from "../component/Header";
import Story from "../component/Story";

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <Story />
                <Content imgProfile={'https://picsum.photos/200/300?random=1'} nameUser={'Siti_AccountOfficial'} imgUpload={'https://picsum.photos/200/300?random=68'} />
                <Content imgProfile={'https://picsum.photos/200/300?random=11'} nameUser={'hud.hudhud'} imgUpload={'https://picsum.photos/200/300?random=70'} />
                <Content imgProfile={'https://picsum.photos/200/300?random=44'} nameUser={'DwiWoi_OfficialAccount'} imgUpload={'https://picsum.photos/200/300?random=90'} />
                <Content imgProfile={'https://picsum.photos/200/300?random=28'} nameUser={'Siti_Jaitunah123'} imgUpload={'https://picsum.photos/200/300?random=40'} />
                <Content imgProfile={'https://picsum.photos/200/300?random=45'} nameUser={'Bejo_54321'} imgUpload={'https://picsum.photos/200/300?random=60'} />
            </ScrollView >
        </SafeAreaView >
    );
}

export default HomeScreen;