import { Frame } from 'common/types/frame'
import { State } from '../rootReducer'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FramesState {
  currFrame: Frame | undefined
  loading: boolean
}

const initialState: FramesState = {
  currFrame: undefined,
  loading: false,
}

export const frames = createSlice({
  name: 'frames',
  initialState,
  reducers: {
    setLoading: (state: FramesState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setCurrFrame: (
      state: FramesState,
      action: PayloadAction<Array<Frame>>
    ) => ({
      ...state,
      currFrame: action.payload[0],
    }),
    resetCurrVideoFrames: (state: FramesState) => {
      state.currFrame = undefined
    },
  },
})

export const framesSelectors = {
  isLoading: (state: State): boolean => state.frames.loading,
  getCurrFrame: (state: State): Frame | undefined => state.frames.currFrame,
}
