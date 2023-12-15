import * as TYPES from '../constants/userConstant'
import { LoginInterface, RegisterInterface, UserInterface } from '../interfaces/userInterface'

// Login
export const LoginStart = (payload: LoginInterface) => {
    return {
        type: TYPES.LOG_IN_START,
        payload
    }
}

export const LoginSuccess = (payload: UserInterface) => {
    return {
        type: TYPES.LOG_IN_SUCCESS,
        payload
    }
}

// Register
export const RegisterStart = (payload: RegisterInterface) => {
    return {
        type: TYPES.REGISTER_START,
        payload
    }
}

export const RegisterSuccess = (payload: UserInterface) => {
    return {
        type: TYPES.REGISTER_SUCCESS,
        payload
    }
}

export const logout = () => {
    return {
        type: TYPES.LOGOUT,
    }
}


