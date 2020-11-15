import { Video } from 'common/types/video'
import { State } from '../rootReducer'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface VideosState {
  videos: Video[]
}

const initialState: VideosState = {
  videos: [],
}

export const videos = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideos: (state: VideosState, action: PayloadAction<Array<Video>>) => ({
      ...state,
      videos: action.payload,
    }),
  },
})

export const videosSelectors = {
  getVideos: (state: State): Video[] => state.videos.videos,
}
