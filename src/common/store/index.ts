import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { rootReducer, State } from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware<State>(), thunk],
})
