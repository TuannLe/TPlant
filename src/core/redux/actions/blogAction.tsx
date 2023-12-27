import * as TYPES from '../constants/blogConstant'
import { BlogInterface } from '../interfaces/blogInterface'

// GET ALL
export const GetALlBlogsStart = (payload: any) => {
    return {
        type: TYPES.GET_ALL_BLOGS_START,
        payload
    }
}

export const GetALlBlogsSuccess = (payload: BlogInterface) => {
    return {
        type: TYPES.GET_ALL_BLOGS_SUCCESS,
        payload
    }
}

// ADD FAVORITE BLOG
export const AddFavoriteBlog = (payload: any) => {
    return {
        type: TYPES.ADD_FAVORITE_BLOG,
        payload
    }
}

// DELETE FAVORITE BLOG
export const DeleteFavoriteBlog = (payload: number) => {
    return {
        type: TYPES.DELETE_FAVORITE_BLOG,
        payload
    }
}

