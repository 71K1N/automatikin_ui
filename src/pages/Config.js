import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, AsyncStorage } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

export default function Config() {
    // VARIAVEIS
    const navigation = useNavigation();
    const [serverIp, setServerIp] = useState("")
    const [activeServerIp, setActiveServerIp] = useState("")

    const [hasIp, seHasIp] = useState(false)

    const [showSetIP, setShowSetIP] = useState(false)
    const [showActiveServer, setShowActiveServer] = useState(false)


    // FUNCOES
    useEffect(() => {
        _getIpServer()
    })

    _saveIpServer = async (ip) => {
        try {
            await AsyncStorage.setItem(
                'serverIP',
                ip
            );
            Alert.alert("IP salvo com sucesso!!!")
            setServerIp("")
            _getIpServer();
        } catch (error) {
            console.log(error);
        }
    }

    _getIpServer = async () => {
        try {
            const ip = await AsyncStorage.getItem('serverIP')
            if (ip != null) {
                setActiveServerIp(ip)
            }else{
                setActiveServerIp("")
            }
        } catch (error) {
            console.log(error);
        }
    }

    _editIpServer = () => {        
        setShowSetIP(true)
        setServerIp(activeServerIp)
    }

    _deleteIpServer = async () => {
        try {
            await AsyncStorage.removeItem('serverIP')
            _getIpServer()
            alert("Removido com sucesso!!!")
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Barra fe titulo da pagina */}
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
                            name="settings"
                            size={24}
                            color="#8F8F8F"
                        />
                    </View>
                </View>

                {/* Area para definicao (gravar) do servidor onde esta a aplicacao */}
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


                {/* Area para visualizacao do servidor e se ele esta online*/}
                <View style={styles.infoBlockCard}>
                    <Text style={styles.infoBlockTitle}>Servidor ativo</Text>
                    <View style={styles.serverLine} >
                        <View style={styles.serverInformation}>
                            <Feather
                                name="circle"
                                size={24}
                                color="#39BF1C"
                            />
                            <Text style={styles.serverIp}>{activeServerIp}</Text>
                        </View>
                        <View style={styles.serverActions}>
                            <Feather style={styles.actions}
                                name="edit"
                                size={24}
                                color="#B3BF1C"
                                onPress={() => { _editIpServer() }}
                            />
                            <Feather style={styles.actions}
                                name="trash-2"
                                size={24}
                                color="#BF1C1C"
                                onPress={() => { _deleteIpServer() }}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#353434",
        width: '100%',
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
        justifyContent: 'flex-end',
    },
    titleDesc: {
        fontFamily: "Teko_300Light",
        fontSize: 30,
        color: "#8F8F8F"
    },
    inputLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        fontFamily: "Montserrat_500Medium",
        paddingHorizontal: 10,
        fontSize: 13,
        height: 30,
        width: "80%",
        backgroundColor: 'white',
        borderRadius: 5,
        textAlign: "center"
    },
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
    serverLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    serverInformation: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    serverIp: {
        fontFamily: "Montserrat_500Medium",
        marginLeft: 10,
        color: "#D8D7D4",
        fontSize: 24
    },
    serverActions: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    actions: {
        marginHorizontal: 5
    }


})