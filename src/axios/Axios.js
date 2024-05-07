import axios from "axios"
import Cookies from "universal-cookie"

const cookies = new Cookies()

const instance = axios.create({
    //baseURL: "https://gastrorace-backend-docker.onrender.com",
    baseURL: "http://localhost:3001",
    //baseURL: "https://gastrorace-backend.onrender.com"
})

// instance.interceptors.request.use( config => {
//     //config.headers.Authorization = `Bearer ${cookies.get('token')}`
// }
// )

export default instance