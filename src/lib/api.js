import axios from "axios";
import { AsyncStorage } from "react-native";

const getIpServer = async () => {
    try {
        const ip = await AsyncStorage.getItem('serverIP')     
    } catch (error) {
        console.log(error);
    }
}

const api = axios.create({
    baseURL: `http://${ipServer}:8080`
})
export default api;