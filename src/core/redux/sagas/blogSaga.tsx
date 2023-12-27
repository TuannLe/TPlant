import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/blogAction'
import * as APIS from '../../apis/blogApi'
import * as TYPES from '../constants/blogConstant'

function* getAllBlogs(action: any) {
    try {
        const res: ResponseGenerator = yield call(APIS.getAllBlogs, action.payload)
        if (res.status == 200) {
            yield put(actions.GetALlBlogsSuccess(res.data))
        }
    } catch (error) {
        console.log(error)
    }
}

const blogSaga = [
    takeLatest(TYPES.GET_ALL_BLOGS_START, getAllBlogs),
]

export default blogSaga