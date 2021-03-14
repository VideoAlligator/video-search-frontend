import { Frame } from 'common/types/frame'
import { State } from '../rootReducer'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FramesState {
  currVideoFrames: Frame[]
}

const initialState: FramesState = {
  currVideoFrames: [],
}

export const frames = createSlice({
  name: 'frames',
  initialState,
  reducers: {
    setCurrVideoFrames: (
      state: FramesState,
      action: PayloadAction<Array<Frame>>
    ) => ({
      ...state,
      currVideoFrames: action.payload,
    }),
  },
})

export const framesSelectors = {
  getCurrVideoFrames: (state: State): Frame[] => state.frames.currVideoFrames,
}
