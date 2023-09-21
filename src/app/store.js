import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { hospitalApi } from '../services/hospitalAPi'

export const store = configureStore({
  reducer: {
    [hospitalApi.reducerPath]: hospitalApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hospitalApi.middleware),
})
setupListeners(store.dispatch)