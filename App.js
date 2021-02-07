import React from 'react';
import { StatusBar } from 'expo-status-bar'; //status bar
import Routes from "./src/router";
import{useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat'
import{Teko_300Light,Teko_400Regular} from '@expo-google-fonts/teko'
import AppLoading  from "expo-app-loading"; // loading

export default function App() {
  // CARREGAR AS FONTES
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Teko_300Light,
    Teko_400Regular   
  });

  if (!fontsLoaded){
    return <AppLoading/>;
  }
  return (  
    <>
    <StatusBar style="light" backgroundColor="#000" translucent={false}/>   
    <Routes/> 
    </>
  );
}
