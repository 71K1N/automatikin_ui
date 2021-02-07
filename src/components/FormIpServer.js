import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, AsyncStorage } from "react-native";
import {
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
} from "@expo-google-fonts/montserrat"

export default function FormIpServer(props) {
    

    _saveIpServer = async (ip) => {
        try {
            await AsyncStorage.setItem(
                'serverIP',
                ip
            );
            Alert.alert("IP salvo com sucesso!!!")
            setServerIp("")            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.infoBlockCard}>
            <Text style={styles.infoBlockTitle}>Url do servidor</Text>
            <View style={styles.inputLine}>
                <TextInput
                    keyboardType="number-pad"
                    placeholder="ex.: 192.168.0.1"
                    style={styles.input}
                    defaultValue={serverIp}
                    onChangeText={(e) => { setServerIp(e) }}
                />
                <TouchableOpacity style={styles.btnSave} onPress={() => { _saveIpServer(serverIp) }}>
                    <Text style={styles.btnSaveText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoBlockCard: {
        marginTop: 20,
        marginHorizontal: 10,
    },
    infoBlockTitle: {
        fontFamily: "Montserrat_500Medium",
        color: "#8F8F8F"
    },
    btnSave: {
        backgroundColor: "#1C1CBF",
        borderRadius: 5,
        height: 30,
        width: "19%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    btnSaveText: {
        color: "#D8D7D4",
        fontFamily: "Montserrat_400Regular",
    },
})