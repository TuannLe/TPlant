import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/userAction'
import * as APIS from '../../apis/userApi'
import * as TYPES from '../constants/userConstant'

function* loginSaga(action: any) {
    try {
        const res: ResponseGenerator = yield call(APIS.login, action.payload)
        console.log(res)
        if (res.status == 200) {
            yield put(actions.LoginSuccess(res.data))
        }
    } catch (error) {
        console.log(error)
    }
}

// function* getUserSaga(action: any) {
//     try {
//         const res = yield call(apis.getUser, action.payload)
//         if (res.status === 200) {
//             yield put(actions.GetUserSuccess(res.data[0]))
//         }
//     } catch (error) {
//         yield put(actions.GetUserFailure(error))
//     }
// }

// function* editUser(action: any) {
//     try {
//         const res = yield call(apis.editUser, action.payload)
//         if (res.status === 200) {
//             yield put(actions.editUserSuccess(res.data))
//         }
//     } catch (error) {
//         yield put(actions.editUserFailure(error))
//     }
// }

const userSaga = [
    takeLatest(TYPES.LOG_IN_START, loginSaga),
]

export default userSaga