import storage from 'redux-persist/lib/storage'
import searchReducer from '../features/search/searchSlice'
import postReducer from '../features/post/postSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducers = combineReducers({
  search: searchReducer,
  post: postReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)
