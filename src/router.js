import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"

//  -   PAGINAS
import Home from "./pages/Home"

const Stack = createStackNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home}/>               
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;