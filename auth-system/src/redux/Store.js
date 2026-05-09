import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../redux/rootReducer'
import {
    persistStore,
    persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const config = {
    key : 'root',
    storage : storage.default  ? storage.default : storage
}
const persistedReducer = persistReducer(config , rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
export default store;