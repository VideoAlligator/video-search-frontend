import { Dispatch } from '@reduxjs/toolkit'
import qs from 'query-string'
import { AxiosResponse } from 'axios'

import * as api from 'common/api'
import { frames } from 'common/store/frames'
import { Frame } from 'common/types/frame'

interface FrameResponse extends AxiosResponse {
  frames?: Frame[]
}

export const getFrameByVideoId = (videoId: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    const query = {
      //   frameId: videoId,
    }
    const res: FrameResponse = await api.client.get(
      `${api.paths.URL_FRAME}?${qs.stringify(query, {
        arrayFormat: 'bracket',
      })}`
    )
    dispatch(frames.actions.setCurrVideoFrames(res.data))
  } catch (err) {
    console.log(err)
  }
}
