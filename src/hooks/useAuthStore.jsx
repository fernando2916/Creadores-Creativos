
import { useDispatch, useSelector } from "react-redux"
import creadoresApi from "../api/CreadoresApi";


export const useAuthStore = () => {

    const {status, user, errorMessge } = useSelector( state => state.auth );
    // const dispatch = useDispatch();

    const startLogin = async({email, password }) => {
        console.log({email, password})

        try {            
            const resp = await creadoresApi.post('/auth/login', {email, password})
            console.log(resp)

        } catch (error) {
            console.log(error)
        }
    }



    return{
        //* Propiedades
        status,
        user,
        errorMessge,

        //* Métodoa
        startLogin
    }
}