import { LoginInterface, RegisterInterface } from '../redux/interfaces/userInterface'
import AXIOS from './index'

const url = '/users'
export const login = async (payload: LoginInterface) => {
    try {
        const res = await AXIOS.post(`${url}/login`, payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(res)
        return res
    } catch (error) {
        return error
    }
}

export const register = async (payload: RegisterInterface) => {
    try {
        const res = await AXIOS.post(`/auth/register`, {

        })
        return res
    } catch (error) {
        return error
    }
}

// export const editProfile = async ({ token, formData }) => {
//     console.log(token)
//     console.log(formData)
//     try {
//         const res = await AXIOS.post(`/v1/user/editProfile`, formData, {
//             headers: {
//                 'token': `Bearer ${token}`,
//                 'Content-Type': `multipart/form-data`,
//             }
//         })
//         return res
//     } catch (error) {
//         return error
//     }
// }