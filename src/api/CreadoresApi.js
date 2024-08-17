import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables'

const { VITE_API_URL } = getEnvVariables()


const creadoresApi = axios.create({
    baseURL: VITE_API_URL
})


// Todo: configurar interceptores

export default creadoresApi