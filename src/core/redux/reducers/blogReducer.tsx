import * as TYPES from '../constants/blogConstant'
import { BlogInterface } from '../interfaces/blogInterface';

export interface InitStateModel {
    blogs: Array<BlogInterface> | undefined;
    blogsFavorite: Array<BlogInterface> | undefined;
}

interface ActionModel {
    type: string;
    payload: any;
}

const initState: InitStateModel = {
    blogs: undefined,
    blogsFavorite: []
}

export default function blogReducer(state = initState, action: ActionModel) {
    switch (action.type) {
        // GET ALL BLOGS
        case TYPES.GET_ALL_BLOGS_SUCCESS:
            return {
                ...state,
                blogs: action.payload,
            }
        // ADD FAVORITE BLOG
        case TYPES.ADD_FAVORITE_BLOG:
            const newArrayFavoriteBlog = state.blogsFavorite
            if (newArrayFavoriteBlog?.length) {
                if (newArrayFavoriteBlog.findIndex((item) => {
                    return item.article_id == action.payload.article_id
                }) == -1) {
                    newArrayFavoriteBlog.push(action.payload)
                }
            } else {
                newArrayFavoriteBlog?.push(action.payload)
            }
            return {
                ...state,
                blogsFavorite: newArrayFavoriteBlog,
            }
        case TYPES.DELETE_FAVORITE_BLOG:
            const newArrayAfterDelete = state.blogsFavorite
            newArrayAfterDelete?.splice(newArrayAfterDelete.findIndex((item) => {
                return item.article_id == action.payload
            }), 1)
            return {
                ...state,
                blogsFavorite: newArrayAfterDelete
            }
        default:
            return state
    }
}