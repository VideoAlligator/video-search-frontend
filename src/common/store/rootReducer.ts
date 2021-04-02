import { combineReducers } from 'redux'

import { videos } from './videos'

export const rootReducer = combineReducers({
  videos: videos.reducer,
})

export type State = ReturnType<typeof rootReducer>
