import * as TYPES from '../constants/userConstant'
import { UserInterface } from '../interfaces/userInterface';

export interface InitStateModel {
    currentUser: UserInterface | undefined;
    token: string | undefined;
    message: string | undefined;
}

interface ActionModel {
    type: string;
    payload: any;
}

const initState: InitStateModel = {
    currentUser: undefined,
    token: undefined,
    message: undefined,
}

export default function authReducers(state = initState, action: ActionModel) {
    switch (action.type) {
        // login
        case TYPES.LOG_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                token: action.payload.token,
            }
        // register
        case TYPES.REGISTER_SUCCESS:
            return {
                ...state,
            }
        // log out
        case TYPES.LOGOUT:
            return {
                ...state,
                currentUser: {},
                token: ''
            }
        default:
            return state
    }
}