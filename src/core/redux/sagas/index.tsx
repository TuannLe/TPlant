import { all } from 'redux-saga/effects'
import userSaga from './userSage'

export default function* mySaga() {
    yield all([
        ...userSaga,
    ])
}