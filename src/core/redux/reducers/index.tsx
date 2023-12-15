import { combineReducers } from 'redux'
import user, { InitStateModel as InitAuthStateModel } from './userReducer'

export interface RootReducerModel {
    user: InitAuthStateModel;
}

export default combineReducers<RootReducerModel>({
    user,
})