import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Feather } from "@expo/vector-icons";
import api from "../lib/api";
import {
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
} from "@expo-google-fonts/montserrat"

//  ALTERAR ESTADO DO LED
function changeLedState(pin, state) {
    api.post(`/pinout/${pin}/${state}`)
}

export default function Item(props) {
    const pin= props.pin;
    const cor= props.color;
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        const state = (isEnabled?0:1)
        changeLedState(pin,state)
    }
    return (
        <View style={[styles.container,{backgroundColor:cor}]}>
            <Feather
                name="target"
                size={40}
                color="#fff"
            />
            <View>
                <Text style={styles.itenTitle}>LED </Text>
                <Text style={styles.itenDesc}>Um led bacana</Text>
            </View>
            <Switch
                trackColor={{ false: "#343534", true: "#D4D7D6" }}
                thumbColor={isEnabled ? "#D4D9D5" : "#D4D9D5"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{alignSelf:"flex-start"}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        marginTop:15,
        //backgroundColor: cor,
        borderRadius: 20,
        padding: 10,
        flexDirection: "column",
        justifyContent: "space-between",
        elevation:1
    },
    itenTitle: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 18,
        color: "#FFF"
    },
    itenDesc: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 12,
        color: "#FFF"
    }

})