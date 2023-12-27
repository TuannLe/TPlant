import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootSaga from '../sagas'
import rootReducer from '../reducers'

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["user", "blog"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export default store