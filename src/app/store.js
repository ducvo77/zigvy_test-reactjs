import storage from 'redux-persist/lib/storage'
import searchReducer from '../features/search/searchSlice'
import postReducer from '../features/post/postSlice'
import userReducer from '../features/user/userSlice'
import commentReducer from '../features/comment/commentSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducers = combineReducers({
  search: searchReducer,
  post: postReducer,
  user: userReducer,
  comment: commentReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
