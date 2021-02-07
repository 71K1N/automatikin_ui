import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Zones from "../components/Zones";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Item from "../components/Item";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.titleBar}>
                    <View style={styles.tbTemp}>
                        <Feather
                            name="thermometer"
                            size={24}
                            color="#8F8F8F"
                        />
                        <Text style={styles.tempDesc}>00c</Text>
                    </View>
                    <View style={styles.tbTitle}><Text style={styles.titleDesc}>THE TIKIN HOUSE</Text></View>
                    <View style={styles.tbAlarm}>
                        <Feather onPress={()=>{navigation.navigate("Config")}}
                            name="settings"
                            size={24}
                            color="#8F8F8F"
                        />
                    </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Zones active={1} name="RASPBERRY" />
                    <Zones active={0} name="QUARTO" />
                    <Zones active={0} name="SALA" />
                    <Zones active={0} name="COZINHA" />
                    <Zones active={0} name="VARANDA" />
                    <Zones active={0} name="VARANDA" />
                </ScrollView>

                <View style={styles.itemList} >
                    <Item pin={4} color="#27C3F9" />
                    <Item pin={2} color="#1AB857"/>
                    <Item pin={3} color="#EDB525"/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#343534",
        height: "100%",
        paddingTop: 5,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 10
    },
    tbTemp: {
        width: "25%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    tbTitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    tbAlarm: {
        width: "25%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    titleDesc: {
        fontFamily: "Teko_300Light",
        fontSize: 30,
        color: "#8F8F8F"

    },
    tempDesc: {
        fontFamily: "Teko_300Light",
        fontSize: 30,
        color: "#8F8F8F"

    },
    itemList:{
        paddingTop:20,
        margin:10,
        width:"90%",
        alignItems:"center",
    }

})