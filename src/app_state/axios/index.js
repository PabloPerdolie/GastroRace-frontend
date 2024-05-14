import axios from "axios"
import Cookies from "universal-cookie"

const cookies = new Cookies()


const API_DEV_URL = "http://localhost:3001"
const API_PROD_URL = "https://gastrorace-backend.onrender.com"
export const STATIC_URL = `${import.meta.env.MODE === 'prod' 
    ? API_PROD_URL 
    : API_DEV_URL}`

const instance = axios.create({
    baseURL: STATIC_URL,
})

instance.interceptors.request.use( config => {
    config.headers.Authorization = `Bearer ${cookies.get('token')}`
    return config
})

export default instance