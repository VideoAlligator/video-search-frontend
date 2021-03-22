import { Video } from 'common/types/video'
import { State } from '../rootReducer'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface VideosState {
  loading: boolean
  videos: Video[]
  queryResults: Video[]
  currVideo?: Video
}

const initialState: VideosState = {
  loading: false,
  videos: [],
  queryResults: [],
  currVideo: undefined,
}

export const videos = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setLoading: (state: VideosState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
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
    resetCurrVideo: (state: VideosState) => {
      state.currVideo = undefined
    },
  },
})

export const videosSelectors = {
  isLoading: (state: State): boolean => state.videos.loading,
  getAllVideos: (state: State): Video[] => state.videos.videos,
  getQueryResults: (state: State): Video[] => state.videos.queryResults,
  getCurrVideo: (state: State): Video | undefined => state.videos.currVideo,
}
