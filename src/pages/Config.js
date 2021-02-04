import React from "react";
import { Text, View, StyleSheet} from "react-native";
import { Teko_300Light } from "@expo-google-fonts/teko"
import { Feather } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Item from "../components/Item";
import Zones from "../components/Zones";
import { useNavigation } from "@react-navigation/native";

export default function Config() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.titleBar}>
                    <View style={styles.tbTemp}>
                        <Feather onPress={navigation.goBack}
                            name="arrow-left"
                            size={24}
                            color="#8F8F8F"
                        />
                    </View>
                    <View style={styles.tbTitle}><Text style={styles.titleDesc}>CONFIGURACAO</Text></View>
                    <View style={styles.tbConfig}>
                        <Feather
                            name="sliders"
                            size={24}
                            color="#8F8F8F"
                        />
                    </View>
                </View> 
                <View>
                    <Text>Url do servidor</Text>
                    <TextInput
            placeholder="192.168.0.1"
            style={styles.input}
          />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#343534",
        width:'100%',
        height: "100%",
        paddingTop: 5,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    titleBar: {        
        flexDirection: "row",        
        marginLeft: 10,
        marginRight: 10,          
    },
    tbTemp: {
        width: "25%",
        flexDirection: "row",
        alignItems: "center",             
    },
    tbTitle: {
        width: "50%",
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: 'center'       
    },
    tbConfig: {
        width: "25%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent:'flex-end',                        
    },
    titleDesc: {
        fontFamily: "Teko_300Light",
        fontSize: 30,
        color: "#8F8F8F"

    },
    input: {
        fontFamily: "Montserrat_500Medium",
        paddingHorizontal: 10,
        fontSize: 13,
        width: "98%",
        backgroundColor:'white',
        borderRadius:5
      },

})