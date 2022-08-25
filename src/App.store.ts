import { combineReducers, configureStore } from '@reduxjs/toolkit'

// api
import { apiSlice } from './App.apiSlice'
// slice
import appReducer from './App.slice'

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  appSlice: appReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
