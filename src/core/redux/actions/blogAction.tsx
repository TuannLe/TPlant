import * as TYPES from '../constants/blogConstant'
import { BlogInterface } from '../interfaces/blogInterface'

// GET ALL
export const GetALlBlogsStart = () => {
    return {
        type: TYPES.GET_ALL_BLOGS_START,
    }
}

export const GetALlBlogsSuccess = (payload: BlogInterface) => {
    return {
        type: TYPES.GET_ALL_BLOGS_SUCCESS,
        payload
    }
}
