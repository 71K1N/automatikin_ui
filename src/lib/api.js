import axios from "axios";
import { AsyncStorage } from "react-native";

_getIpServer = async () => {
  try {
      const serverIP = await AsyncStorage.getItem('serverIP')
      if (serverIP != null) {
          return serverIP
      }
  } catch (error) {
      console.log(error);
  }
}

const ip = _getIpServer()


const api = axios.create({
    baseURL: `http://${ip}:8080`    
  })
  console.log(ip);
  export default api;