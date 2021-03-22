import { Frame } from 'common/types/frame'
import { State } from '../rootReducer'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FramesState {
  currVideoFrames: Frame[]
  loading: boolean
}

const initialState: FramesState = {
  currVideoFrames: [],
  loading: false,
}

export const frames = createSlice({
  name: 'frames',
  initialState,
  reducers: {
    setLoading: (state: FramesState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setCurrVideoFrames: (
      state: FramesState,
      action: PayloadAction<Array<Frame>>
    ) => ({
      ...state,
      currVideoFrames: action.payload,
    }),
    resetCurrVideoFrames: (state: FramesState) => {
      state.currVideoFrames = []
    },
  },
})

export const framesSelectors = {
  isLoading: (state: State): boolean => state.frames.loading,
  getCurrVideoFrames: (state: State): Frame[] => state.frames.currVideoFrames,
}
