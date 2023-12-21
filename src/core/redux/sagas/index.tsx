import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import blogSaga from './blogSaga'

export default function* mySaga() {
    yield all([
        ...userSaga,
        ...blogSaga
    ])
}