import { Dispatch } from '@reduxjs/toolkit'
import qs from 'query-string'
import { AxiosResponse } from 'axios'

import * as api from 'common/api'
import { frames } from 'common/store/frames'
import { Frame } from 'common/types/frame'

interface FrameResponse extends AxiosResponse {
  frames?: Frame[]
}

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
    const query = {
      videoName: videoName,
      keyword: keyword,
    }
    const res: FrameResponse = await api.client.get(
      `${api.paths.URL_FRAME}?${qs.stringify(query, {
        arrayFormat: 'bracket',
      })}`
    )
    dispatch(frames.actions.setCurrFrame(res.data))
  } catch (err) {
    console.log(err)
  } finally {
    dispatch(frames.actions.setLoading(false))
  }
}
