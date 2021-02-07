import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Switch, AsyncStorage } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import {
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
} from "@expo-google-fonts/montserrat"


export default function Item(props) {
    const pin = props.pin;
    const cor = props.color;

    const [activeServerIp, setActiveServerIp] = useState("")
    const url =`http://${activeServerIp}:8080`

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        const state = (isEnabled ? 0 : 1)
        changeLedState(pin, state)
    }

    useEffect(() => {
        _getIpServer()
    })

    _getIpServer = async () => {
        try {
            const ip = await AsyncStorage.getItem('serverIP')
            if (ip != null) {
                setActiveServerIp(ip)
            } else {
                setActiveServerIp("")
            }
        } catch (error) {
            console.log(error);
        }
    }

    //  ALTERAR ESTADO DO LED
    function changeLedState(pin, state) {
        axios.post(`${url}/pinout/${pin}/${state}`)
    }

    return (

        <View style={[styles.container, { backgroundColor: cor }]}>
            <Feather
                name="sun"
                size={40}
                color="#fff"
            />
            <View>
                <Text style={styles.itenTitle}>LAMPADA</Text>
                <Text style={styles.itenDesc}>Lampada pricipal</Text>
            </View>
            <Switch
                trackColor={{ false: "#343534", true: "#D4D7D6" }}
                thumbColor={isEnabled ? "#D4D9D5" : "#D4D9D5"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ alignSelf: "flex-start" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        marginTop: 15,
        //backgroundColor: cor,
        borderRadius: 20,
        padding: 10,
        flexDirection: "column",
        justifyContent: "space-between",
        elevation: 1
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