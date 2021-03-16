import { Video } from 'common/types/video'
import { State } from '../rootReducer'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface VideosState {
  videos: Video[]
  queryResults: Video[]
  currVideo?: Video
}

const initialState: VideosState = {
  videos: [],
  queryResults: [],
  currVideo: undefined,
}

export const videos = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideos: (state: VideosState, action: PayloadAction<Array<Video>>) => ({
      ...state,
      videos: action.payload,
    }),
    setResultedVideos: (
      state: VideosState,
      action: PayloadAction<Array<Video>>
    ) => ({
      ...state,
      queryResults: action.payload,
    }),
    setCurrVideo: (state: VideosState, action: PayloadAction<Video>) => ({
      ...state,
      currVideo: action.payload,
    }),
  },
})

export const videosSelectors = {
  getAllVideos: (state: State): Video[] => state.videos.videos,
  getQueryResults: (state: State): Video[] => state.videos.queryResults,
  getCurrVideo: (state: State): Video | undefined => state.videos.currVideo,
}
