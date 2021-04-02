import { Dispatch } from '@reduxjs/toolkit'

import * as api from 'common/api'
import { frames } from 'common/store/frames'

export const resetFrame = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch(frames.actions.resetCurrVideoFrames())
  } catch (err) {
    console.log(err)
  }
}

export const getFrameByTitleAndKeyword = (
  videoName: string,
  keyword: string
) => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch(frames.actions.setLoading(true))
    const res = await api.client.get(
      `${api.paths.URL_FRAME}/${videoName}/${keyword}`
    )
    dispatch(frames.actions.setCurrFrame(res.data))
  } catch (err) {
    console.log(err)
  } finally {
    dispatch(frames.actions.setLoading(false))
  }
}
