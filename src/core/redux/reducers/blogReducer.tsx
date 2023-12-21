import * as TYPES from '../constants/blogConstant'
import { BlogInterface } from '../interfaces/blogInterface';

export interface InitStateModel {
    blogs: Array<BlogInterface> | undefined;
}

interface ActionModel {
    type: string;
    payload: any;
}

const initState: InitStateModel = {
    blogs: undefined,
}

export default function blogReducer(state = initState, action: ActionModel) {
    switch (action.type) {
        // GET ALL BLOGS
        case TYPES.GET_ALL_BLOGS_SUCCESS:
            return {
                ...state,
                blogs: action.payload.data,
            }
        default:
            return state
    }
}