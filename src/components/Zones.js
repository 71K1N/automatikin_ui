import React , { useState }  from "react";
import { View, Text,StyleSheet } from "react-native";
import {Teko_300Light, Teko_400Regular} from "@expo-google-fonts/teko"

export default function Zones(props) {
    return(
        <View style={styles.container}>
            <Text style={props.active?styles.textAtive:styles.text}>{props.name}</Text>           
        </View>
    )    
}

const styles = StyleSheet.create(
    {
        container:{
            marginTop:30,
            height:30,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            marginLeft:10,
        },
        textAtive:{
            fontFamily:"Teko_400Regular",
            color:"#D4D9D5",
            fontSize: 27,
            alignSelf:"center"
        },
        text:{
            fontFamily:"Teko_300Light",
            color:"#8F8F8F",
            fontSize: 24
        }
    }
)