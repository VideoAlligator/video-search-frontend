import { combineReducers } from 'redux'

import { videos } from './videos'
import { frames } from './frames'

export const rootReducer = combineReducers({
  videos: videos.reducer,
  frames: frames.reducer,
})

export type State = ReturnType<typeof rootReducer>
