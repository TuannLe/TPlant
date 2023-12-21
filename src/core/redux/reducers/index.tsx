import { combineReducers } from 'redux'
import user, { InitStateModel as InitUserStateModel } from './userReducer'
import blog, { InitStateModel as InitBlogStateModel } from './blogReducer'

export interface RootReducerModel {
    user: InitUserStateModel;
    blog: InitBlogStateModel;
}

export default combineReducers<RootReducerModel>({
    user,
    blog
})